import * as React from "react";
import functions from "./helper/functions";
import Sidebar from "./settings/Sidebar";
import NamedSetup from "./Setups/NamedSetup";
import "./Setups.scss";
import {
    HashRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import * as RaidSetup from "./Setups/SetupConfigs/RaidSetup";

//Setups:
import Week18 from "./Setups/SetupConfigs/Week18";
import Week20 from "./Setups/SetupConfigs/Week20";
import Week47 from "./Setups/SetupConfigs/Week47";
import FullComp_202011 from "./Setups/SetupConfigs/FullComp_2020-11";
import Marvin from "./Setups/SetupConfigs/Marvin";
import DhuumCM from "./Setups/SetupConfigs/DhuumCM";
import QadimCC from "./Setups/SetupConfigs/QadimCC";

import WeeklySetup from "./Setups/WeeklySetup";
import SetupRenderer from "./Setups/SetupRenderer";
import League01 from "./Setups/SetupConfigs/League01";
import FullComp_202007 from "./Setups/SetupConfigs/FullComp_2020-07";
import FullComp_202012 from "./Setups/SetupConfigs/FullComp_2020-12";
import FullComp_202101 from "./Setups/SetupConfigs/FullComp_2021-01";
import FullComp_202102 from "./Setups/SetupConfigs/FullComp_2021-02";
import FullComp_202105 from "./Setups/SetupConfigs/FullComp_2021-05";

interface RouteParams {
    week: string,
    year: string,
}
//abstract class a {};
const currentWeek = functions.getWeekNumberOfNextMonday();
const currentYear = functions.getYearNumberOfNextMonday();

type weeklySetupType = {year: number, week: number, setup: RaidSetup.RaidSetup<any>};

const weeklySetups : weeklySetupType[] = [
    {
        year: 2020,
        week: 17,
        setup: Marvin,
    },
    {
        year: 2020,
        week: 18,
        setup: Week18,
    },
    {
        year: 2020,
        week: 20,
        setup: Week20,
    },
    {
        year: 2020,
        week: 47,
        setup: Week47,
    },
];

type defaultSetupsType = {startYear: number, startWeek: number, lastYear: number, lastWeek: number, setup: RaidSetup.RaidSetup<any>};

const defaultSetups : defaultSetupsType[] = [
    {
        startYear: 2020,
        startWeek: 0,
        lastYear: 2020,
        lastWeek: 46,
        setup: FullComp_202011
    },
    {
        startYear: 2020,
        startWeek: 47,
        lastYear: 2020,
        lastWeek: 52,
        setup: FullComp_202012
    },
    {
        startYear: 2021,
        startWeek: 1,
        lastYear: 2021,
        lastWeek: 2,
        setup: FullComp_202101
    },
    {
        startYear: 2021,
        startWeek: 3,
        lastYear: 2021,
        lastWeek: 18,
        setup: FullComp_202102
    },
    {
        startYear: 2021,
        startWeek: 19,
        lastYear: 2025,
        lastWeek: 999,
        setup: FullComp_202105
    },
]


const weeklySetupsIndex : {[id: number]: {[id: number]: weeklySetupType}} = {};
weeklySetups.forEach((value) => {
    if(typeof(weeklySetupsIndex[value.year]) === "undefined") {
        weeklySetupsIndex[value.year] = [];
    }
    weeklySetupsIndex[value.year][value.week] = value;
});

type NamedSetupType = {
    name: string,
    shortcut: string,
    setup: RaidSetup.RaidSetup<any>,
}

const namedSetups : NamedSetupType[] = [
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
    {
        name: "Silver League",
        shortcut: "league",
        setup: League01,
    },
    {
        name: "New Setups",
        shortcut: "new",
        setup: FullComp_202007,
    },
];

const namedSetupsIndex : {[id: string]: NamedSetupType} = {};
namedSetups.forEach((value: NamedSetupType) => {
    namedSetupsIndex[value.shortcut] = value;
});


type SetupsProps = {

}
type SetupsState = {
    big: boolean,
    bigTime: number
}

class Setups extends React.Component<SetupsProps, SetupsState> {
    constructor(props : SetupsProps) {
        super(props);

        this.state = {
            big: false,
            bigTime: Date.now(),
        };
        this.toggleBig = this.toggleBig.bind(this);
        this.customSetupRenderer = this.customSetupRenderer.bind(this);
        this.getSetupForYearWeek = this.getSetupForYearWeek.bind(this);
        this.AutomatedSetup = this.AutomatedSetup.bind(this);
        this.DefaultSetup = this.DefaultSetup.bind(this);
    }

    toggleBig() : void {
        console.log("toggle big");
        this.setState({
            big: !this.state.big,
            bigTime: Date.now(),
        })
    }

    customSetupRenderer(params: RaidSetup.RaidSetup<any>) : JSX.Element {
        return <SetupRenderer big={this.state.big} bigTime={this.state.bigTime} {... params} />;
    }

    getSetupForYearWeek(year: number, week: number) : JSX.Element {
        console.log("setupForId", year, week);
        if (Object.prototype.hasOwnProperty.call(weeklySetupsIndex, year) &&
            Object.prototype.hasOwnProperty.call(weeklySetupsIndex[year], week)
        ) {
            console.log("weeklySetup");
            return this.customSetupRenderer(weeklySetupsIndex[year][week].setup);
        }
        else {
            console.log("defaultSetup");
            for (const setup of defaultSetups) {
                if (setup.startWeek <= week && setup.lastWeek >= week &&
                    setup.startYear <= year && setup.lastYear >= year) {
                    return this.customSetupRenderer(setup.setup);
                }
            }
            return this.customSetupRenderer(FullComp_202012);
        }
    }
    AutomatedSetup() : JSX.Element {
        const params = useParams<RouteParams>();

        const week = parseInt(params.week);
        const year = parseInt(params.year);

        console.log("autoId", week, year);
        return (
            <WeeklySetup year={year} week={week}>
                {this.getSetupForYearWeek(year, week)}
            </WeeklySetup>
        );
    }

    DefaultSetup() : JSX.Element {
        const week = currentWeek;
        const year = currentYear;

        return (
            <WeeklySetup year={year} week={week}>
                {this.getSetupForYearWeek(year, week)}
            </WeeklySetup>
        );
    }
    render() : JSX.Element {
        return (
            <div className={"body"}>
                <Router>
                    <Sidebar currentWeek={currentWeek}
                             namedSetups={namedSetups}
                             weeklySetups={weeklySetups}
                             toggleBigCallback={this.toggleBig}
                    />
                    <Switch>
                        {weeklySetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.year+'/'+setup.week}
                                children={<WeeklySetup year={setup.year} week={setup.week}>
                                    {this.customSetupRenderer(setup.setup)}
                                </WeeklySetup>}
                            />))
                        }
                        {namedSetups.map((setup, index) => (
                            <Route
                                key={index}
                                path={'/'+setup.shortcut}
                                children={<NamedSetup name={setup.name}>
                                    {this.customSetupRenderer(setup.setup)}
                                </NamedSetup>}
                            />))
                        }
                        <Route path="/:year/:week" children={<this.AutomatedSetup />} />
                        <Route>
                            <this.DefaultSetup />
                        </Route>
                    </Switch>
                </Router>
            </div>);
    }

}
export default Setups;