import React, {Component} from 'react';
import ItemIcon from "../helper/ItemIcon";

import './Boss.scss';
import SetupSelector from "./SetupSelector";

class Boss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            big: this.props.big,
            bigTime: Date.now(),
        };

        this.toggleSize = this.toggleSize.bind(this);
        this.getBig = this.getBig.bind(this);
    }

    toggleSize() {
        this.setState({
            big: !this.getBig(),
            bigTime: Date.now(),
        })
    }

    getBig() {
        return this.props.bigTime > this.state.bigTime ? this.props.big : this.state.big;
    }

    render() {
        console.debug("render boss");
        const bossValue = this.props.bossValue;
        const hasIcon = bossValue.hasOwnProperty("iconMiniId");
        const big = this.getBig();
        return (
            <section className={"boss"
            + (big?" big" : " small")
            + (hasIcon?"":" no-icon")}>
                {hasIcon
                    ? <ItemIcon itemId={bossValue.iconMiniId} />
                    : null
                }
                <span className={"boss-name"} onClick={this.toggleSize}>{bossValue.name}</span>
                <SetupSelector bossValue={bossValue} onChange={this.props.onChange} cheatString={JSON.stringify(bossValue)}
                               playerSettings={this.props.playerSettings}>
                    {this.props.children}
                </SetupSelector>
            </section>
        )
    }
}

export default Boss;