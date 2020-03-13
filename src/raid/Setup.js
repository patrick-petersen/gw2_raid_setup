import React, {Component} from 'react';

import './Setup.css';

class Setup extends Component {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props) {
        super(props);
        this.state = {
            setupState: Setup.setupStates[0]
        };
    }
    render() {
        return (
            <div className={"setup " + this.state.setupState}>
                <div className={"setup-name"}>
                    <h3>Setup: {this.props.name}</h3>
                </div>
                <div className={"setup-roles"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Setup;