import React, {Component} from 'react';

import './Setup.scss';
import Role from "./Role";

class Setup extends Component {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props) {
        super(props);
        this.state = {
            setupState: Setup.setupStates[0],
        };
    }

    render() {
        const setupValue = this.props.setupValue;
        return (
            <div className={"setup-roles"}>
                {this.props.children}
            </div>
        )
    }
}

export default Setup;