import {Component} from "react";

class GenericSetup extends Component {
    render() {

        return (
            <div className={"content"}>
                {this.props.children}
            </div>
        );

    }
}

export default GenericSetup;