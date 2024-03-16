import {RaidSetup, Setup} from "./RaidSetup";
import {Player} from "../Players/StrikePlayers";

const duoHealSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Druid",
            "tasks": ["Heal", "Alacrity"],
            "player": "Ely"
        },
        {
            "profession": "Druid",
            "tasks": ["Heal", "Alacrity"],
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
};

const KOSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Tank", "Stability"],
            "player": "Ely"
        },
        {
            "profession": "Firebrand",
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
            "player": "Assa"
        },
    ]
};

const AHSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Tank"],
            "player": "Ely"
        },
        {
            "profession": "Firebrand",
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
            "player": "Assa"
        },
    ]
};

const Raid : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Ely", "Shrotty", "Kalell", "Yasi", "Saqo", "Alex", "Gregor", "Agnt", "Jay", "Assa"],
                "missing": ["Alex"],
                "replacements": {"Eioz": "Alex"},
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
                                duoHealSetup,
                            ]
                        },
                    ]
                },
                {
                    "name": "Secrets of the Obscure",
                    "bosses": [
                        {
                            "name": "Cosmic Observatory",
                            "iconMiniId": 100293,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                duoHealSetup,
                            ]
                        },
                        {
                            "name": "Temple of Febe",
                            "iconMiniId": 100141,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                duoHealSetup,
                            ]
                        },
                    ]
                },
            ]
        };

export default Raid;
