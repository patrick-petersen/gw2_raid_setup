import {RaidSetup, Setup} from "./RaidSetup";
import {Player} from "./DefaultPlayers_4";

const standardBossSetup : Setup<Player> = {
        "name": "Scourges",
        "roles": [
            {
                "profession": "Tempest",
                "tasks": ["Heal", "Buffs"],
                "player": "Shrotty"
            },
            {
                "profession": "Chronomancer",
                "tasks": ["Alacrity", "Quickness"],
                "player": "Kalell"
            },
            {
                "profession": "Chronomancer",
                "tasks": ["Alacrity", "Quickness"],
                "player": "Michi"
            },
            {
                "profession": "Scourge",
                "tasks": ["Condi", "Heal"],
                "player": "Ely"
            },
            {
                "profession": "Scourge",
                "tasks": ["Condi"],
                "player": "Alex"
            },
            {
                "profession": "Scourge",
                "tasks": ["Condi"],
                "player": "Fynn"
            },
            {
                "profession": "Berserker",
                "tasks": ["Banner"],
                "player": "David"
            },
            {
                "profession": "Scourge",
                "tasks": ["Condi"],
                "player": "Yasi"
            },
            {
                "profession": "Scourge",
                "tasks": ["Condi"],
                "player": "Nevra"
            },
            {
                "profession": "Scourge",
                "tasks": ["Condi"],
                "player": "Assa"
            },
        ]
    };

function cloneSetup(setup : Setup<Player>) : Setup<Player> {
    const clonesSetup = JSON.parse(JSON.stringify(setup));
    return clonesSetup;
}

const chronoTank : Setup<Player> = cloneSetup(standardBossSetup);
chronoTank.roles[1].tasks = ["Tank", "Alacrity", "Quickness"];

const tempestTank : Setup<Player> = cloneSetup(standardBossSetup);
tempestTank.roles[0].tasks = ["Tank", "Heal", "Buffs"];

const Sabetha : Setup<Player> = cloneSetup(standardBossSetup);
Sabetha.roles[8].tasks = ["Condi", "Kiter"];

const SH : Setup<Player> = cloneSetup(chronoTank);
SH.roles[0].profession = "Druid";
SH.roles[1].tasks = ["Tank", "Quickness"];
SH.roles[2].tasks = ["Tank", "Quickness"];
SH.roles[4].profession = "Mirage";
SH.roles[4].tasks = ["Condi", "Alacrity"];

const escort = cloneSetup(standardBossSetup);
escort.roles[1].tasks = ["Tower"];

const mathias = cloneSetup(standardBossSetup);
mathias.roles[1].tasks = ["Feedback", "Alacrity", "Quickness"];
mathias.roles[2].tasks = ["Feedback", "Alacrity", "Quickness"];

const druid = cloneSetup(standardBossSetup);
druid.roles[0].profession = "Druid";

const MO = cloneSetup(standardBossSetup);
MO.roles[0].tasks = ["Heal", "Buffs", "Dispel"];
MO.roles[1].tasks = ["Heal", "Buffs", "Protect"];
MO.roles[6].tasks = ["Banner", "Claim"];

const deimos = cloneSetup(standardBossSetup);
deimos.roles[6].profession = "Revenant";
deimos.roles[6].tasks = ["Handkiter"];



const Scourges : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Kalell", "Nevra", "Yasi", "Alex", "Michi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
                "missing": [],
                "replacements": {},
            },
            "list": [
                {
                    "name": "Wing 7",
                    "bosses": [
                        {
                            "name": "Adina",
                            "iconMiniId": 82686,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                tempestTank
                            ]
                        },
                        {
                            "name": "Sabir",
                            "iconMiniId": 83551,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                tempestTank
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
                                            "tasks": ["Tank", "Quickness", "Alacrity"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Alacrity"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Condi"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Condi"],
                                            "player": "Alex"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Condi"],
                                            "player": "Fynn"
                                        },
                                        {
                                            "profession": "Berserker",
                                            "tasks": ["Banner"],
                                            "player": "David"
                                        },
                                        {
                                            "profession": "Scourge",
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
                    "name": "Wing 5",
                    "bosses": [
                        {
                            "name": "Desmina",
                            "iconMiniId": 86076,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                SH
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
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Desmina Aegis"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Aegis"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Holosmith",
                                            "tasks": ["Desmina Superspeed"],
                                            "player": "Fynn"
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
                                            "tasks": ["Quickness", "Alacrity", "Tank"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Alacrity"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Heal"],
                                            "player": "Ely"
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
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Alacrity", "Tank"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Alacrity"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Heal"],
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
                                            "profession": "Druid",
                                            "tasks": ["Heal", "Buffs", "Orb"],
                                            "player": "Shrotty"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Portal"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Chronomancer",
                                            "tasks": ["Quickness", "Alacrity"],
                                            "player": "Michi"
                                        },
                                        {
                                            "profession": "Scourge",
                                            "tasks": ["Heal"],
                                            "player": "Ely"
                                        },
                                        {
                                            "profession": "Necromancer",
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
                                            "player": "Fynn"
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
                                            "profession": "Firebrand",
                                            "tasks": ["Quickness"],
                                            "player": "Michi"
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
                                            "player": "Yasi"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "Wing 1",
                    "bosses": [
                        {
                            "name": "Valeguardian",
                            "iconMiniId": 77334,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                chronoTank
                            ]
                        },
                        {
                            "name": "Gorseval",
                            "iconMiniId": 77296,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                tempestTank
                        ]
                        },
                        {
                            "name": "Sabetha",
                            "iconMiniId": 77339,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                Sabetha
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
                                standardBossSetup
                            ]
                        },
                        {
                            "name": "Trio",
                            "iconMiniId": 77820,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                standardBossSetup
                            ]
                        },
                        {
                            "name": "Mathias",
                            "iconMiniId": 78815,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                mathias
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
                                escort
                            ]
                        },
                        {
                            "name": "Keep Construct",
                            "iconMiniId": 78890,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                tempestTank
                            ]
                        },
                        {
                            "name": "Xera",
                            "iconMiniId": 78815,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                chronoTank
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
                                druid
                            ]
                        },
                        {
                            "name": "Mursaat Overseer",
                            "iconMiniId": 80224,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                MO
                            ]
                        },
                        {
                            "name": "Samarog",
                            "iconMiniId": 80218,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                standardBossSetup
                            ]
                        },
                        {
                            "name": "Deimos",
                            "iconMiniId": 80327,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                deimos
                            ]
                        },
                    ]
                },
            ]
        };

export default Scourges;
