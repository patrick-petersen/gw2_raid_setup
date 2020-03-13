import React, {Component} from 'react';

import './Role.css';
import Profession from "../helper/Profession.js";
import Settings from '../helper/settings.json';



class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSelection: false,
            player: this.props.player,
        };

        this.openPlayerSelect = this.openPlayerSelect.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
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
        })
    }

    render() {
        let players = this.props.backups ? this.props.backups.concat([this.props.player]) : Settings.players;
        return (
            <div className={"role"}>
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