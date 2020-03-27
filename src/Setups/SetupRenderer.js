import Wing from "../raid/Wing";
import React, {Component} from "react";
import HistoryManager from "../helper/HistoryManager";
import PlayerSelection from "../settings/PlayerSelection";


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
        this.filterListCallback = this.filterListCallback.bind(this);

        this.historyManager = new HistoryManager(list, playerSettings);
        this.historyManager.saveList(this.props.list);
        this.historyManager.addOnChangeCallback(this.listChangedCallback);
    }

    listChanged() {
        console.log("list changed", this.state.list);
        this.historyManager.listChanged();
    }
    listChangedCallback(list) {
        console.log("list change callback");
        this.setState({
            list: list,
            cheatString: list.toString(),
        });
    }

    filterListCallback(filter) {
        this.setState({
            list: filter(this.props.list),
        });
    }

    render() {
        console.log("rendering");
        return [<PlayerSelection playerSettings={this.props.playerSettings} filterListCallback={this.filterListCallback}></PlayerSelection>,
            this.state.list.map((wingValue, wingIndex) => {
            return (<Wing wingValue={wingValue} playerSettings={this.props.playerSettings}
                            onChange={this.listChanged} key={wingIndex}
                            cheatString={JSON.stringify(wingValue)}></Wing>);
        })];
    }
}

export default SetupRenderer;
