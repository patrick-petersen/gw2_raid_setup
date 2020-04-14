import Wing from "../raid/Wing";
import React, {Component} from "react";
import HistoryManager from "../helper/HistoryManager";
import PlayerSelection from "../settings/PlayerSelection";
import GlobalMenu from "../settings/GlobalMenu";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);
        const list = this.props.list;
        const playerSettings = this.props.playerSettings;

        this.state = {
            list: list,
            big: false,
            bigTime: Date.now(),
        };

        this.listChanged = this.listChanged.bind(this);
        this.listChangedCallback = this.listChangedCallback.bind(this);
        this.filterListCallback = this.filterListCallback.bind(this);
        this.toggleBig = this.toggleBig.bind(this);
        this.clickCallback = this.clickCallback.bind(this);

        this.historyManager = new HistoryManager(list, playerSettings);
        this.historyManager.saveList(this.props.list);
        this.historyManager.addOnChangeCallback(this.listChangedCallback);
    }

    toggleBig() {
        console.log("toggle big");
        this.setState({
            big: !this.state.big,
            bigTime: Date.now(),
        })
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
        const filteredList = filter(this.props.list);
        this.setState({
            list: filteredList,
        });
        console.log("org: ", this.props.list);
        console.log("filtered: ", filteredList);
    }

    clickCallback(menu) {
        console.log("callback called");
        this.toggleBig();
    }

    render() {
        console.log("rendering", this.state.list);
        const big = this.state.big;
        const bigTime = this.state.bigTime;
        return [<GlobalMenu clickCallback={this.clickCallback} key={"global menu"}
                        menuItems={[big?"collapse all":"expand all"]}></GlobalMenu>,
            <PlayerSelection playerSettings={this.props.playerSettings}
                                 filterListCallback={this.filterListCallback} key={"settings"}></PlayerSelection>,
            this.state.list.map((wingValue, wingIndex) => {
                console.log("Wing: hidden?", wingValue.hidden);
                if(!wingValue.hidden) {
                    return (<Wing wingValue={wingValue} playerSettings={this.props.playerSettings}
                                  onChange={this.listChanged} key={wingValue.name}
                                  big={big} bigTime={bigTime}
                                  cheatString={JSON.stringify(wingValue)}></Wing>);
                }
        })];
    }
}

export default SetupRenderer;
