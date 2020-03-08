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
        </Wing>
      </main>
    </div>
  );
}

export default App;
