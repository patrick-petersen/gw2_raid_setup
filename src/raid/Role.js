import React, {Component} from 'react';

import './Role.css';
import Profession from "../helper/Profession.js";
import HistoryManager from "../helper/HistoryManager";

class Role extends Component {
    constructor(props) {
        super(props);

        let player = this.props.player;

        if("selectedPlayer" in this.props && this.props.selectedPlayer in global.settings.players) {
            player = global.settings.players[this.props.selectedPlayer];
        }
        else if("replacement" in this.props) {
            player = this.props.replacement;
        }

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

        this.popStateCallback = this.popStateCallback.bind(this);
        HistoryManager.getInstance().addPopstateCallback(this.popStateCallback);
    }

    componentDidMount() {
        this.savePlayerToHistory(this.state.player, true);
    }

    popStateCallback() {
        //console.log("role popstate");
        //console.log(this.props.bossId, this.props.setupId, this.props.roleNumber);
        let playerId = HistoryManager.getInstance().getPlayerSettings(this.props.bossId, this.props.setupId)(this.props.roleNumber);
        //console.log(playerId, playerId in global.settings.players);
        if(playerId in global.settings.players) {
            console.log("Setting state");
            this.setState({
                player: global.settings.players[playerId]
            })
        }
    }

    openPlayerSelect() {
        if(this.props.wantToShowChangePlayer()) {
            this.setState({
                playerSelection: true
            })
        }
    }

    selectPlayer(player) {
        if(this.props.wantToChangePlayer(this.state.player, player)) {
            this.setState({
                playerSelection: false,
                player: player
            });
            this.savePlayerToHistory(player);
        }
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
        const index = global.settings.players.findIndex((playerName) => playerName === player);
        console.log("player index:", player, index);
        return index;
    }

    render() {
        let players = this.props.backups ? this.props.backups.concat([this.props.player]) : global.settings.players;
        return (
            <div className={"role"
            + (this.state.player !== this.props.player?" replacement":"")
            + (global.settings.missing.includes(this.state.player )?" missing":"")}>
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