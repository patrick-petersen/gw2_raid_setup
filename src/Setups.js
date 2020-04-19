import React, {Component} from "react";
import functions from "./helper/functions";
//import Sidebar from "./settings/Sidebar";

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

const currentWeek = functions.getWeekNumberOfNextMonday();

const weeklySetups = [
    {
        week: 17,
        setup: () => <Marvin/>,
    }
];

let weekIndex = {};
weeklySetups.forEach((value, index) => {
    weekIndex[value.week] = value;
})

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
        <GenericSetup id={id} />
    );
}

function DefaultSetup() {
    const id = currentWeek;

    return (
        <GenericSetup id={id} />
    );
}

class GenericSetup extends Component {
    render() {
        const week = this.props.id;
        const d = functions.getDateOfISOWeek(week, 2020);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";

        console.log("Week", week, weekIndex.hasOwnProperty(week));

        return (
            <div className={"body"}>
                <div className={"content"}>
                    <h3>
                        <LinkTo id={week - 1} /> Setup for week: {week} ({dayString}) <LinkTo id={week - 1 + 2 } /></h3>
                    {weekIndex.hasOwnProperty(week)?
                        weekIndex[this.props.id].setup():
                        <FullComp />
                    }
                </div>
            </div>
        );

    }
}

class LinkTo extends Component {
    render() {
        return (<Link to={"/" + this.props.id}>{this.props.id}</Link>);
    }
}

export default Setups;