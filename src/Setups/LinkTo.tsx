import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

type LinkProps = {
    id: number
}

class LinkTo extends Component<LinkProps> {
    render() {
        return (<Link to={"/" + this.props.id}>{this.props.id}</Link>);
    }
}

export default LinkTo;