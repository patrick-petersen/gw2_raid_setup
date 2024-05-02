import {RaidSetup} from "./RaidSetup";
import {Player} from "../Players/CerusPlayers";

const Cerus : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Ely", "Shrotty", "Kalell", "Yasi", "Alex", "Agnt", "Jay", "1", "2", "3"],
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
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Herald",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
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
