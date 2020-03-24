import React, {Component} from 'react';

import './Role.css';
import Profession from "../helper/Profession.js";

class Role extends Component {
    constructor(props) {
        super(props);

        let player = this.props.player;

        if("replacement" in this.props) {
            player = this.props.replacement;
        }

        this.state = {
            playerSelection: false,
            player: player,
        };

        this.openPlayerSelect = this.openPlayerSelect.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
    }

    componentDidMount() {
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
    }

    render() {
        let players;
        if(this.props.hasOwnProperty("backups")) {
            players = this.props.player.concat([this.props.backups]);
        }
        else {
            players = this.props.playerSettings.players;
        }
        return (
            <div className={"role"
            + (this.state.player !== this.props.player?" replacement":"")
            + (this.props.playerSettings.missing.includes(this.state.player )?" missing":"")}>
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