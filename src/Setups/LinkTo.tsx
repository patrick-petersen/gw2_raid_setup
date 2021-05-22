import {Component} from "react";
import {Link} from "react-router-dom";

type LinkProps = {
    year: number,
    week: number
}

class LinkTo extends Component<LinkProps> {
    render() : JSX.Element {
        const content = (this.props.children ? this.props.children : this.props.week);
        return (<Link to={"/" + this.props.year + "/" + this.props.week}>{content}</Link>);
    }
}

export default LinkTo;