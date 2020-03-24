import Wing from "../raid/Wing";
import React, {Component} from "react";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
        }
    }

    render() {
        const a = [this.state.list.map((wingValue, wingIndex) => {
            console.log(wingValue);
            return (<Wing {... wingValue} playerSettings={this.props.playerSettings} key={wingIndex}></Wing>);
        })];
        console.log(a);
        return a;
    }
}

export default SetupRenderer;
