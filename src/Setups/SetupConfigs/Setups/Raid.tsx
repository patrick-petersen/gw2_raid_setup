import {RaidSetup, Setup} from "./RaidSetup";
import {Player} from "../Players/RaidPlayers";

const soloHealSetup : Setup<Player> = {
    "name": "Solo Heal",
    "roles": [
        {
            "profession": "Druid",
            "tasks": ["Heal", "Alacrity"],
            "player": "Ely"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Shrotty"
        },
        {
            "profession": "Chronomancer",
            "tasks": ["Alacrity"],
            "player": "Kalell"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Yasi"
        },
    ]
};

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

const qadim2Setup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Druid",
            "tasks": ["Heal", "Alacrity"],
            "player": "Ely"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Shrotty"
        },
        {
            "profession": "Chronomancer",
            "tasks": ["Tank", "Alacrity"],
            "player": "Kalell"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Yasi"
        },
        {
            "profession": "Deadeye",
            "tasks": ["Pylon"],
            "player": "Assa"
        },
        {
            "profession": "Deadeye",
            "tasks": ["Pylon"],
            "player": "Jay"
        },
        {
            "profession": "Scourge",
            "tasks": ["Pylon"],
            "player": "Nevra"
        },
    ]
};

const largosSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Druid",
            "tasks": ["Heal", "Alacrity", "Tank"],
            "player": "Ely"
        },
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Tank"],
            "player": "Shrotty"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity"],
            "player": "Kalell"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Yasi"
        },
    ]
};

const qadimSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Mechanist",
            "tasks": ["Heal", "Alacrity", "Tank"],
            "player": "Ely"
        },
        {
            "profession": "Chronomancer",
            "tasks": ["Heal", "Alacrity", "Portal"],
            "player": "Shrotty"
        },
        {
            "profession": "Spellbreaker",
            "tasks": ["Boonstrip"],
            "player": "Kalell"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Yasi"
        },
        {
            "profession": "Herald",
            "tasks": ["Quickness"],
            "player": "Assa"
        },
        {
            "profession": "Herald",
            "tasks": ["Kiter"],
            "player": "Agnt"
        },
    ]
};

const DeimosSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Tank", "Aegis"],
            "player": "Ely"
        },
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Aegis"],
            "player": "Shrotty"
        },
        {
            "profession": "Spellbreaker",
            "tasks": ["Handkite"],
            "player": "Kalell"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity"],
            "player": "Assa"
        },
        {
            "profession": "Revenant",
            "tasks": ["Alacrity"],
            "player": "Jay"
        },
    ]
};
const MathiasSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Reflect"],
            "player": "Ely"
        },
        {
            "profession": "Firebrand",
            "tasks": ["Heal", "Quickness", "Reflect"],
            "player": "Shrotty"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity"],
            "player": "Kalell"
        },
        {
            "profession": "Specter",
            "tasks": ["Alacrity"],
            "player": "Assa"
        },
    ]
};

const OLCSetup : Setup<Player> = {
    "name": "Duo Heal",
    "roles": [
        {
            "profession": "Mechanist",
            "tasks": ["Heal", "Alacrity", "Tank"],
            "player": "Ely"
        },
        {
            "profession": "Druid",
            "tasks": ["Heal", "Alacrity", "Tank"],
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

function cloneSetup(setup : Setup<Player>) : Setup<Player> {
    const clonesSetup = JSON.parse(JSON.stringify(setup));
    return clonesSetup;
}

const desminaSetup : Setup<Player> = cloneSetup(soloHealSetup);
desminaSetup.roles[0].profession = "Mechanist";
desminaSetup.roles[0].tasks = ["Tank", "Heal", "Alacrity"];
desminaSetup.roles[1].tasks = ["Push", "Heal", "Alacrity"];

const DhuumSetup : Setup<Player> = cloneSetup(soloHealSetup);
DhuumSetup.roles[0].tasks = ["Kiter", "Heal", "Alacrity"];
DhuumSetup.roles[2].tasks = ["Alacrity", "Tank"];

const EscortSetup : Setup<Player> = cloneSetup(duoHealSetup);
EscortSetup.roles[2].tasks = ["Tower"];



const Raid : RaidSetup<Player> = {
            "playerSettings": {
                "players": ["Ely", "Shrotty", "Kalell", "Yasi", "Nevra", "Alex", "Dice", "Agnt", "Jay", "Assa"],
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
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Sabir",
                            "iconMiniId": 83551,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Qadim 2",
                            "iconMiniId": 91232,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                qadim2Setup,
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
                                soloHealSetup,
                            ]
                        },
                        {
                            "name": "Twin Largos",
                            "iconMiniId": 88868,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                largosSetup,
                            ]
                        },
                        {
                            "name": "Qadim",
                            "iconMiniId": 88587,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                qadimSetup,
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
                                desminaSetup
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
                                            "tasks": ["Heal", "Aegis"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Scrapper",
                                            "tasks": ["Desmina Superspeed"],
                                            "player": "Agnt"
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
                                            "tasks": ["Portal", "Quickness"],
                                            "player": "Kalell"
                                        },
                                        {
                                            "profession": "Herald",
                                            "tasks": ["Quickness"],
                                            "player": "Yasi"
                                        },
                                        {
                                            "profession": "Scrapper",
                                            "tasks": ["Orb Throw"],
                                            "player": "Agnt"
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
                                duoHealSetup
                            ]
                        },
                        {
                            "name": "Statue of Ice",
                            "iconMiniId": 85667,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                duoHealSetup
                            ]
                        },
                        {
                            "name": "Dhuum",
                            "iconMiniId": 85998,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                DhuumSetup,
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
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Mursaat Overseer",
                            "iconMiniId": 80224,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Samarog",
                            "iconMiniId": 80218,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Deimos",
                            "iconMiniId": 80327,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                DeimosSetup
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
                                EscortSetup
                            ]
                        },
                        {
                            "name": "Keep Construct",
                            "iconMiniId": 78890,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Xera",
                            "iconMiniId": 78815,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
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
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Trio",
                            "iconMiniId": 77820,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
                            ]
                        },
                        {
                            "name": "Mathias",
                            "iconMiniId": 78815,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                MathiasSetup
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
                                duoHealSetup
                            ]
                        },
                        {
                            "name": "Gorseval",
                            "iconMiniId": 77296,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                duoHealSetup
                            ]
                        },
                        {
                            "name": "Sabetha",
                            "iconMiniId": 77339,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                soloHealSetup
                            ]
                        },
                    ]
                },
                {
                    "name": "Strike",
                    "bosses": [
                        {
                            "name": "Old Lion's Court",
                            "iconMiniId": 99163,
                            "selectedSetup": 0,
                            "defaultSetup": 0,
                            "setups": [
                                OLCSetup
                            ]
                        },
                    ]
                },
            ]
        };

export default Raid;
