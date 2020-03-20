import React, {Component} from "react";
import FullComp from "./Setups/FullComp";

class Setups extends Component {
    static _defaultSetup = 0;

    render() {
        const setup = Setups._defaultSetup;
        switch (setup) {
            default:
            case 0:
                return (<FullComp/>);
        }
    }
}

export default Setups;