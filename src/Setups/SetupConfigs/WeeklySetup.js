import LinkTo from "../LinkTo";
import React, {Component} from "react";
import functions from "../../helper/functions";
import GenericSetup from "../GenericSetup";


class WeeklySetup extends Component {
    render() {
        const week = this.props.id;
        const d = functions.getDateOfISOWeek(week, 2020);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";
        return <GenericSetup>
            <h3>
                <LinkTo id={week - 1}/> Setup for week: {week} ({dayString}) <LinkTo id={week - 1 + 2}/>
            </h3>
            {this.props.children}
        </GenericSetup>;
    }
}

export default WeeklySetup;