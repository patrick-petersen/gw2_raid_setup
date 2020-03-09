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
              <Boss name={"Valeguardian"}>
                  <Setup name={"Center"}>
                      <Role task={"Tank & Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Seeker Root"} profession={"Soulbeast"} player={"Assa"} />
                      <Role task={"Seeker Root"} profession={"Soulbeast"} player={"Nevra"} />
                  </Setup>
              </Boss>
              <Boss name={"Gorseval"}>
                  <Setup name={"No Updraft"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Tank & Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Sabetha"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Kiter"} profession={"Scourge"} player={"Nevra"} />
                      <Role task={"Cannon 1 & 3"} profession={"Warrior"} player={"David"} />
                      <Role task={"Cannon 2 & 4"} profession={"?"} player={"Lumi"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 2"}>
              <Boss name={"Slothasor"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Mushroom 1"} profession={"Daredevil"} player={"Assa"} />
                      <Role task={"Mushroom 2"} profession={"Daredevil"} player={"Nevra"} />
                      <Role task={"Mushroom 3"} profession={"Weaver"} player={"Fynn"} />
                      <Role task={"Mushroom 4"} profession={"Weaver"} player={"Alex"} />
                  </Setup>
              </Boss>
              <Boss name={"Trio"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness & Mortar"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Quickness"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Saboteur"} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Mathias"}>
                  <Setup name={"Normal"}>
                      <Role task={"Buffs"} profession={"Thief"} player={"Assa"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Kalell"} />
                      <Role task={"Healing & Resurrecting"} profession={"Scourge"} player={"Ely"} />
                      <Role task={"Reflect"} profession={"Mirage"} player={"Nevra"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 3"}>
              <Boss name={"Escort"}>
                  <Setup name={"Solo cap"}>
                      <Role task={"Solo cap"} profession={"Mirage"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Quickness"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Warg"} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Keep Construct"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Tank & Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Pusher"} profession={"Chronomancer"} player={"Fynn"} />
                  </Setup>
              </Boss>
              <Boss name={"Xera"}>
                  <Setup name={"Mid"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Tank & Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 4"}>
              <Boss name={"Cairn"}>
                  <Setup name={"Center"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Quickness & Stability"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Mursaat Overseer"}>
                  <Setup name={"Normal"}>
                      <Role task={"Claim"} profession={"?"} player={"Kalell"} />
                      <Role task={"Buffs"} profession={"Thief"} player={"Assa"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Dispel"} profession={"?"} player={"?"} />
                      <Role task={"Protect"} profession={"?"} player={"?"} />
                  </Setup>
              </Boss>
              <Boss name={"Samarog"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness & Pull"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Extra Push"} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Deimos"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness & Tank"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Quickness"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Heal & Buffs & Black-kiter"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Handkiter"} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 5"}>
              <Boss name={"Desmina"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness & Tank"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Quickness"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Heal & Buffs & Tank"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Pusher"} profession={"Druid"} player={"Fynn"} />
                      <Role task={"Epi"} profession={"Scourge"} player={"Nevra"} />
                  </Setup>
              </Boss>
              <Boss name={"River"}>
                  <Setup name={"Normal"}>
                      <Role task={"Desmina Aegis"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Desmina Superspeed"} profession={"Holosmith"} player={"Fynn"} />
                      <Role task={"Desmina Healing"} profession={"Revenant"} player={"Alex"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Quickness & Aegis"} profession={"Firebrand"} player={"Yasi"} />
                  </Setup>
              </Boss>
              <Boss name={"Statue of Ice"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness & Tank"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Quickness"} profession={"Firebrand"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Statue of Death"}>
                  <Setup name={"0 - 5"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs & Tank"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                  </Setup>
              </Boss>
              <Boss name={"Statue of Darkness"}>
                  <Setup name={"Portal"}>
                      <Role task={"Portal"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Orb"} profession={"Warrior"} player={"Fynn"} />
                  </Setup>
              </Boss>
              <Boss name={"Dhuum"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Heal & Buffs & Tank"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Green 1"} profession={"Warrior"} player={"David"} />
                      <Role task={"Kiter & Green 2"} profession={"Druid"} player={"Kalell"} />
                      <Role task={"Green 3"} profession={"Warrior"} player={"Nevra"} />
                      <Role task={"First Green 2"} profession={"?"} player={"Lumi"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 6"}>
              <Boss name={"Conjured Amalgamate"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Shields"} profession={"Warrior"} player={"David"} />
                      <Role task={"Swords"} profession={"?"} player={"Alex"} />
                      <Role task={"Swords"} profession={"?"} player={"Fynn"} />
                  </Setup>
              </Boss>
              <Boss name={"Twin Largos"}>
                  <Setup name={"Portal"}>
                      <Role task={"Quickness"} profession={"?"} player={"Kalell"} />
                      <Role task={"Heal & Buffs & Tank"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Lumi"} />
                      <Role task={"Heal & Res"} profession={"Scourge"} player={"Ely"} />
                      <Role task={"Portal"} profession={"Mirage"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Qadim"}>
                  <Setup name={"Normal"}>
                      <Role task={"Tank & Boonstrip & Banner"} profession={"Spellbreaker"} player={"Kalell"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Quickness & Wyvern Tank"} profession={"Chronomancer"} player={"Yasi"} />
                      <Role task={"Lampe"} profession={"Reaper"} player={"Nevra"} />
                  </Setup>
              </Boss>
          </Wing>

          <Wing name={"Wing 7"}>
              <Boss name={"Adina"}>
                  <Setup name={"Normal"}>
                      <Role task={"Boons & Pillar"} profession={"Thief"} player={"Assa"} />
                      <Role task={"Heal & Buffs & Tank"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Pillar"} profession={"?"} player={"Nevra"} />
                      <Role task={"Pillar"} profession={"?"} player={"Kalell"} />
                      <Role task={"Pillar"} profession={"?"} player={"Yasi"} />
                      <Role task={"Pillar"} profession={"?"} player={"?"} />
                  </Setup>
              </Boss>
              <Boss name={"Sabir"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Heal & Buffs & Tank"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Whisps"} profession={"Warrior"} player={"David"} />
                  </Setup>
              </Boss>
              <Boss name={"Qadim 2"}>
                  <Setup name={"Normal"}>
                      <Role task={"Quickness & Tank"} profession={"Chronomancer"} player={"Kalell"} />
                      <Role task={"Quickness & Stability"} profession={"Firebrand"} player={"Yasi"} />
                      <Role task={"Heal & Buffs"} profession={"Tempest"} player={"Schrotty"} />
                      <Role task={"Alacrity"} profession={"Renegade"} player={"Ely"} />
                      <Role task={"Soulcleave"} profession={"Renegade"} player={"Alex"} />
                      <Role task={"Anomaly CC"} profession={"Warrior"} player={"David"} />
                      <Role task={"Pylon N"} profession={"Scourge"} player={"Lumi"} />
                      <Role task={"Pylon W"} profession={"Scourge"} player={"Nevra"} />
                      <Role task={"Pylon E"} profession={"Deadeye"} player={"Assa"} />
                  </Setup>
              </Boss>
          </Wing>
      </main>
    </div>
  );
}

export default App;
