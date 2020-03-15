import React, {Component} from 'react';

import './Role.css';
import Profession from "../helper/Profession.js";
import Settings from '../helper/settings.json';
import HistoryManager from "../helper/HistoryManager";

class Role extends Component {
    constructor(props) {
        super(props);

        let player = ("selectedPlayer" in this.props && this.props.selectedPlayer in Settings.players)
            ? Settings.players[this.props.selectedPlayer]
            : this.props.player;

        this.state = {
            playerSelection: false,
            player: player,
        };

        this.openPlayerSelect = this.openPlayerSelect.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
        this.savePlayerToHistory = this.savePlayerToHistory.bind(this);
        this.savePlayerCallback = this.savePlayerCallback.bind(this);
        this.getIndexOfPlayer = this.getIndexOfPlayer.bind(this);

        this.props.addSaveCallback(this.savePlayerCallback);
    }

    componentDidMount() {
        this.savePlayerToHistory(this.state.player, true);
    }

    openPlayerSelect() {
        this.setState({
            playerSelection: true
        })
    }

    selectPlayer(player) {
        this.setState({
            playerSelection: false,
            player: player
        });
        this.savePlayerToHistory(player);
    }

    savePlayerToHistory(player, dontSaveUrl) {
        HistoryManager.getInstance().savePlayerSettings(this.props.bossId)
        (this.props.roleNumber)
        (this.getIndexOfPlayer(player), dontSaveUrl);
    }
    savePlayerCallback() {
        this.savePlayerToHistory(this.state.player, true);
    }

    getIndexOfPlayer(player) {
        const index = Settings.players.findIndex((playerName) => playerName == player);
        console.log("player index:", player, index);
        return index;
    }

    render() {
        let players = this.props.backups ? this.props.backups.concat([this.props.player]) : Settings.players;
        return (
            <div className={"role" + (this.props.player != this.state.player?" replacement":"")}>
                <div className={"profession"}><Profession name={this.props.profession} /></div>
                <div className={"task"}>{this.props.tasks.join(", ")}</div>
                {
                    this.state.playerSelection
                        ?
                        <div className={"player-select"}>
                            <span key={this.state.player} onClick={
                                (e) => this.selectPlayer(this.state.player, e)
                        }>{this.state.player}
                            </span>
                            {
                                players.map(player =>
                                    (player !== this.state.player)
                                        ? <span key={player} onClick={
                                            (e) => this.selectPlayer(player, e)
                                        }>{player} </span>
                                    : null
                                )
                            }
                        </div>
                        : <div className={"player"} onClick={this.openPlayerSelect}>{this.state.player}</div>
                }
            </div>
        )
    }
}

export default Role;