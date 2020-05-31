import Wing from "../raid/Wing";
import React, {Component} from "react";
import HistoryManager from "../helper/HistoryManager";
import PlayerSelection from "../settings/PlayerSelection";
import Boss from "../raid/Boss";
import Setup from "../raid/Setup";
import Role from "../raid/Role";


class SetupRenderer extends Component {
    constructor(props) {
        super(props);
        const list = this.props.list;
        const playerSettings = this.props.playerSettings;

        this.state = {
            list: list,
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
        const filteredList = filter(this.props.list);
        this.setState({
            list: filteredList,
        });
        console.log("org: ", this.props.list);
        console.log("filtered: ", filteredList);
    }

    render() {
        console.log("rendering", this.state.list);
        const big = this.props.big;
        const bigTime = this.props.bigTime;
        const onChange = this.listChanged;
        const playerSettings = this.props.playerSettings;

        return [<PlayerSelection playerSettings={playerSettings}
                                 filterListCallback={this.filterListCallback} key={"settings"}></PlayerSelection>,
            this.state.list.map((wingValue, wingIndex) => {
                console.log("Wing: hidden?", wingValue.hidden);
                if(!wingValue.hidden) {
                    return (
                        <Wing wingValue={wingValue} playerSettings={playerSettings}
                                  onChange={onChange} key={wingValue.name}
                                  big={big} bigTime={bigTime}>
                            {
                                wingValue.bosses.map((bossValue, bossIndex) => {
                                        if(!bossValue.hidden) {
                                            return (<Boss bossValue={bossValue} playerSettings={playerSettings}
                                                          onChange={onChange} key={bossValue.name}
                                                          big={big} bigTime={bigTime}>
                                                {
                                                    bossValue.setups.map((setupValue, setupIndex) => {
                                                        if(!setupValue.hidden) {
                                                            return (<Setup setupValue={setupValue} playerSettings={playerSettings}
                                                                           onChange={onChange} key={setupValue.name}>
                                                                {
                                                                    setupValue.roles.map((roleValue, roleIndex) => {
                                                                        if(!roleValue.hidden) {
                                                                            return (<Role roleValue={roleValue} playerSettings={playerSettings}
                                                                                          onChange={onChange} key={roleValue.player}
                                                                                          cheatString={JSON.stringify(roleValue)}>

                                                                            </Role>);
                                                                        }
                                                                    })
                                                                }

                                                            </Setup>);
                                                        }
                                                    })
                                                }

                                            </Boss>);
                                        }
                                    }
                                )
                            }
                    </Wing>);
                }
        })];
    }
}

export default SetupRenderer;
