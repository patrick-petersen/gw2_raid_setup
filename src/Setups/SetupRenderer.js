import Wing from "../raid/Wing";
import React, {Component} from "react";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
        }

        this.listChanged = this.listChanged.bind(this);
    }

    listChanged() {
        console.log("list changed", this.state.list);
    }

    render() {
        const temp = [this.state.list.map((wingValue, wingIndex) => {
            return (<Wing wingValue={wingValue} playerSettings={this.props.playerSettings}
                          onChange={this.listChanged} key={wingIndex}></Wing>);
        })];
        return temp;
    }
}

export default SetupRenderer;
