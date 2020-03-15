import React, {Component} from 'react';

import './SetupSelector.css';
import HistoryManager from "../helper/HistoryManager";

class SetupSelector extends Component {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props) {
        super(props);
        this.state = {
            setupState: SetupSelector.setupStates[0],
            activeSetup: HistoryManager.getInstance().getSetupSettings(this.props.bossId),
            setupSelection: false,
        };

        this.saveCallbacks = [];

        this.openSetupSelect = this.openSetupSelect.bind(this);
        this.cloneChildren = this.cloneChildren.bind(this);
        this.selectSetup = this.selectSetup.bind(this);
        this.childClick = this.childClick.bind(this);
        this.addSaveCallback = this.addSaveCallback.bind(this);
        this.saveSetup = this.saveSetup.bind(this);

        this.children = this.cloneChildren();
    }

    componentDidMount() {
        this.saveSetup(this.state.activeSetup, true);
    }

    cloneChildren() {
        return React.Children.map(this.props.children, (child, index) => {
            let props = Object.assign({}, child.props);
            Object.assign(props, {
                bossId: this.props.bossId,
                saveCallback: this.addSaveCallback(index),
            });

            return React.cloneElement(child, props);
        });
    }

    openSetupSelect() {
        console.log("openSelect");
        this.setState({
            setupSelection: true
        });
    }

    selectSetup(setupKey) {
        console.log("selected: ", setupKey);
        this.setState({
            setupSelection: false,
            activeSetup: setupKey
        });

        this.saveSetup(setupKey);
        this.saveCallbacks[setupKey]();
    }

    saveSetup(setupKey, dontClearPlayers) {
        HistoryManager.getInstance().saveSetupSettings(this.props.bossId, setupKey, dontClearPlayers);
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
        }).bind(this)
    }

    addSaveCallback(index) {
        return ((callback) => {
            this.saveCallbacks[index] = callback;
        }).bind(this)
    }

    renderSetup(child, index) {
        return (
            <div className={"setup " + this.state.setupState + (
                (this.state.setupSelection || this.state.activeSetup == index)? " active" : " inactive")}>
                <div className={"setup-name"}>
                    <h3 onClick={this.childClick(index)}>Setup: {child.props.name}</h3>
                </div>
                <div className={"setup-roles"}>
                    {child}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={"setupSelector"}>
                {
                    React.Children.map(this.children, (child, index) => {
                        if(this.state.activeSetup != index) return null;
                        return this.renderSetup(child, index);
                    })
                }
                {
                    React.Children.map(this.children, (child, index) => {
                        if(this.state.activeSetup == index) return null;
                        return this.renderSetup(child, index);
                    })
                }
            </div>

        )
    }
}

export default SetupSelector;