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

        this.addSaveCallback = this.addSaveCallback.bind(this);
        this.saveChildren = this.saveChildren.bind(this);

        this.saveCallbacks = [];

        this.props.saveCallback(this.saveChildren);
    }

    addSaveCallback(callback) {
        this.saveCallbacks.push(callback);
    }

    saveChildren() {
        this.saveCallbacks.forEach(callback => {
            callback();
        });
    }

    render() {
        return (
            <div className={"setup-roles"}>
            {
                this.props.roles.map((roleValue, roleIndex) => {
                        return (<Role {... roleValue} key={roleIndex}></Role>);
                    }
                )
            }
            </div>
        )
    }
}

export default Setup;