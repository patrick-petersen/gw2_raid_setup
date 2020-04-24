import React, {Component} from "react";
import functions from "./helper/functions";
//import Sidebar from "./settings/Sidebar";

import NamedSetup from "./Setups/SetupConfigs/NamedSetup";

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
import WeeklySetup from "./Setups/SetupConfigs/WeeklySetup";

const currentWeek = functions.getWeekNumberOfNextMonday();

const weeklySetups = [
    {
        week: 17,
        setup: () => <Marvin/>,
    }
];

let weeklySetupsIndex = {};
weeklySetups.forEach((value, index) => {
    weeklySetupsIndex[value.week] = value;
});

const namedSetups = [
    {
        name: "Marvin replacing Lumi",
        shortcut: "marvin",
        setup: () => <Marvin/>,
    }
];

let namedSetupsIndex = {};
namedSetups.forEach((value, index) => {
    namedSetupsIndex[value.shortcut] = value;
});


class Setups extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {weeklySetups.map((setup, index) => (
                        <Route
                            key={index}
                            path={'/'+setup.week}
                            exact={setup.exact}
                            children={<WeeklySetup id={setup.week}><setup.setup /></WeeklySetup>}
                        />))
                    }
                    {namedSetups.map((setup, index) => (
                        <Route
                            key={index}
                            path={'/'+setup.shortcut}
                            exact={setup.exact}
                            children={<NamedSetup name={setup.name}><setup.setup /></NamedSetup>}
                        />))
                    }
                    <Route path="/:id" children={<AutomatedSetup />} />
                    <Route>
                        <DefaultSetup />
                    </Route>
                </Switch>
            </Router>);
    }
}
function AutomatedSetup() {
    let { id } = useParams();

    return (
        <WeeklySetup id={id}>
            {getSetupForKey(id)}
        </WeeklySetup>
    );
}

function DefaultSetup() {
    const id = currentWeek;

    return (
        <WeeklySetup id={id} >
            {getSetupForKey(id)}
        </WeeklySetup>
    );
}

function getSetupForKey(id) {
    if(namedSetups.hasOwnProperty(id)) {
        return namedSetups[id];
    }
    else if (weeklySetups.hasOwnProperty(id)) {
        return weeklySetups[id];
    }
    else {
        return <FullComp />
    }
}

export default Setups;