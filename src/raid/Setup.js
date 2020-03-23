import React, {Component} from 'react';

import './Setup.css';
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
        return (
            <div className={"setup-roles"}>
            {
                this.props.roles.map((roleValue, roleIndex) => {
                        return (<Role {... roleValue} playerSettings={this.props.playerSettings} key={roleIndex}></Role>);
                    }
                )
            }
            </div>
        )
    }
}

export default Setup;