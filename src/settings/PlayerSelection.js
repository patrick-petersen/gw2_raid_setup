import React, {Component} from 'react';

import './PlayerSelection.scss';

class PlayerSelection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: "All",
        };

        this.selectPlayer = this.selectPlayer.bind(this);
        this.filterList = this.filterList.bind(this);
        this.hideList = this.hideList.bind(this);
    }

    selectPlayer(player) {
        return () => {
            this.setState({
                selected: player,
                selectionOpen: false
            });
            console.log("filterSelected", player);
            //this.props.filterListCallback(this.filterList(player));
            this.props.filterListCallback(this.hideList(player));
        };
    }

    filterList(filterPlayer) {
        console.log("filterPlayer", filterPlayer);
        return (list) => {
            console.log("filterList", list);
            let newList = JSON.parse(JSON.stringify(list)).filter(wing => {
                wing.bosses = wing.bosses.filter(boss => {
                    boss.setups = boss.setups.filter(setup => {
                        setup.roles = setup.roles.filter(role => {
                            const player = role.hasOwnProperty("replacement")?role.replacement:role.player;
                            return (filterPlayer === "All") || (filterPlayer === player);
                        });
                        return setup.roles.length >= 1;
                    });
                    return boss.setups.length >= 1;
                });
                return wing.bosses.length >= 1;
            });

            return newList;
        };
    }

    hideList(filterPlayer) {
        console.log("hide by player", filterPlayer);

        const countVisible = (total, element, index) => {
            if(!element.hidden) {
                total++;
            }
                return total;
        };

        return (list) => {
            console.log("hideList", list);
            list.forEach(wing => {
                wing.bosses.forEach(boss => {
                    boss.setups.forEach(setup => {
                        setup.roles.forEach(role => {
                            const player = role.hasOwnProperty("replacement")?role.replacement:role.player;
                            if((filterPlayer === "All") || (filterPlayer === player)) {
                                role.hidden = false;
                            }
                            else {
                                role.hidden = true;
                            }
                        });
                        if(setup.roles.reduce(countVisible, 0) >= 1) {
                            setup.hidden = false;
                        }
                        else {
                            setup.hidden = true;
                        }
                    });
                    if(boss.setups.reduce(countVisible, 0) >= 1) {
                        boss.hidden = false;
                    }
                    else {
                        boss.hidden = true;
                    }
                });
                if(wing.bosses.reduce(countVisible, 0) >= 1) {
                    wing.hidden = false;
                }
                else {
                    wing.hidden = true;
                }
            });
            return list;
        }
    }

    render() {
        const selection = ["All"].concat(this.props.playerSettings.players);
        return (
            <div className="players">
                {
                    selection.map((value) => {
                        return (<span className={"playerName" + (value === this.state.selected?" selected":"")}
                                        onClick={this.selectPlayer(value)}
                                        key={value}>{value}</span>);
                    })
                }
            </div>
        );
    }
}

export default PlayerSelection;
