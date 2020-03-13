import React, {Component} from 'react';

import './Setup.css';

class SetupSelector extends Component {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props) {
        super(props);
        this.state = {
            setupState: SetupSelector.setupStates[0],
            activeSetup: 0,
            setupSelection: false,
        };

        this.openSetupSelect = this.openSetupSelect.bind(this);
        this.selectSetup = this.selectSetup.bind(this);
        this.childClick = this.childClick.bind(this);
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


    render() {
        console.log("rendering setupselector", this.props.children);
        return (
            <div className={"setupSelector"}>
            {React.Children.map(this.props.children, child => {
                return (
                    <div className={"setup " + this.state.setupState + (
                        (this.state.setupSelection || this.state.activeSetup == child.key)? " active" : " inactive")}>
                        <div className={"setup-name"}>
                            <h3 onClick={this.childClick(child.key)}>Setup: {child.props.name}</h3>
                        </div>
                        <div className={"setup-roles"}>
                            {child}
                        </div>
                    </div>);
                })
            }
            </div>

        )
    }
}

export default SetupSelector;