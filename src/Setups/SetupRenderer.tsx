import Wing from "../raid/Wing";
import {Component} from "react";
import HistoryManager from "../helper/HistoryManager";
import PlayerSelection from "../settings/PlayerSelection";
import Boss from "../raid/Boss";
import Setup from "../raid/Setup";
import Role from "../raid/Role";
import * as RaidSetup from "./SetupConfigs/RaidSetup";

interface ISetup {
    props : {setupValue: {name: string}}
}

type SetupRendererProps = {
    list: RaidSetup.Wing<any>[],
    playerSettings: RaidSetup.PlayerSettings<any>,
    big: boolean,
    bigTime: number,
}

type SetupRendererState = {
    list: RaidSetup.Wing<any>[],
    cheatString?: string
}

class SetupRenderer extends Component<SetupRendererProps, SetupRendererState> {
    historyManager : HistoryManager;

    constructor(props : SetupRendererProps) {
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
    listChangedCallback(list: RaidSetup.Wing<any>[]) {
        console.log("list change callback");
        this.setState({
            list: list,
            cheatString: list.toString(),
        });
    }

    filterListCallback(filter: (list: RaidSetup.Wing<any>[]) => RaidSetup.Wing<any>[]) {
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
                                 filterListCallback={this.filterListCallback} key={"settings"}/>,
            this.state.list.map((wingValue: RaidSetup.Wing<any>) => {
                console.log("Wing: hidden?", wingValue.hidden);
                if(wingValue.hidden) {
                    return undefined;
                }
                else {
                    return (
                        <Wing wingValue={wingValue}
                                  key={wingValue.name}>
                            {
                                wingValue.bosses.map((bossValue) => {
                                        if(bossValue.hidden) {
                                            return undefined;
                                        }
                                        else {
                                            const children : ISetup[] = [];


                                            bossValue.setups.forEach((setupValue) => {
                                                children.push(<Setup setupValue={setupValue}
                                                               key={setupValue.name}>
                                                    {
                                                        setupValue.roles.map((roleValue) => {
                                                            return (<Role roleValue={roleValue} playerSettings={playerSettings}
                                                                          onChange={onChange} key={roleValue.player}
                                                                          cheatString={JSON.stringify(roleValue)}>

                                                            </Role>);
                                                        })
                                                    }

                                                </Setup>);
                                            });

                                            return (<Boss bossValue={bossValue} playerSettings={playerSettings}
                                                          onChange={onChange} key={bossValue.name}
                                                          big={big} bigTime={bigTime}
                                                children={children}
                                            />);
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
