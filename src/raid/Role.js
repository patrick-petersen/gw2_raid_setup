import React, {Component} from 'react';

import './Role.css';
import Profession from "../helper/Profession.js";

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
        let players = this.props.player.concat([this.props.backups]);
        return (
            <div className={"role"
            + (this.state.player !== this.props.player?" replacement":"")
            /*+ (global.settings.missing.includes(this.state.player )?" missing":"")*/}>
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