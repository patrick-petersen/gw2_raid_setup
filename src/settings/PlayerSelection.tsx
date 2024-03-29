import * as React from 'react';

import './PlayerSelection.scss';
import * as RaidSetup from "../Setups/SetupConfigs/Setups/RaidSetup";

type PlayerSelectionProps = {
    playerSettings: RaidSetup.PlayerSettings<any>,
    filterListCallback: (func: (s: RaidSetup.Wing<any>[]) => RaidSetup.Wing<any>[]) => void
}

type PlayerSelectionState = {
    selected: string,
    selectionOpen: boolean
}

class PlayerSelection extends React.Component<PlayerSelectionProps, PlayerSelectionState> {

    constructor(props: PlayerSelectionProps) {
        super(props);

        this.state = {
            selected: "All",
            selectionOpen: false,
        };

        this.selectPlayer = this.selectPlayer.bind(this);
        this.filterList = this.filterList.bind(this);
        this.hideList = this.hideList.bind(this);
        this.insertReplacementName = this.insertReplacementName.bind(this);
    }

    selectPlayer(player: string) {
        return () : void => {
            this.setState({
                selected: player,
                selectionOpen: false
            });
            console.log("filterSelected", player);
            //this.props.filterListCallback(this.filterList(player));
            this.props.filterListCallback(this.hideList(player));
        };
    }

    insertReplacementName(name: string) : string {
        const replacements = this.props.playerSettings.replacements;
        if(Object.prototype.hasOwnProperty.call(replacements, name)) {
            return replacements[name];
        }
        return name;
    }

    filterList(filterPlayer: string) : (list: RaidSetup.Wing<PlayerSelectionProps> []) => RaidSetup.Wing<PlayerSelectionProps> [] {
        console.log("filterPlayer", filterPlayer);
        return (list: RaidSetup.Wing<any>[]) => {
            console.log("filterList", list);
            const clonedList : RaidSetup.Wing<any>[] = JSON.parse(JSON.stringify(list));
            return clonedList.filter(wing => {
                wing.bosses = wing.bosses.filter(boss => {
                    boss.setups = boss.setups.filter(setup => {
                        setup.roles = setup.roles.filter(role => {
                            const player = Object.prototype.hasOwnProperty.call(role, "replacement") ? role.replacement : role.player;
                            return (filterPlayer === "All") || (filterPlayer === player);
                        });
                        return setup.roles.length >= 1;
                    });
                    return boss.setups.length >= 1;
                });
                return wing.bosses.length >= 1;
            });
        };
    }

    hideList(filterPlayer: string) : (list: RaidSetup.Wing<PlayerSelectionProps> []) => RaidSetup.Wing<PlayerSelectionProps> [] {
        console.log("hide by player", filterPlayer);

        return (list: RaidSetup.Wing<any>[]) => {
            console.log("hideList", list);
            list.forEach(wing => {
                wing.bosses.forEach(boss => {
                    boss.setups.forEach(setup => {
                        setup.roles.forEach(role => {
                            const player = Object.prototype.hasOwnProperty.call(role, "replacement")?role.replacement:role.player;
                            role.hidden = !((filterPlayer === "All") || (filterPlayer === player));
                        });
                        setup.hidden = setup.roles.filter(value => !value.hidden).length < 1;
                    });
                    boss.hidden = boss.setups.filter(value => !value.hidden).length < 1;
                });
                wing.hidden = wing.bosses.filter(value => !value.hidden).length < 1;
            });
            return list;
        }
    }

    render() : JSX.Element {
        const selection = ["All"].concat(this.props.playerSettings.players);
        return (
            <div className="players">
                {
                    selection.map((value) => {
                        return (<span className={"playerName" + (value === this.state.selected?" selected":"")}
                                        onClick={this.selectPlayer(value)}
                                        key={value}>{this.insertReplacementName(value)}</span>);
                    })
                }
            </div>
        );
    }
}

export default PlayerSelection;
