import React, {Component} from "react";
import functions from "./helper/functions";
import Sidebar from "./settings/Sidebar";

import "./Setups.scss";

//Setups:
import FullComp from "./Setups/FullComp";
import Marvin from "./Setups/Marvin";
import LumiEly from "./Setups/LumiEly";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const currentWeek = functions.getWeekNumber();

const weeklySetups = [
    {
        week: 17,
        setup: () => <Marvin/>,
    }
];

class Setups extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {weeklySetups.map((setup, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={'/'+setup.week}
                                exact={setup.exact}
                                children={<GenericSetup id={setup.week}><setup.setup /></GenericSetup>}
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
        <GenericSetup id={id}>
            <FullComp />
        </GenericSetup>
    );
}

function DefaultSetup() {
    const id = currentWeek;

    return (
        <GenericSetup id={id}>
            <FullComp />
        </GenericSetup>
    );
}

class GenericSetup extends Component {
    render() {
        const d = functions.getDateOfISOWeek(this.props.id, 2020);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";

        return (
            <div className={"body"}>
                <Sidebar />
                <div className={"content"}>
                    <h3>Setup for week: {this.props.id} ({dayString})</h3>
                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default Setups;