import {RaidSetup} from "./RaidSetup";
import {Player} from "./DefaultPlayers_4";


const FullComp_202105 : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Kalell", "Nevra", "Yasi", "Alex", "Michi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Center",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Entangle"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Heal", "Tank", "Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Gorseval",
                            "iconMiniId": 77296,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "No Updraft",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Entangle"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Tank", "Quickness", "Aegis"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Aegis"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                        ]
                        },
                        {
                            "name": "Sabetha",
                            "iconMiniId": 77339,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Aegis"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Aegis"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Kiter"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banners", "Cannon 1-3"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "DPS",
                                            "tasks": ["Cannon 2-4"],
                                            "player": "Yasi"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Pusher"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Epi"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Epi"],
                                            "player": "Nevra"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Desmina Aegis"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Aegis"],
                                            "player": "Michi"
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
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Tank"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Fynn"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs", "Tank"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Fynn"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Portal"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Orb"],
                                            "player": "Yasi"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
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
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Green 3"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Green 1"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Kiter", "Green 2"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "DPS",
                                            "tasks": ["First Green 2"],
                                            "player": "Nevra"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Rev Tank",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Pillar"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Pillar"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Pillar"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Tank"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "DPS",
                                            "tasks": ["Pillar"],
                                            "player": "Nevra"
                                        },
                                        {
                                            "profession": "DPS",
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
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Portal"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
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
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Epi", "Blood-Pull"],
                                            "player": "Yasi"
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
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Anomaly CC"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness", "Stability"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Condi", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Deadeye",
                                            "tasks": ["Pylon N"],
                                            "player": "Yasi"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Bubble"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "DPS",
                                            "tasks": ["Swords"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "DPS",
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
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Mirage",
                                            "tasks": ["Alacrity"],
                                            "player": "Kalell"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "No CC",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Tank", "Quickness", "Portal"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Heal"],
                                            "player": "Ely"
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
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Mirage",
                                            "tasks": ["Solo Cap"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity"],
                                            "player": "Ely"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "1-1-1",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Tank", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
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
                            "name": "Xera",
                            "iconMiniId": 78815,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Ledge",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Tank"],
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
                                    "name": "Mid",
                                    "roles": [
                                        {
                                            "profession": "Tempest",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["Alacrity", "Tank"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner", "CC"],
                                            "player": "David"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Pull", "CC", "Mushroom 3"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Assa"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Mushroom 1", "Epi", "CC"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Mushroom 2"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "DPS",
                                            "tasks": ["Mushroom 4"],
                                            "player": "Alex"
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
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Mortar CC"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Assa"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
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
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Mursaat Overseer",
                            "iconMiniId": 80224,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Dispel"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity", "Claim"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity", "Claim"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Protect"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Samarog",
                            "iconMiniId": 80218,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                {
                                    "name": "Normal",
                                    "roles": [
                                        {
                                            "profession": "Druid",
                                            "tasks": ["Push", "Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Extra Push"],
                                            "player": "David"
                                        },
                                    ]
                                },
                            ]
                        },
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
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Black-kiter"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Tank", "Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Renegade",
                                            "tasks": ["RR", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Revenant",
                                            "tasks": ["Handkiter"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner"],
                                            "player": "Assa"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        };

export default FullComp_202105;
