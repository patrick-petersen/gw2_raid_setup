import LinkTo from "./LinkTo";
import {Component} from "react";
import functions from "../helper/functions";
import GenericSetup from "./GenericSetup";

type WeeklySetupProps = {
    year: number,
    week: number,
}

class WeeklySetup extends Component<WeeklySetupProps> {
    render() : JSX.Element {
        const week = this.props.week;
        const year = this.props.year;
        const d = functions.getDateOfISOWeek(week, year);
        const dayString =  d.getDate()  + "." + (d.getMonth()+1) + ".";

        const previousWeek = functions.getPreviousWeek(year, week);
        const previousYear = (week < previousWeek) ? year - 1 : year;
        const nextWeek = functions.getNextWeek(year, week);
        const nextYear = (week < nextWeek) ? year : year + 1;

        return <GenericSetup>
            <h3>
                <LinkTo year={previousYear} week={previousWeek}/>&nbsp;
                Setup for week: {week}-{year} ({dayString})&nbsp;
                <LinkTo year={nextYear} week={nextWeek}/>
            </h3>
            {this.props.children}
        </GenericSetup>;
    }
}

export default WeeklySetup;