import React, {Component} from 'react';

import './Role.css';
import Profession from "../helper/Profession.js";

class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={"role"}>
                <div className={"profession"}><Profession name={this.props.profession} /></div>
                <div className={"task"}>{this.props.tasks.join(", ")}</div>
                <div className={"player"}>{this.props.player}</div>
            </div>
        )
    }
}

export default Role;