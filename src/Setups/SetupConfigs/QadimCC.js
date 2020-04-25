import React, {Component} from "react";
import SetupRenderer from "../SetupRenderer";


class QadimCC extends Component {
    constructor(props) {
        super(props);
        this.settings = {
            "playerSettings": {
                "players": ["Kalell", "Nevra", "Yasi", "Alex", "Lumi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
                "missing": [],
                "replacements": {},
            },
            "list": [
                {
                    "name": "Wing 6",
                    "bosses": [
                        {
                            "name": "Qadim",
                            "iconMiniId": 88587,
                            "selectedSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness", "Portal"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["Portal"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["Solo Kiter"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Reaper",
                                            "tasks": ["Lampe"],
                                            "player": "Nevra"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    }

    render() {

        return <SetupRenderer {... this.settings}></SetupRenderer>;
    }
}

export default QadimCC;
