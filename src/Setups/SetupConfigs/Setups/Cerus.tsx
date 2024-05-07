import {RaidSetup} from "./RaidSetup";
import {Player} from "../Players/CerusPlayers";

const Cerus : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Ely", "Shrotty", "Kalell", "Yasi", "Alex", "Agnt", "Jay", "Assa", "1", "2"],
                "missing": ["Alex"],
                "replacements": {"Eioz": "Alex"},
            },
            "list": [
                {
                    "name": "Secrets of the Obscure",
                    "bosses": [
                        {
                            "name": "Cerus",
                            "iconMiniId": 100141,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Double Wall",
                                    "roles": [
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Heal", "Alacrity", "Portal"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Heal", "Alacrity", "Portal"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Herald",
                                            "tasks": ["Quickness"],
                                            "player": "Jay"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Alacrity"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "Agnt"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "1"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "2"
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        };

export default Cerus;
