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
                {
                    setupValue.roles.map((roleValue, roleIndex) => {
                        if(!roleValue.hidden) {
                            return (<Role roleValue={roleValue} playerSettings={this.props.playerSettings}
                                            onChange={this.props.onChange} key={roleValue.player}
                                            cheatString={JSON.stringify(roleValue)}></Role>);
                        }
                    })
                }
            </div>
        )
    }
}

export default Setup;