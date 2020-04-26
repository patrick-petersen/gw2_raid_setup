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

const currentWeek = functions.getWeekNumberOfNextMonday();

const weeklySetups = [
    {
        week: 17,
        setup: Marvin,
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
    render() {
        return (
            <div className={"body"}>
                <Router>
                <Sidebar currentWeek={currentWeek} namedSetups={namedSetups} weeklySetups={weeklySetups} />
                    <Switch>
                        {weeklySetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.week}
                                exact={setup.exact}
                                children={<WeeklySetup id={setup.week}>
                                    <SetupRenderer {... setup.setup} />
                                </WeeklySetup>}
                            />))
                        }
                        {namedSetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.shortcut}
                                exact={setup.exact}
                                children={<NamedSetup name={setup.name}>
                                    <SetupRenderer {... setup.setup} />
                                </NamedSetup>}
                            />))
                        }
                        <Route path="/:id" children={<AutomatedSetup />} />
                        <Route>
                            <DefaultSetup />
                        </Route>
                    </Switch>
                </Router>
            </div>);
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
        return <SetupRenderer {... namedSetups[id]} />;
    }
    else if (weeklySetups.hasOwnProperty(id)) {
        return <SetupRenderer {... weeklySetups[id]} />;
    }
    else {
        return <SetupRenderer {... FullComp} />
    }
}

export default Setups;