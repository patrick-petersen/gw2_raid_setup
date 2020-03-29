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
        const wingValue = this.props.wingValue;
        return (
            <article className={"wing"}>
                <div className={"wing-name-wrapper"}><span className={"wing-name"}>Raid: {wingValue.name}</span></div>
                {
                    wingValue.bosses.map((bossValue, bossIndex) => {
                            return (<Boss bossValue={bossValue} playerSettings={this.props.playerSettings}
                                            onChange={this.props.onChange} key={bossValue.name}
                                            cheatString={JSON.stringify(bossValue)}></Boss>);
                        }
                    )}
            </article>
        )
    }
}

export default Wing;