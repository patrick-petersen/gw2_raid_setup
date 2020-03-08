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
        <h1>[Koss] Raid setup</h1>
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
                      <Role task={"Pusher"} profession={"Chronomander"} player={"Fynn"} />
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
      </main>
    </div>
  );
}

export default App;
