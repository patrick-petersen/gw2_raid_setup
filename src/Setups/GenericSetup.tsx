import {Component} from "react";

class GenericSetup extends Component {
    render() : JSX.Element {
        return (
            <div className={"content"}>
                {this.props.children}
            </div>
        );

    }
}

export default GenericSetup;