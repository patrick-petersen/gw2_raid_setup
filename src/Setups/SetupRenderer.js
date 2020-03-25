import Wing from "../raid/Wing";
import React, {Component} from "react";
import HistoryManager from "../helper/HistoryManager";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);
        const list = this.props.list;
        const playerSettings = this.props.playerSettings;

        this.state = {
            list: list
        };

        this.listChanged = this.listChanged.bind(this);
        this.listChangedCallback = this.listChangedCallback.bind(this);

        this.historyManager = new HistoryManager(list, playerSettings);
        this.historyManager.saveList(this.props.list);
        this.historyManager.addOnChangeCallback(this.listChangedCallback);
    }

    listChanged() {
        console.log("list changed", this.state.list);
    }
    listChangedCallback(list) {
        this.setState({
            list: list
        });
        this.forceUpdate();
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
