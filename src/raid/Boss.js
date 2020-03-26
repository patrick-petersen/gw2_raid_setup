import React, {Component} from 'react';
import ItemIcon from "../helper/ItemIcon";

import './Boss.css';
import SetupSelector from "./SetupSelector";

class Boss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            big: false,
        };

        this.toggleSize = this.toggleSize.bind(this);
    }

    toggleSize() {
        this.setState({
            big: !this.state.big,
        })
    }

    render() {
        const bossValue = this.props.bossValue;
        return (
            <section className={"boss"
            + (this.state.big?" big" : " small")}>
                {bossValue.iconMiniId
                    ? <ItemIcon itemId={bossValue.iconMiniId} />
                    : null
                }
                <span className={"boss-name"} onClick={this.toggleSize}>{bossValue.name}</span>
                <SetupSelector bossValue={bossValue} onChange={this.props.onChange} cheatString={JSON.stringify(bossValue)}
                               playerSettings={this.props.playerSettings}>
                </SetupSelector>
            </section>
        )
    }
}

export default Boss;