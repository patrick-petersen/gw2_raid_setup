import {Component} from "react";
import GenericSetup from "./GenericSetup";

type NamedSetupProps = {
    name: string
}

class NamedSetup extends Component<NamedSetupProps> {
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