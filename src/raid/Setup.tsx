import * as React from 'react';

import './Setup.scss';
import {RaidSetup} from "../Setups/SetupConfigs/RaidSetup";

type SetupProps = {
    setupValue: RaidSetup<any>
}

class Setup extends React.Component<SetupProps> {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props : SetupProps) {
        super(props);
        this.state = {
            setupState: Setup.setupStates[0],
        };
    }

    render() {
        return (
            <div className={"setup-roles"}>
                {this.props.children}
            </div>
        )
    }
}

export default Setup;