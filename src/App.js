import React from 'react';
import './App.css';

import Wing from './raid/Wing.js';
import Boss from './raid/Boss.js';
import Setup from "./raid/Setup.js";
import Role from "./raid/Role.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>[Koss] Raid Setup</h1>
      </header>
      <main>
          <Wing name={"Wing 1"}>
              <Boss name={"Valeguardian"} iconMiniId={"77334"}>
                  <Setup name={"Center"}>
                      <Role tasks={["Tank", "Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Seeker Root"]} profession={"Soulbeast"} player={"Assa"} />
                      <Role tasks={["Seeker Root"]} profession={"Soulbeast"} player={"Nevra"} />
                  </Setup>
              </Boss>
              <Boss name={"Gorseval"} iconMiniId={"77296"}>
                  <Setup name={"No Updraft"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Sabetha"} iconMiniId={"77339"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Kiter"]} profession={"Scourge"} player={"Nevra"} />
                      <Role tasks={["Cannon 1 & 3"]} profession={"Warrior"} player={"David"} />
                      <Role tasks={["Cannon 2 & 4"]} profession={"Firebrand"} player={"Lumi"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 2"}>
              <Boss name={"Slothasor"} iconMiniId={"77870"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Mushroom 1"]} profession={"Warrior"} player={"David"} />
                      <Role tasks={["Mushroom 2"]} profession={"Daredevil"} player={"Nevra"} />
                      <Role tasks={["Mushroom 3"]} profession={"Daredevil"} player={"Lumi"} />
                      <Role tasks={["Mushroom 4"]} profession={"Weaver"} player={"Alex"} />
                  </Setup>
              </Boss>
              <Boss name={"Trio"} iconMiniId={"77820"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness", "Mortar"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Saboteur"]} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Mathias"} iconMiniId={"77911"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Buffs"]} profession={"Thief"} player={"Assa"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Kalell"} />
                      <Role tasks={["Healing", "Reviving"]} profession={"Scourge"} player={"Ely"} />
                      <Role tasks={["Reflect"]} profession={"Mirage"} player={"Nevra"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 3"}>
              <Boss name={"Escort"} iconMiniId={"78828"}>
                  <Setup name={"Solo cap"}>
                      <Role tasks={["Solo cap"]} profession={"Mirage"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Warg"]} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Keep Construct"} iconMiniId={"78890"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Pusher"]} profession={"Chronomancer"} player={"Fynn"} />
                  </Setup>
              </Boss>
              <Boss name={"Xera"} iconMiniId={"78815"}>
                  <Setup name={"Mid"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 4"}>
              <Boss name={"Cairn"} iconMiniId={"80562"}>
                  <Setup name={"Center"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Quickness", "Stability"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Mursaat Overseer"} iconMiniId={"80224"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Claim"]} profession={"Weaver"} player={"Kalell"} />
                      <Role tasks={["Buffs"]} profession={"Thief"} player={"Assa"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Dispel"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Protect"]} profession={"Berserker"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Samarog"} iconMiniId={"80218"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness", "Pull"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Extra Push"]} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Deimos"} iconMiniId={"80327"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Heal", "Buffs", "Black-kiter"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Handkiter"]} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 5"}>
              <Boss name={"Desmina"} iconMiniId={"86076"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Pusher"]} profession={"Druid"} player={"Fynn"} />
                      <Role tasks={["Epi"]} profession={"Scourge"} player={"Nevra"} />
                  </Setup>
              </Boss>
              <Boss name={"River"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Desmina Aegis"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Desmina Superspeed"]} profession={"Holosmith"} player={"Fynn"} />
                      <Role tasks={["Desmina Healing"]} profession={"Revenant"} player={"Alex"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Quickness", "Aegis"]} profession={"Firebrand"} player={"Yasi"} />
                  </Setup>
              </Boss>
              <Boss name={"Statue of Ice"} iconMiniId={"85667"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Statue of Death"}>
                  <Setup name={"0 - 5"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Statue of Darkness"}>
                  <Setup name={"Portal"}>
                      <Role tasks={["Portal"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Orb"]} profession={"Warrior"} player={"Fynn"} />
                  </Setup>
              </Boss>
              <Boss name={"Dhuum"} iconMiniId={"85998"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Green 1"]} profession={"Warrior"} player={"David"} />
                      <Role tasks={["Kiter", "Green 2"]} profession={"Druid"} player={"Kalell"} />
                      <Role tasks={["Green 3"]} profession={"Warrior"} player={"Nevra"} />
                      <Role tasks={["First Green 2"]} profession={"Firebrand"} player={"Lumi"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 6"}>
              <Boss name={"Conjured Amalgamate"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Shields"]} profession={"Warrior"} player={"David"} />
                      <Role tasks={["Swords"]} profession={"Soulbeast"} player={"Alex"} />
                      <Role tasks={["Swords"]} profession={"Chronomancer"} player={"Fynn"} />
                  </Setup>
              </Boss>
              <Boss name={"Twin Largos"} iconMiniId={"88868"}>
                  <Setup name={"Portal"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Lumi"} />
                      <Role tasks={["Heal", "Reviving"]} profession={"Scourge"} player={"Ely"} />
                      <Role tasks={["Portal"]} profession={"Chronomancer"} player={"Yasi"} />
                  </Setup>
              </Boss>
              <Boss name={"Qadim"} iconMiniId={"88587"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Tank", "Boonstrip","Banner"]} profession={"Spellbreaker"} player={"Kalell"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Quickness", "Wyvern Tank"]} profession={"Chronomancer"} player={"Yasi"} />
                      <Role tasks={["Lampe"]} profession={"Reaper"} player={"Nevra"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 7"}>
              <Boss name={"Adina"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Boons", "Pillar"]} profession={"Thief"} player={"Assa"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Pillar"]} profession={"Dragonhunter"} player={"Nevra"} />
                      <Role tasks={["Pillar"]} profession={"Dragonhunter"} player={"Kalell"} />
                      <Role tasks={["Pillar"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Pillar"]} profession={"Berserker"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Sabir"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Tank", "Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Whisps"]} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Qadim 2"} iconMiniId={"91232"}>
                  <Setup name={"Normal"}>
                      <Role tasks={["Quickness", "Tank"]} profession={"Chronomancer"} player={"Kalell"} />
                      <Role tasks={["Quickness", "Stability"]} profession={"Firebrand"} player={"Yasi"} />
                      <Role tasks={["Heal", "Buffs"]} profession={"Tempest"} player={"Schrotty"} />
                      <Role tasks={["Alacrity"]} profession={"Renegade"} player={"Ely"} />
                      <Role tasks={["Soulcleave"]} profession={"Renegade"} player={"Alex"} />
                      <Role tasks={["Anomaly CC"]} profession={"Warrior"} player={"David"} />
                      <Role tasks={["Pylon N"]} profession={"Scourge"} player={"Lumi"} />
                      <Role tasks={["Pylon W"]} profession={"Scourge"} player={"Nevra"} />
                      <Role tasks={["Pylon E"]} profession={"Deadeye"} player={"Assa"} />
                  </Setup>
              </Boss>
          </Wing>
      </main>
    </div>
  );
}

export default App;
