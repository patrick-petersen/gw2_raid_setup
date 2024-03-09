import * as React from "react";
import functions from "./helper/functions";
import Sidebar from "./settings/Sidebar";
import NamedSetup from "./Setups/NamedSetup";
import "./Setups.scss";
import {
    HashRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import * as RaidSetup from "./Setups/SetupConfigs/RaidSetup";

//Setups:
import Marvin from "./Setups/SetupConfigs/Marvin";
import DhuumCM from "./Setups/SetupConfigs/DhuumCM";
import QadimCC from "./Setups/SetupConfigs/QadimCC";

import SetupRenderer from "./Setups/SetupRenderer";
import League01 from "./Setups/SetupConfigs/League01";

type NamedSetupType = {
    name: string,
    shortcut: string,
    setup: RaidSetup.RaidSetup<any>,
}

const defaultSetup = League01;

const namedSetups : NamedSetupType[] = [
    {
        name: "default",
        shortcut: "default",
        setup: defaultSetup,
    },
    {
        name: "Lumi -> Marvin",
        shortcut: "marvin",
        setup: Marvin,
    },
    {
        name: "Dhuum CM",
        shortcut: "dhuum",
        setup: DhuumCM,
    },
    {
        name: "Qadim no CC",
        shortcut: "qadim",
        setup: QadimCC,
    },
    {
        name: "Silver League",
        shortcut: "league",
        setup: League01,
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

        return (<NamedSetup name={"default"}>
                {this.customSetupRenderer(defaultSetup)}
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