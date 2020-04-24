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

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className={"sidebar"}>
            <h3>Sidebar</h3>
            <h4>Meta:</h4>
            <ul>
                <li><Link to={"/" + this.props.currentWeek}>Current Week</Link></li>
            </ul>
            <h4>By Name:</h4>
            <ul>
                {this.props.namedSetups.map(setup => {
                    return <li><Link to={"/" + setup.shortcut}>{setup.name}</Link></li>
                })}
            </ul>
            <h4>By Week:</h4>
            <ul>
                {this.props.weeklySetups.map(setup => {
                    return <li><Link to={"/" + setup.week}>Week {setup.week}</Link></li>
                })}
            </ul>
        </div>
    }
}

export default Sidebar;