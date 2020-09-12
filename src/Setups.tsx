import {Component} from "react";
import * as React from "react";

import functions from "./helper/functions";
import Sidebar from "./settings/Sidebar";

import NamedSetup from "./Setups/NamedSetup";
import "./Setups.scss";

//Setups:
import FullComp from "./Setups/SetupConfigs/FullComp";
import Marvin from "./Setups/SetupConfigs/Marvin";
import Week18 from "./Setups/SetupConfigs/Week18";
import DhuumCM from "./Setups/SetupConfigs/DhuumCM";
import QadimCC from "./Setups/SetupConfigs/QadimCC";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import WeeklySetup from "./Setups/WeeklySetup";
import SetupRenderer from "./Setups/SetupRenderer";
import Week20 from "./Setups/SetupConfigs/Week20";
import League01 from "./Setups/SetupConfigs/League01";
import NewFullComp from "./Setups/SetupConfigs/NewFullComp_07-2020";

const currentWeek = functions.getWeekNumberOfNextMonday();

const weeklySetups = [
    {
        week: 17,
        setup: Marvin,
    },
    {
        week: 18,
        setup: Week18,
    },
    {
        week: 20,
        setup: Week20,
    },
];

let weeklySetupsIndex = {};
weeklySetups.forEach((value, index) => {
    weeklySetupsIndex[value.week] = value;
});

const namedSetups = [
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
    {
        name: "New Setups",
        shortcut: "new",
        setup: NewFullComp,
    },
];

let namedSetupsIndex = {};
namedSetups.forEach((value, index) => {
    namedSetupsIndex[value.shortcut] = value;
});


class Setups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            big: false,
            bigTime: Date.now(),
        };
        this.toggleBig = this.toggleBig.bind(this);
        this.customSetupRenderer = this.customSetupRenderer.bind(this);
        this.getSetupForKey = this.getSetupForKey.bind(this);
        this.AutomatedSetup = this.AutomatedSetup.bind(this);
        this.DefaultSetup = this.DefaultSetup.bind(this);
    }

    toggleBig() {
        console.log("toggle big");
        this.setState({
            big: !this.state.big,
            bigTime: Date.now(),
        })
    }

    customSetupRenderer(params) {
        return <SetupRenderer big={this.state.big} bigTime={this.state.bigTime} {... params} />;
    }

    getSetupForKey(id) {
        console.log("setupForId", id);
        if(namedSetupsIndex.hasOwnProperty(id)) {
            console.log("named", id);
            return this.customSetupRenderer(namedSetupsIndex[id].setup);
        }
        else if (weeklySetupsIndex.hasOwnProperty(id)) {
            console.log("weekly", id);
            return this.customSetupRenderer(weeklySetupsIndex[id].setup);
        }
        else {
            console.log("full", id);
            return this.customSetupRenderer(FullComp);
        }
    }
    AutomatedSetup() {
        let { id } = useParams();

        console.log("autoId", id);
        return (
            <WeeklySetup id={id}>
                {this.getSetupForKey(id)}
            </WeeklySetup>
        );
    }

    DefaultSetup() {
        const id = currentWeek;

        return (
            <WeeklySetup id={id} >
                {this.getSetupForKey(id)}
            </WeeklySetup>
        );
    }
    render() {
        return (
            <div className={"body"}>
                <Router>
                    <Sidebar currentWeek={currentWeek}
                             namedSetups={namedSetups}
                             weeklySetups={weeklySetups}
                             toggleBigCallback={this.toggleBig}
                    />
                    <Switch>
                        {weeklySetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.week}
                                exact={setup.exact}
                                children={<WeeklySetup id={setup.week}>
                                    {this.customSetupRenderer(setup.setup)}
                                </WeeklySetup>}
                            />))
                        }
                        {namedSetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.shortcut}
                                exact={setup.exact}
                                children={<NamedSetup name={setup.name}>
                                    {this.customSetupRenderer(setup.setup)}
                                </NamedSetup>}
                            />))
                        }
                        <Route path="/:id" children={<this.AutomatedSetup />} />
                        <Route>
                            <this.DefaultSetup />
                        </Route>
                    </Switch>
                </Router>
            </div>);
    }

}
export default Setups;