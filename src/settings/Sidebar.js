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
            <Router>
                <h3>Sidebar</h3>
                <ul>
                    {this.props.namedSetups.map(setup => {
                        return <li><Link to={"/" + setup.shortcut}>{setup.name}</Link></li>
                    })}
                </ul>
            </Router>
        </div>
    }
}

export default Sidebar;