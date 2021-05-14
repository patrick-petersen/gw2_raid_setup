import {RaidSetup} from "./RaidSetup";
import {Player} from "./DefaultPlayers_0";


const FullComp_202011 : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Kalell", "Nevra", "Yasi", "Alex", "Lumi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
                "missing": [],
                "replacements": {},
            },
            "list": [
                {
                    "name": "Wing 1",
                    "bosses": [
                        {
                            "name": "Valeguardian",
                            "iconMiniId": 77334,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Center",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
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
                                            "profession": "Soulbeast",
                                            "tasks": ["Seeker Root"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Soulbeast",
                                            "tasks": ["Seeker Root"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                                {
                                    "name": "1 Root",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
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
                                            "profession": "Soulbeast",
                                            "tasks": ["Seeker Root"],
                                            "player": "Nevra"
                                        },
                                    ]
                                },
                                {
                                    "name": "Rand",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
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
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Gorseval",
                            "iconMiniId": 77296,
                            "selectedSetup": 3,
                            "defaultSetup": 3,
                            "setups": [
                                {
                                    "name": "No Updraft",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Stability"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Stability", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi qFB",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Stability", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["DPS", "CC"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["DPS", "CC"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC"],
                                            "player": "David"
                                        },
                                    ]
                                },
                                {
                                    "name": "Chronos",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Entangle"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                        ]
                        },
                        {
                            "name": "Sabetha",
                            "iconMiniId": 77339,
                            "selectedSetup": 2,
                            "defaultSetup": 2,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
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
                                            "profession": "Scourge",
                                            "tasks": ["Kiter"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Cannon 1 & 3"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Cannon 2 & 4"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Kiter"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Cannon 1 & 3"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Cannon 2 & 4"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Chronos",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["cDPS", "Kiter"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "Quickness"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "Quickness"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "Quickness"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS","Quickness"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "Wing 5",
                    "bosses": [
                        {
                            "name": "Desmina",
                            "iconMiniId": 86076,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
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
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Pusher"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Epi"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "River",
                            "iconMiniId": 85785,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Desmina Aegis"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Holosmith",
                                            "tasks": ["Desmina Superspeed"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Herald",
                                            "tasks": ["Desmina Healing"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness", "Aegis"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Statue of Ice",
                            "iconMiniId": 85667,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
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
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Statue of Death",
                            /*"iconMiniId": 0,*/
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "0 - 5",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Tank"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Statue of Darkness",
                            /*"iconMiniId": 0,*/
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Portal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Portal"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Tank"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Soulbeast",
                                            "tasks": ["Orb"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Deadeye",
                                            "tasks": ["Adds"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Dhuum",
                            "iconMiniId": 85998,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Green 1"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Kiter", "Green 2"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Green 3"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["First Green 2"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Dual FB",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Green 1"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Kiter", "Green 2"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Green 3"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness", "First Green 2"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "Wing 6",
                    "bosses": [
                        {
                            "name": "Conjured Amalgamate",
                            /*"iconMiniId": 0,*/
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
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
                                            "profession": "Soulbeast",
                                            "tasks": ["Swords"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Swords"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Shields"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Twin Largos",
                            "iconMiniId": 88868,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Portal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Heal"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Portal"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Qadim",
                            "iconMiniId": 88587,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Spellbreaker",
                                            "tasks": ["Tank", "Boonstrip", "Banner"],
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
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Wyvern Tank"],
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
                                {
                                    "name": "No CC",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
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
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "Wyvern Tank"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "Wing 7",
                    "bosses": [
                        {
                            "name": "Adina",
                            "iconMiniId": 82686,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons", "Pillar"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Soulbeast",
                                            "tasks": ["Pillar"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Dragonhunter",
                                            "tasks": ["Pillar"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Pillar"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Pillar"],
                                            "player": "David"
                                        },
                                    ]
                                },
                                {
                                    "name": "Thief Tank",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons", "Tank"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Pillar"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Dragonhunter",
                                            "tasks": ["Pillar"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Pillar"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Pillar"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Sabir",
                            "iconMiniId": 83551,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Whisps"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Qadim 2",
                            "iconMiniId": 91232,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
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
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness", "Stability"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Soulcleave"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Anomaly CC"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Pylon N"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Pylon W"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Deadeye",
                                            "tasks": ["Pylon E"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "Wing 3",
                    "bosses": [
                        {
                            "name": "Escort",
                            "iconMiniId": 78828,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Solo Cap",
                                    "roles": [
                                        {
                                            "profession": "Mirage",
                                            "tasks": ["Solo Cap"],
                                            "player": "Fynn"
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
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Warg"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Keep Construct",
                            "iconMiniId": 78890,
                            "selectedSetup": 2,
                            "defaultSetup": 2,
                            "setups": [
                                {
                                    "name": "1-1-2",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Pusher"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Boonthief",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons", "CC", "Pull"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Tank", "Heal", "Buffs", "Pusher"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["DPS", "CC"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["DPS", "CC", "Pull"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Chronos",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness", "Tank"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Xera",
                            "iconMiniId": 78815,
                            "selectedSetup": 2,
                            "defaultSetup": 2,
                            "setups": [
                                {
                                    "name": "Mid",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banners", "CC"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["DPS", "Pull"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Condition"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Condition"],
                                            "player": "Kalell"
                                        },
                                    ]
                                },
                                {
                                    "name": "Chronos",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Tank"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["pDPS", "CC", "Quickness"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "Wing 2",
                    "bosses": [
                        {
                            "name": "Slothasor",
                            "iconMiniId": 77870,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
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
                                            "profession": "Berserker",
                                            "tasks": ["Mushroom 1"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["Mushroom 2"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["Mushroom 3"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Weaver",
                                            "tasks": ["Mushroom 4"],
                                            "player": "Alex"
                                        },
                                    ]
                                },
                                {
                                    "name": "DH",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Mushroom 1"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["CC", "DPS"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Dragonhunter",
                                            "tasks": ["Mushroom 2"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Dragonhunter",
                                            "tasks": ["Mushroom 3"],
                                            "player": "Lumi"
                                        },
                                        {
                                            "profession": "Dragonhunter",
                                            "tasks": ["Mushroom 4"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Dragonhunter",
                                            "tasks": ["DPS"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Soulbeast",
                                            "tasks": ["Stanceshare"],
                                            "player": "Fynn"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Trio",
                            "iconMiniId": 77820,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Tempest",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Mortar"],
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
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Saboteur"],
                                            "player": "David"
                                        },
                                    ]
                                },
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Mortar"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Full Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Saboteur"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Mathias",
                            "iconMiniId": 78815,
                            "selectedSetup": 2,
                            "defaultSetup": 2,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Healing", "Reviving"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Mirage",
                                            "tasks": ["Reflect"],
                                            "player": "Nevra"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Healing", "Reviving"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Mirage",
                                            "tasks": ["Reflect"],
                                            "player": "Nevra"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Healing", "Reviving"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Mirage",
                                            "tasks": ["Reflect"],
                                            "player": "Nevra"
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
                            "name": "Cairn",
                            "iconMiniId": 80562,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Center",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
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
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness", "Stability"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Center Druid",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness", "Stability"],
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Stability", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                    ]
                                },
                                {
                                    "name": "Druid + Condi Supps",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Stability", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Mursaat Overseer",
                            "iconMiniId": 80224,
                            "selectedSetup": 2,
                            "defaultSetup": 2,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Dispel"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Claim"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Protect"],
                                            "player": "David"
                                        },
                                    ]
                                },
                                {
                                    "name": "Condi Alac",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Dispel"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity", "Claim"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Protect"],
                                            "player": "David"
                                        },
                                    ]
                                },
                                {
                                    "name": "Druid + Condi Alac",
                                    "roles": [
                                        {
                                            "profession": "Thief",
                                            "tasks": ["Boons"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Dispel"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condition", "Alacrity", "Claim"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "Protect"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Samarog",
                            "iconMiniId": 80218,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Tempest",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Extra Push"],
                                            "player": "David"
                                        },
                                    ]
                                },
                                {
                                    "name": "Druid",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC", "Extra Push"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["DPS", "CC"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["DPS", "CC"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Daredevil",
                                            "tasks": ["DPS", "CC"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Deimos",
                            "iconMiniId": 80327,
                            "selectedSetup": 1,
                            "defaultSetup": 1,
                            "setups": [
                                {
                                    "name": "Melee",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Black-kiter"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Revenant",
                                            "tasks": ["Handkiter"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                                {
                                    "name": "Druid, Melee",
                                    "roles": [
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Black-kiter"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Some Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Revenant",
                                            "tasks": ["Handkiter"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner"],
                                            "player": "Lumi"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        };

export default FullComp_202011;
