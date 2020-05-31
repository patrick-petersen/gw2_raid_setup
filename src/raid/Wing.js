import React, {Component} from 'react';
import './Wing.scss';
import Boss from './Boss';

class Wing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.debug("rendering wing")
        const wingValue = this.props.wingValue;
        return (
            <article className={"wing"}>
                <div className={"wing-name-wrapper"}><span className={"wing-name"}>Raid: {wingValue.name}</span></div>
                {this.props.children}
            </article>
        )
    }
}

export default Wing;