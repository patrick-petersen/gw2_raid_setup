import * as React from "react";
import Sidebar from "./settings/Sidebar";
import NamedSetup from "./Setups/NamedSetup";
import "./Setups.scss";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import * as RaidSetup from "./Setups/SetupConfigs/Setups/RaidSetup";

//Setups:

import SetupRenderer from "./Setups/SetupRenderer";
import Raid from "./Setups/SetupConfigs/Setups/Raid";
import Strike from "./Setups/SetupConfigs/Setups/Strike";
import Cerus from "./Setups/SetupConfigs/Setups/Cerus";

type NamedSetupType = {
    name: string,
    shortcut: string,
    setup: RaidSetup.RaidSetup<any>,
}

const raidSetup = Raid;

const namedSetups : NamedSetupType[] = [
    {
        name: "Raid",
        shortcut: "raid",
        setup: raidSetup,
    },
    {
        name: "Strikes",
        shortcut: "strikes",
        setup: Strike,
    },
    {
        name: "Cerus",
        shortcut: "cerus",
        setup: Cerus,
    },
];

const namedSetupsIndex : {[id: string]: NamedSetupType} = {};
namedSetups.forEach((value: NamedSetupType) => {
    namedSetupsIndex[value.shortcut] = value;
});

type SetupsProps = {

}

type SetupsState = {
    big: boolean,
    bigTime: number
}

class Setups extends React.Component<SetupsProps, SetupsState> {
    constructor(props : SetupsProps) {
        super(props);

        this.state = {
            big: false,
            bigTime: Date.now(),
        };
        this.toggleBig = this.toggleBig.bind(this);
        this.customSetupRenderer = this.customSetupRenderer.bind(this);
        this.DefaultSetup = this.DefaultSetup.bind(this);
    }

    toggleBig() : void {
        console.log("toggle big");
        this.setState({
            big: !this.state.big,
            bigTime: Date.now(),
        })
    }

    customSetupRenderer(params: RaidSetup.RaidSetup<any>) : JSX.Element {
        return <SetupRenderer big={this.state.big} bigTime={this.state.bigTime} {... params} />;
    }


    DefaultSetup() : JSX.Element {

        return (<NamedSetup name={"raid"}>
                {this.customSetupRenderer(raidSetup)}
            </NamedSetup>
        );
    }
    render() : JSX.Element {
        return (
            <div className={"body"}>
                <Router>
                    <Sidebar namedSetups={namedSetups}
                             toggleBigCallback={this.toggleBig}
                    />
                    <Switch>
                        {namedSetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.shortcut}
                                children={<NamedSetup name={setup.name}>
                                    {this.customSetupRenderer(setup.setup)}
                                </NamedSetup>}
                            />))
                        }
                        <Route>
                            <this.DefaultSetup />
                        </Route>
                    </Switch>
                </Router>
            </div>);
    }

}
export default Setups;