import * as React from 'react';

import "./Sidebar.scss";
import {
    Link,
} from "react-router-dom";
import * as RaidSetup from "../Setups/SetupConfigs/Setups/RaidSetup";


type NamedSetupType = {
    name: string,
    shortcut: string,
    setup: RaidSetup.RaidSetup<any>,
}

type SidebarProps = {
    toggleBigCallback: () => void,
    namedSetups: NamedSetupType[],
}

type SidebarState = {
    big: boolean,
}


class Sidebar extends React.Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props);

        this.state = {
            big: false,
        };

        this.toggleBig = this.toggleBig.bind(this);
    }

    toggleBig() : void {
        this.setState({
            big: !this.state.big
        });
        this.props.toggleBigCallback();
    }

    render() : JSX.Element {
        const big = this.state.big;

        return <div className={"sidebar"}>
            <h3>Quicklinks</h3>
            <div className={"sidebar-menu"}>
                <div className={"submenu"}>
                    <ul>
                        {this.props.namedSetups.map(setup => {
                            return <li key={setup.shortcut}><Link to={"/" + setup.shortcut}>{setup.name}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={"expand-all"} onClick={this.toggleBig}>{big?"collapse all":"expand all"}</div>
        </div>
    }
}

export default Sidebar;