import {Component} from "react";
import * as React from "react";
import functions from "../helper/functions";


class GenericSetup extends Component<{id: number}> {
    render() {
        const week = this.props.id;
        const d = functions.getDateOfISOWeek(week, 2020);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";

        return (
            <div className={"content"}>
                {this.props.children}
            </div>
        );

    }
}

export default GenericSetup;