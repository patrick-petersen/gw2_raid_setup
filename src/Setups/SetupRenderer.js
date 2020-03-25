import Wing from "../raid/Wing";
import React, {Component} from "react";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
        }
        window.setInterval(() => {
            console.log(this.state);
        },10000)
    }

    render() {
        const a = [this.state.list.map((wingValue, wingIndex) => {
            console.log(wingValue);
            return (<Wing wingValue={wingValue} playerSettings={this.props.playerSettings} key={wingIndex}></Wing>);
        })];
        console.log(a);
        return a;
    }
}

export default SetupRenderer;
