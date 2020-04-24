import React, {Component} from "react";
import GenericSetup from "./GenericSetup";


class NamedSetup extends Component {
    render() {
        return <GenericSetup>
            <h3>
                Setup named: {this.props.name}
            </h3>
            {this.props.children}
        </GenericSetup>;
    }
}

export default NamedSetup;