import React, {Component} from 'react';

import './PlayerSelection.scss';

class PlayerSelection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: "All",
            selectionOpen:false,
        };

        this.openSelection = this.openSelection.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    openSelection() {
        this.setState({
            selectionOpen: true
        });

    }

    selectPlayer(player) {
        return () => {
            this.setState({
                selected: player,
                selectionOpen: false
            });
            console.log("filterSelected", player);
            this.props.filterListCallback(this.filterList(player));
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

    render() {
        const {players} = this.props.playerSettings;
        return (
            <div className="players">
                {
                    this.state.selectionOpen
                        ?
                            [<span onClick={this.selectPlayer("All")}>All</span>, players.map((value) => {
                                return (<span onClick={this.selectPlayer(value)}>{value}</span>);
                            })]
                        : <span onClick={this.openSelection}>{this.state.selected}</span>

                }
            </div>
        );
    }
}

export default PlayerSelection;
