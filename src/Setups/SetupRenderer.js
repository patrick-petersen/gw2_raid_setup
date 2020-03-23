import Wing from "../raid/Wing";
import Boss from "../raid/Boss";
import Setup from "../raid/Setup";
import Role from "../raid/Role";
import React, {Component} from "react";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);
        global.settings = {
            "players": ["Kalell", "Nevra", "Yasi", "Alex", "Lumi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
            "missing": []
        };

        this.state = {
            list: this.props.list,
        }
    }

    render() {
        const a = [this.state.list.map((wingValue, wingIndex) => {
            console.log(wingValue);
            return (<Wing {... wingValue} key={wingIndex}></Wing>);
        })];
        console.log(a);
        return a;
    }
}

export default SetupRenderer;
