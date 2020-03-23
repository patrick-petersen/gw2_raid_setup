import React, {Component} from 'react';
import './Wing.css';
import Boss from './Boss';

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
                {
                    this.props.bosses.map((bossValue, bossIndex) => {
                            return (<Boss {... bossValue} key={bossIndex}></Boss>);
                        }
                    )}
            </article>
        )
    }
}

export default Wing;