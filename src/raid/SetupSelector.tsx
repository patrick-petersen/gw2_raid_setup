import * as React from 'react';

import './SetupSelector.scss';
import * as RaidSetup from "../Setups/SetupConfigs/Setups/RaidSetup";

interface ISetup {
    props : {setupValue: {name: string}}
}

type SetupSelectorProps = {
    bossValue: RaidSetup.Boss<any>,
    onChange: () => void,
    cheatString?: string,
    playerSettings: RaidSetup.PlayerSettings<any>,
    children: (ISetup | undefined)[]
}

type SetupSelectorState = {
    setupState: string,
    selectedSetup: number,
    setupSelection: boolean,
}

class SetupSelector extends React.Component<SetupSelectorProps, SetupSelectorState> {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props: SetupSelectorProps) {
        super(props);
        this.state = {
            setupState: SetupSelector.setupStates[0],
            selectedSetup: props.bossValue.selectedSetup,
            setupSelection: false
        };


        this.openSetupSelect = this.openSetupSelect.bind(this);
        this.selectSetup = this.selectSetup.bind(this);
        this.childClick = this.childClick.bind(this);
    }

    openSetupSelect() : void {
        const bossValue = this.props.bossValue;
        console.log("openSelect");
        if(bossValue.setups.length > 1) {
            this.setState({
                setupSelection: true
            });
        }
    }

    selectSetup(setupKey: number) : void {
        console.log("selected: ", setupKey);
        this.setState({
            setupSelection: false,
            selectedSetup: setupKey
        });
        this.props.bossValue.selectedSetup = setupKey;
        this.props.onChange();
    }

    childClick(setupKey: number) {
        return (() : void => {
            console.log("childClick: ", setupKey);
            if(this.state.setupSelection) {
                this.selectSetup(setupKey)
            }
            else {
                this.openSetupSelect();
            }
        })
    }

    renderSetup(child: ISetup | undefined, index: number) : JSX.Element | undefined {
        if(child) {
            return (
                <div className={"setup " + this.state.setupState + (
                    (this.state.setupSelection || this.state.selectedSetup === index)? " active" : " inactive")}>
                    <div className={"setup-name"} onClick={this.childClick(index)}>
                        <h3>{child.props.setupValue.name}</h3>
                    </div>
                    <div className={"setup-roles"}>
                        {child}
                    </div>
                </div>
            );
        }
    }

    render() : JSX.Element {
        const bossValue = this.props.bossValue;
        const setups : (ISetup | undefined)[] =  this.props.children;

        const isDefaultSetup = !(Object.prototype.hasOwnProperty.call(bossValue, "defaultSetup")
            && (bossValue.defaultSetup !== this.state.selectedSetup));


        return (
            <div className={"setupSelector"
            + (this.state.setupSelection ? " open": " closed")
            + (isDefaultSetup ? " default" : " changed")}>
                {
                    React.Children.map(setups, (child: ISetup | undefined, index) => {
                        if(this.state.selectedSetup !== index) return null;
                        return this.renderSetup(child, index);
                    })
                }
                {
                    React.Children.map(setups, (child: ISetup | undefined, index) => {
                        if(this.state.selectedSetup === index) return null;
                        return this.renderSetup(child, index);
                    })
                }
            </div>

        )
    }
}

export default SetupSelector;