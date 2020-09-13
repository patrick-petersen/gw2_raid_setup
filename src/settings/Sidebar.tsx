import * as React from 'react';

import "./Sidebar.scss";
import LinkTo from "../Setups/LinkTo";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import * as RaidSetup from "../Setups/SetupConfigs/RaidSetup";

enum menus {
    WEEK = "Week" ,
    NAME = "Name"
}

type NamedSetupType = {
    name: string,
    shortcut: string,
    setup: RaidSetup.RaidSetup<any>,
}

type weeklySetupType = {week: number, setup: RaidSetup.RaidSetup<any>};

type SidebarProps = {
    toggleBigCallback: Function,
    namedSetups: NamedSetupType[],
    currentWeek: number,
    weeklySetups: weeklySetupType[],
}

type SidebarState = {
    selected: menus,
    big: boolean,
}


class Sidebar extends React.Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props);

        this.state = {
            selected: menus.WEEK,
            big: false,
        };

        this.selectSubmenu = this.selectSubmenu.bind(this);
        this.toggleBig = this.toggleBig.bind(this);
    }

    selectSubmenu(menu: menus) {
        this.setState({
            selected: menu,
        })
    }

    toggleBig() {
        this.setState({
            big: !this.state.big
        });
        this.props.toggleBigCallback();
    }

    render() {
        let submenu;
        switch (this.state.selected) {
            default:
            case "Name":
                submenu =
                    <ul>
                        {this.props.namedSetups.map(setup => {
                            return <li key={setup.shortcut}><Link to={"/" + setup.shortcut}>{setup.name}</Link></li>
                        })}
                    </ul>;
                break;
            case "Week":
                submenu =
                    <ul>
                        <li key={"currentWeek"}><Link to={"/" + this.props.currentWeek}>Current Week</Link></li>
                        {this.props.weeklySetups.map(setup => {
                            return <li key={setup.week}><Link to={"/" + setup.week}>Week {setup.week}</Link></li>
                        })}
                    </ul>;
            break;

        }
        const big = this.state.big;

        return <div className={"sidebar"}>
            <h3>Quicklinks</h3>
            <div className={"sidebar-menu"}>
                <div className={"menu-selector"}>
                    {Object.values(menus).map(menu => {
                        return <span onClick={() => this.selectSubmenu(menu)}
                            className={"selector" + (menu === this.state.selected?" active":"")}
                        key={menu}>
                            {menu}
                        </span>;
                    })}
                </div>
                <div className={"submenu"}>
                    {submenu}
                </div>
            </div>
            <div className={"expand-all"} onClick={this.toggleBig}>{big?"collapse all":"expand all"}</div>
        </div>
    }
}

export default Sidebar;