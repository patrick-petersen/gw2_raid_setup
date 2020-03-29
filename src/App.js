import React, {Component} from 'react';
import './App.scss';

import Setups from "./Setups.js";


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>[Koss] Raid Setup</h1>
                </header>
                <main>
                    <Setups />
                </main>
            </div>
        );
    }
}

export default App;
