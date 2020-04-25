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

const menus = ["Meta", "Name", "Week"];

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "Meta",
        };

        this.selectSubmenu = this.selectSubmenu.bind(this);
    }

    selectSubmenu(index) {
        this.setState({
            selected: index,
        })
    }

    render() {
        let submenu;
        switch (this.state.selected) {
            default:
            case "Meta":
                submenu =
                    <ul>
                        <li><Link to={"/" + this.props.currentWeek}>Current Week</Link></li>
                    </ul>;
                break;
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
                        {this.props.weeklySetups.map(setup => {
                            return <li><Link to={"/" + setup.week}>Week {setup.week}</Link></li>
                        })}
                    </ul>;
            break;

        }
        return <div className={"sidebar"}>
            <div className={"expand-all"}>expand all</div>
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
        </div>
    }
}

class SidebarMenu extends Component {

}

export default Sidebar;