import {RaidSetup} from "./RaidSetup";
import {Player} from "../Players/CerusPlayers";

const Cerus : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Ely", "Shrotty", "Kalell", "Yasi", "Alex", "Agnt", "Jay", "Blank", "Gregor", "Akuras"],
                "missing": [],
                "replacements": {},
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
                                            "player": "Agnt"
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
                                            "player": "Akuras"
                                        },
                                        {
                                            "profession": "Virtuoso",
                                            "tasks": ["DPS"],
                                            "player": "Blank"
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
