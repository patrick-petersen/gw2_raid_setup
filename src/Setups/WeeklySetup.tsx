import LinkTo from "./LinkTo";
import {Component} from "react";
import functions from "../helper/functions";
import GenericSetup from "./GenericSetup";

type WeeklySetupProps = {
    year: number,
    week: number,
}

class WeeklySetup extends Component<WeeklySetupProps> {
    render() {
        const week = this.props.week;
        const year = this.props.year;
        const d = functions.getDateOfISOWeek(week, year);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";
        return <GenericSetup>
            <h3>
                <LinkTo year={year} week={week - 1}/> Setup for week: {week}-{year} ({dayString}) <LinkTo year={year} week={week - 1 + 2}/>
            </h3>
            {this.props.children}
        </GenericSetup>;
    }
}

export default WeeklySetup;