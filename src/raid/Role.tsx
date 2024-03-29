import {Component} from "react";

import './Role.scss';
import Profession from "../helper/Profession";
import * as RaidSetup from "../Setups/SetupConfigs/Setups/RaidSetup";

import {Player} from "../Setups/SetupConfigs/Players/AllPlayers";

type RoleProps = {
    roleValue: RaidSetup.Role<any>,
    onChange: () => void,
    playerSettings: RaidSetup.PlayerSettings<any>,
    cheatString?: string;
}

type StateProps = {
    playerSelection: boolean,
    player: Player
}


class Role extends Component<RoleProps, StateProps> {
    constructor(props: RoleProps) {
        super(props);

        let player = this.props.roleValue.player;

        if("replacement" in this.props.roleValue) {
            player = this.props.roleValue.replacement;
        }

        this.state = {
            playerSelection: false,
            player: player,
        };

        this.openPlayerSelect = this.openPlayerSelect.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
        this.insertReplacementName = this.insertReplacementName.bind(this);
    }

    openPlayerSelect() : void {
        this.setState({
            playerSelection: true
        })
    }

    selectPlayer(player : Player) : void {
        this.setState({
            playerSelection: false,
            player: player
        });
        this.props.roleValue.replacement = player;
        this.props.onChange();
    }

    componentDidUpdate(prevProps: RoleProps/*,
                       prevState: StateProps, snapshot: any*/) : void {
        if(prevProps !== this.props) {
            let player = this.props.roleValue.player;

            if("replacement" in this.props.roleValue) {
                player = this.props.roleValue.replacement;
            }

            this.setState({
                playerSelection: false,
                player: player,
            });
        }
    }

    insertReplacementName(name: string) : string {
        const replacements = this.props.playerSettings.replacements;
        if(Object.prototype.hasOwnProperty.call(replacements, name)) {
            return replacements[name];
        }
        return name;
    }

    render() : JSX.Element {
        const roleValue = this.props.roleValue;
        let players : Player[];
        if(Object.prototype.hasOwnProperty.call(roleValue, "backups")) {
            players = roleValue.player.concat([roleValue.backups]);
        }
        else {
            players = this.props.playerSettings.players;
        }
        return (
            <div className={"role"
            + (this.state.player !== roleValue.player?" replacement":"")
            + (this.props.roleValue.hidden?" hidden":"")
            + (this.props.playerSettings.missing.includes(this.state.player )?" missing":"")}>
                <div className={"profession"}><Profession name={roleValue.profession} /></div>
                <div className={"task"}>{roleValue.tasks.join(", ")}</div>
                {
                    this.state.playerSelection
                        ?
                        <div className={"player-select"}>
                            <span key={this.state.player} onClick={
                                () => this.selectPlayer(this.state.player)
                        }>{this.state.player}
                            </span>
                            {
                                players.map(player =>
                                    (player !== this.state.player)
                                        ? <span key={player} onClick={
                                            () => this.selectPlayer(player)
                                        }>{this.insertReplacementName(player)}</span>
                                    : null
                                )
                            }
                        </div>
                        : <div className={"player"} onClick={this.openPlayerSelect}>
                            {this.insertReplacementName(this.state.player)}
                        </div>
                }
            </div>
        )
    }
}

export default Role;