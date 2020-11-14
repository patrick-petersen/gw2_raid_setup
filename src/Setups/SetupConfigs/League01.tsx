import {RaidSetup} from "./RaidSetup";
import {Player} from "./DefaultPlayers_0";

const League01 : RaidSetup<Player> = {
    "playerSettings": {
        "players": ["Kalell", "Nevra", "Yasi", "Alex", "Lumi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
        "missing": [],
        "replacements": {},
    },
    "list": [
        {
            "name": "Wing 2",
            "bosses": [
                {
                    "name": "Slothasor",
                    "iconMiniId": 77870,
                    "selectedSetup": 2,
                    "defaultSetup": 0,
                    "setups": [
                        {
                            "name": "2 Shrooms",
                            "roles": [
                                {
                                    "profession": "Chronomancer",
                                    "tasks": ["Quickness", "CC"],
                                    "player": "Kalell"
                                },
                                {
                                    "profession": "Druid",
                                    "tasks": ["Heal", "Buffs", "Spirits"],
                                    "player": "Shrotty"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["1 Banner", "CC"],
                                    "player": "David"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["1 Banner", "CC", "Mushroom 2"],
                                    "player": "Lumi"
                                },
                                {
                                    "profession": "Daredevil",
                                    "tasks": ["Mushroom 1", "Condi Clear"],
                                    "player": "Nevra"
                                },
                                {
                                    "profession": "Renegade",
                                    "tasks": ["Alacrity", "CC"],
                                    "player": "Ely"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Yasi"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Alex"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Fynn"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Assa"
                                },
                            ]
                        },
                        {
                            "name": "2 Shrooms wih DH",
                            "roles": [
                                {
                                    "profession": "Chronomancer",
                                    "tasks": ["Quickness", "CC"],
                                    "player": "Kalell"
                                },
                                {
                                    "profession": "Druid",
                                    "tasks": ["Heal", "Buffs", "Spirits"],
                                    "player": "Shrotty"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["1 Banner", "CC"],
                                    "player": "David"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["1 Banner", "CC", "Mushroom 2"],
                                    "player": "Lumi"
                                },
                                {
                                    "profession": "Dragonhunter",
                                    "tasks": ["Mushroom 1"],
                                    "player": "Nevra"
                                },
                                {
                                    "profession": "Renegade",
                                    "tasks": ["Alacrity", "CC"],
                                    "player": "Ely"
                                },
                                {
                                    "profession": "Dragonhunter",
                                    "tasks": ["DPS"],
                                    "player": "Yasi"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Alex"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Fynn"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Assa"
                                },
                            ]
                        },
                        {
                            "name": "2 Shrooms full DH",
                            "roles": [
                                {
                                    "profession": "Chronomancer",
                                    "tasks": ["Quickness", "CC"],
                                    "player": "Kalell"
                                },
                                {
                                    "profession": "Druid",
                                    "tasks": ["Heal", "Buffs", "Spirits"],
                                    "player": "Shrotty"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["1 Banner", "CC", "Mushroom 1"],
                                    "player": "David"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["1 Banner", "CC", "Mushroom 2"],
                                    "player": "Lumi"
                                },
                                {
                                    "profession": "Renegade",
                                    "tasks": ["Alacrity", "CC"],
                                    "player": "Ely"
                                },
                                {
                                    "profession": "Dragonhunter",
                                    "tasks": ["DPS"],
                                    "player": "Nevra"
                                },
                                {
                                    "profession": "Dragonhunter",
                                    "tasks": ["DPS"],
                                    "player": "Yasi"
                                },
                                {
                                    "profession": "Dragonhunter",
                                    "tasks": ["DPS"],
                                    "player": "Alex"
                                },
                                {
                                    "profession": "Dragonhunter",
                                    "tasks": ["DPS"],
                                    "player": "Assa"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS", "Stance Share"],
                                    "player": "Fynn"
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            "name": "Wing 4",
            "bosses": [
                {
                    "name": "Deimos",
                    "iconMiniId": 80327,
                    "selectedSetup": 0,
                    "defaultSetup": 0,
                    "setups": [
                        {
                            "name": "Melee",
                            "roles": [
                                {
                                    "profession": "Firebrand",
                                    "tasks": ["Tank", "Quickness", "Aegis"],
                                    "player": "Kalell"
                                },
                                {
                                    "profession": "Druid",
                                    "tasks": ["Heal", "Buffs", "Spirits"],
                                    "player": "Shrotty"
                                },
                                {
                                    "profession": "Berserker",
                                    "tasks": ["Banner"],
                                    "player": "Lumi"
                                },
                                {
                                    "profession": "Chronomancer",
                                    "tasks": ["DPS", "Signet"],
                                    "player": "Nevra"
                                },
                                {
                                    "profession": "Firebrand",
                                    "tasks": ["Quickness", "Aegis"],
                                    "player": "Yasi"
                                },
                                {
                                    "profession": "Renegade",
                                    "tasks": ["Alacrity"],
                                    "player": "Ely"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Assa"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Fynn"
                                },
                                {
                                    "profession": "Soulbeast",
                                    "tasks": ["DPS"],
                                    "player": "Alex"
                                },
                                {
                                    "profession": "Revenant",
                                    "tasks": ["Handkiter"],
                                    "player": "David"
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ]
};

export default League01;
