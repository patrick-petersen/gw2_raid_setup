import React, {Component} from 'react';
import './Wing.css';

class Wing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <article className={"wing"}>
                <div className={"wing-name-wrapper"}><span className={"wing-name"}>Raid: {this.props.name}</span></div>
                {this.props.children}
            </article>
        )
    }
}

export default Wing;