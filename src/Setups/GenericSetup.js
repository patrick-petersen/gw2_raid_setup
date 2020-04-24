import React, {Component} from "react";
import functions from "../helper/functions";

import LinkTo from "./LinkTo";
import FullComp from "./SetupConfigs/FullComp";

class GenericSetup extends Component {
    render() {
        const week = this.props.id;
        const d = functions.getDateOfISOWeek(week, 2020);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";

        return (
            <div className={"body"}>
                <div className={"content"}>
                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default GenericSetup;