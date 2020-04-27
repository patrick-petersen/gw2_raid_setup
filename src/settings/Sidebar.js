import React, {Component} from 'react';

import "./Sidebar.scss";
import LinkTo from "../Setups/LinkTo";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const menus = [ "Week", "Name"];

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "Week",
            big: false,
        };

        this.selectSubmenu = this.selectSubmenu.bind(this);
        this.toggleBig = this.toggleBig.bind(this);
    }

    selectSubmenu(index) {
        this.setState({
            selected: index,
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
                            return <li><Link to={"/" + setup.shortcut}>{setup.name}</Link></li>
                        })}
                    </ul>;
                break;
            case "Week":
                submenu =
                    <ul>
                        <li><Link to={"/" + this.props.currentWeek}>Current Week</Link></li>
                        {this.props.weeklySetups.map(setup => {
                            return <li><Link to={"/" + setup.week}>Week {setup.week}</Link></li>
                        })}
                    </ul>;
            break;

        }
        const big = this.state.big;

        return <div className={"sidebar"}>
            <h3>Quicklinks</h3>
            <div className={"sidebar-menu"}>
                <div className={"menu-selector"}>
                    {menus.map(menu => {
                        return <span onClick={() => this.selectSubmenu(menu)}
                            className={"selector" + (menu === this.state.selected?" active":"")}>
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

class SidebarMenu extends Component {

}

export default Sidebar;