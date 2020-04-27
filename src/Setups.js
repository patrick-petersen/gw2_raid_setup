import React, {Component} from "react";
import functions from "./helper/functions";
import Sidebar from "./settings/Sidebar";

import NamedSetup from "./Setups/NamedSetup";

import "./Setups.scss";

//Setups:
import FullComp from "./Setups/SetupConfigs/FullComp";
import Marvin from "./Setups/SetupConfigs/Marvin";
import LumiEly from "./Setups/SetupConfigs/LumiEly";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import WeeklySetup from "./Setups/WeeklySetup";
import DhuumCM from "./Setups/SetupConfigs/DhuumCM";
import QadimCC from "./Setups/SetupConfigs/QadimCC";
import SetupRenderer from "./Setups/SetupRenderer";
import Week18 from "./Setups/SetupConfigs/Week18";

const currentWeek = functions.getWeekNumberOfNextMonday();

const weeklySetups = [
    {
        week: 17,
        setup: Marvin,
    },
    {
        week: 18,
        setup: Week18,
    }
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
    }

    toggleBig() {
        console.log("toggle big");
        this.setState({
            big: !this.state.big,
            bigTime: Date.now(),
        })
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

    customSetupRenderer(params) {
        return <SetupRenderer big={this.state.big} bigTime={this.state.bigTime} {... params} />;
    }

    getSetupForKey(id) {
        if(namedSetups.hasOwnProperty(id)) {
            return this.customSetupRenderer(namedSetups[id]);
        }
        else if (weeklySetups.hasOwnProperty(id)) {
            return this.customSetupRenderer(weeklySetups[id]);
        }
        else {
            return this.customSetupRenderer(FullComp);
        }
    }
    AutomatedSetup() {
        let { id } = useParams();

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

}
export default Setups;