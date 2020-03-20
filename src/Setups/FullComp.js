import Wing from "../raid/Wing";
import Boss from "../raid/Boss";
import Setup from "../raid/Setup";
import Role from "../raid/Role";
import React, {Component} from "react";


class FullComp extends Component {
    constructor(props) {
        super(props);
        global.settings = {
            "players": ["Kalell", "Nevra", "Yasi", "Alex", "Lumi", "Fynn", "David", "Shrotty", "Assa", "Ely"],
            "missing": []
        };
    }

    render() {
        return [
            <Wing name={"Wing 1"} key={0}>
                <Boss name={"Valeguardian"} iconMiniId={"77334"} bossId={0}>
                    <Setup name={"Center"} setupId={0}>
                        <Role tasks={["Tank", "Quickness"]} profession={"Chronomancer"} player={"Kalell"}
                              backups={["Yasi"]}/>
                        <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                        <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                        <Role tasks={["Seeker Root"]} profession={"Soulbeast"} player={"Assa"}/>
                        <Role tasks={["Seeker Root"]} profession={"Soulbeast"} player={"Nevra"}/>
                    </Setup>
                    <Setup name={"Rand"} setupId={1} hidden={true}>
                        <Role tasks={["Tank", "Quickness"]} profession={"Chronomancer"} player={"Kalell"}
                              backups={["Yasi"]}/>
                        <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                        <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                    </Setup>
                </Boss>
                <Boss name={"Gorseval"} iconMiniId={"77296"} bossId={1}>
                    <Setup name={"No Updraft"} setupId={0}>
                        <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                        <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                        <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                        <Role tasks={["Stability"]} profession={"Firebrand"} player={"Yasi"}/>
                    </Setup>
                </Boss>
                <Boss name={"Sabetha"} iconMiniId={"77339"} bossId={2}>
                    <Setup name={"Normal"} setupId={0}>
                        <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                        <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                        <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                        <Role tasks={["Kiter"]} profession={"Scourge"} player={"Assa"}/>
                        <Role tasks={["Cannon 1 & 3"]} profession={"Berserker"} player={"David"}/>
                        <Role tasks={["Cannon 2 & 4"]} profession={"Firebrand"} player={"Lumi"}/>
                    </Setup>
                </Boss>
            </Wing>,

                <Wing name={"Wing 5"} key={4}>
                    <Boss name={"Desmina"} iconMiniId={"86076"} bossId={13}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Pusher"]} profession={"Druid"} player={"Fynn"}/>
                            <Role tasks={["Epi"]} profession={"Scourge"} player={"Assa"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"River"} iconMiniId={"85785"} bossId={14}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Desmina Aegis"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Desmina Superspeed"]} profession={"Holosmith"} player={"Fynn"}/>
                            <Role tasks={["Desmina Healing"]} profession={"Revenant"} player={"Alex"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Quickness", "Aegis"]} profession={"Firebrand"} player={"Yasi"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Statue of Ice"} iconMiniId={"85667"} bossId={15}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Statue of Death"} bossId={16}>
                        <Setup name={"0 - 5"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Statue of Darkness"} bossId={17}>
                        <Setup name={"Portal"} setupId={0}>
                            <Role tasks={["Portal"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Orb"]} profession={"Berserker"} player={"Fynn"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Dhuum"} iconMiniId={"85998"} bossId={18}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Green 1"]} profession={"Berserker"} player={"David"}/>
                            <Role tasks={["Kiter", "Green 2"]} profession={"Druid"} player={"Kalell"}/>
                            <Role tasks={["Green 3"]} profession={"Chronomancer"} player={"Nevra"}/>
                            <Role tasks={["First Green 2"]} profession={"Firebrand"} player={"Lumi"}/>
                        </Setup>
                    </Boss>
                </Wing>,

                <Wing name={"Wing 6"} key={5}>
                    <Boss name={"Conjured Amalgamate"} bossId={19}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Shields"]} profession={"Berserker"} player={"David"}/>
                            <Role tasks={["Swords"]} profession={"Soulbeast"} player={"Alex"}/>
                            <Role tasks={["Swords"]} profession={"Chronomancer"} player={"Fynn"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Twin Largos"} iconMiniId={"88868"} bossId={20}>
                        <Setup name={"Portal"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Lumi"}/>
                            <Role tasks={["Heal", "Reviving"]} profession={"Scourge"} player={"Ely"}/>
                            <Role tasks={["Portal"]} profession={"Chronomancer"} player={"Yasi"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Qadim"} iconMiniId={"88587"} bossId={21}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Tank", "Boonstrip", "Banner"]} profession={"Spellbreaker"}
                                  player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Quickness", "Wyvern Tank"]} profession={"Chronomancer"} player={"Yasi"}/>
                            <Role tasks={["Lampe"]} profession={"Reaper"} player={"Nevra"}/>
                        </Setup>
                    </Boss>
                </Wing>,

                <Wing name={"Wing 7"} key={6}>
                    <Boss name={"Adina"} iconMiniId={"82686"} bossId={22}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Boons", "Pillar"]} profession={"Thief"} player={"Assa"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Pillar"]} profession={"Dragonhunter"} player={"Nevra"}/>
                            <Role tasks={["Pillar"]} profession={"Soulbeast"} player={"Kalell"}/>
                            <Role tasks={["Pillar"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Pillar"]} profession={"Berserker"} player={"David"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Sabir"} iconMiniId={"83551"} bossId={23}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Whisps"]} profession={"Berserker"} player={"David"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Qadim 2"} iconMiniId={"91232"} bossId={24}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Quickness", "Stability"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Soulcleave"]} profession={"Renegade"} player={"Alex"}/>
                            <Role tasks={["Anomaly CC"]} profession={"Berserker"} player={"David"}/>
                            <Role tasks={["Pylon N"]} profession={"Scourge"} player={"Lumi"}/>
                            <Role tasks={["Pylon W"]} profession={"Scourge"} player={"Nevra"}/>
                            <Role tasks={["Pylon E"]} profession={"Deadeye"} player={"Assa"}/>
                        </Setup>
                    </Boss>
                </Wing>,

                <Wing name={"Wing 3"} key={2}>
                    <Boss name={"Escort"} iconMiniId={"78828"} bossId={6}>
                        <Setup name={"Solo cap"} setupId={0}>
                            <Role tasks={["Solo cap"]} profession={"Mirage"} player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Warg"]} profession={"Berserker"} player={"David"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Keep Construct"} iconMiniId={"78890"} bossId={7}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Pusher"]} profession={"Chronomancer"} player={"Fynn"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Xera"} iconMiniId={"78815"} bossId={8}>
                        <Setup name={"Mid"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                        </Setup>
                    </Boss>
                </Wing>,

                <Wing name={"Wing 2"} key={1}>
                    <Boss name={"Slothasor"} iconMiniId={"77870"} bossId={3}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Mushroom 1"]} profession={"Berserker"} player={"David"}/>
                            <Role tasks={["Mushroom 2"]} profession={"Daredevil"} player={"Nevra"}/>
                            <Role tasks={["Mushroom 3"]} profession={"Daredevil"} player={"Lumi"}/>
                            <Role tasks={["Mushroom 4"]} profession={"Weaver"} player={"Alex"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Trio"} iconMiniId={"77820"} bossId={4}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness", "Mortar"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Saboteur"]} profession={"Berserker"} player={"David"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Mathias"} iconMiniId={"77911"} bossId={5}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Buffs"]} profession={"Thief"} player={"Assa"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Kalell"}/>
                            <Role tasks={["Healing", "Reviving"]} profession={"Scourge"} player={"Ely"}/>
                            <Role tasks={["Reflect"]} profession={"Mirage"} player={"Nevra"}/>
                        </Setup>
                    </Boss>
                </Wing>,

                <Wing name={"Wing 4"} key={3}>
                    <Boss name={"Cairn"} iconMiniId={"80562"} bossId={9}>
                        <Setup name={"Center"} setupId={0}>
                            <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Quickness", "Stability"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Mursaat Overseer"} iconMiniId={"80224"} bossId={10}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Claim"]} profession={"Weaver"} player={"Kalell"}/>
                            <Role tasks={["Buffs"]} profession={"Thief"} player={"Assa"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Dispel"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Protect"]} profession={"Berserker"} player={"David"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Samarog"} iconMiniId={"80218"} bossId={11}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness", "Pull"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Extra Push"]} profession={"Berserker"} player={"David"}/>
                        </Setup>
                    </Boss>
                    <Boss name={"Deimos"} iconMiniId={"80327"} bossId={12}>
                        <Setup name={"Normal"} setupId={0}>
                            <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"}/>
                            <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"}/>
                            <Role tasks={["Heal", "Buffs", "Black-kiter"]} profession={"Tempest"} player={"Shrotty"}/>
                            <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"}/>
                            <Role tasks={["Handkiter"]} profession={"Herald"} player={"David"}/>
                            <Role tasks={["Banner"]} profession={"Berserker"} player={"Assa"}/>
                        </Setup>
                    </Boss>
                </Wing>
        ];
    }
}

export default FullComp;
