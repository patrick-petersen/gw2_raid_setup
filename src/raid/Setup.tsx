import * as React from 'react';

import './Setup.scss';
import * as RaidSetup from "../Setups/SetupConfigs/Setups/RaidSetup";

type SetupProps = {
    setupValue: RaidSetup.Setup<any>
}

class Setup extends React.Component<SetupProps> {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props : SetupProps) {
        super(props);
        this.state = {
            setupState: Setup.setupStates[0],
        };
    }

    render() : JSX.Element {
        return (
            <div className={"setup-roles"
            + (this.props.setupValue.hidden?" hidden":"")}>
                {this.props.children}
            </div>
        )
    }
}

export default Setup;