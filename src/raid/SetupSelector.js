import React, {Component} from 'react';

import './SetupSelector.css';
import Setup from "./Setup";

class SetupSelector extends Component {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props) {
        super(props);
        this.state = {
            setupState: SetupSelector.setupStates[0],
            selectedSetup: props.bossValue.selectedSetup,
            setupSelection: false
        };


        this.openSetupSelect = this.openSetupSelect.bind(this);
        this.selectSetup = this.selectSetup.bind(this);
        this.childClick = this.childClick.bind(this);
        this.wantToChangePlayerCallback = this.wantToChangePlayerCallback.bind(this);
        this.wantToShowChangePlayerCallback = this.wantToShowChangePlayerCallback.bind(this);
    }


    wantToChangePlayerCallback(setup) {
        return (role) => {
            return (fromPlayer, toPlayer) => {
                return true;
            }
        }
    }

    wantToShowChangePlayerCallback(setup) {
        return (role) => {
            return () => {
                return !this.state.setupSelection;
            }
        }
    }

    openSetupSelect() {
        const bossValue = this.props.bossValue;
        console.log("openSelect");
        if(bossValue.setups.length > 1) {
            this.setState({
                setupSelection: true
            });
        }
    }

    selectSetup(setupKey) {
        console.log("selected: ", setupKey);
        this.setState({
            setupSelection: false,
            selectedSetup: setupKey
        });
        this.props.bossValue.selectedSetup = setupKey;
        this.props.onChange();
    }

    childClick(setupKey) {
        return (() => {
            console.log("childClick: ", setupKey);
            if(this.state.setupSelection) {
                this.selectSetup(setupKey)
            }
            else {
                this.openSetupSelect();
            }
        })
    }

    renderSetup(child, index) {
        return (
            <div className={"setup " + this.state.setupState + (
                (this.state.setupSelection || this.state.selectedSetup === index)? " active" : " inactive")}>
                <div className={"setup-name"}>
                    <h3 onClick={this.childClick(index)}>{child.props.setupValue.name}</h3>
                </div>
                <div className={"setup-roles"}>
                    {child}
                </div>
            </div>
        );
    }

    render() {
        const bossValue = this.props.bossValue;
        const setups =  bossValue.setups.map((setupValue, setupIndex) => {
                    return (<Setup setupValue={setupValue} playerSettings={this.props.playerSettings}
                                   onChange={this.props.onChange} key={setupIndex}
                                   cheatString={JSON.stringify(setupValue)}
                                   wantToChangePlayer={this.wantToChangePlayerCallback(setupIndex)}
                                   wantToShowChangePlayer={this.wantToShowChangePlayerCallback(setupIndex)}>
                    </Setup>);
                });
        return (
            <div className={"setupSelector"
            + (this.state.setupSelection ? " open": " closed")}>
                {
                    React.Children.map(setups, (child, index) => {
                        if(this.state.selectedSetup !== index) return null;
                        return this.renderSetup(child, index);
                    })
                }
                {
                    React.Children.map(setups, (child, index) => {
                        if(this.state.selectedSetup === index) return null;
                        return this.renderSetup(child, index);
                    })
                }
            </div>

        )
    }
}

export default SetupSelector;