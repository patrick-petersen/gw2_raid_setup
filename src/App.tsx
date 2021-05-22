import * as React from 'react';
import './App.scss';

import Setups from "./Setups";


class App extends React.Component {

    render() : JSX.Element {
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
