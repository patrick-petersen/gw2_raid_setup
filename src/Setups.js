import React, {Component} from "react";
import FullComp from "./Setups/FullComp";
import Marvin from "./Setups/Marvin";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class Setups extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/">
                    <FullComp />
                </Route>
                <Route path="/marvin">
                    <Marvin />
                </Route>
                <Route>
                    <FullComp />
                </Route>
            </Switch>
            </Router>);
    }
}

export default Setups;