import {RaidSetup, Setup} from "./RaidSetup";
import {Player} from "../Players/StrikePlayers";

const XJJ : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Alacrity"],
            "player": "Ely"
        },
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Alacrity"],
            "player": "Shrotty"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Kalell"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Yasi"
        },
    ]
};

const KOSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Quickness", "Tank", "Stability"],
            "player": "Ely"
        },
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Quickness", "Tank", "Stability"],
            "player": "Shrotty"
        },
        {
            "profession": "Mechanist",
            "tasks": ["Alacrity", "MechTank"],
            "player": "Kalell"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity", "CC"],
            "player": "Gregor" //?
        },
    ]
};

const AHSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Quickness", "Tank"],
            "player": "Ely"
        },
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Quickness", "Tank"],
            "player": "Shrotty"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity", "CC"],
            "player": "Kalell"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity", "CC"],
            "player": "Gregor"
        },
    ]
};

const Raid : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Ely", "Shrotty", "Kalell", "Yasi", "Saqo", "Alex", "Gregor", "Agnt", "Jay", "Blank"],
                "missing": [],
                "replacements": {},
            },
            "list": [
                {
                    "name": "End of Dragons",
                    "bosses": [
                        {
                            "name": "Keineng Overlook",
                            "iconMiniId": 98085,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                KOSetup
                            ]
                        },
                        {
                            "name": "Aetherblade Hideout",
                            "iconMiniId": 49950,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                AHSetup
                            ]
                        },
                        {
                            "name": "Xunlai Jade Junkyard",
                            "iconMiniId": 20203,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                XJJ,
                            ]
                        },
                    ]
                },
            ]
        };

export default Raid;
