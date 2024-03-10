import * as React from 'react';
import ItemIcon from "../helper/ItemIcon";

import './Boss.scss';
import SetupSelector from "./SetupSelector";
import * as RaidSetup from "../Setups/SetupConfigs/Setups/RaidSetup";

interface ISetup {
    props : {setupValue: {name: string}}
}

type BossProps = {
    big: boolean,
    bigTime: number,
    bossValue: RaidSetup.Boss<any>,
    onChange: () => void,
    playerSettings: RaidSetup.PlayerSettings<any>,
    cheatString?: string,
    children: (ISetup | undefined)[],
}

type BossState = {
    big: boolean,
    bigTime: number
}

class Boss extends React.Component<BossProps, BossState> {

    constructor(props: BossProps) {
        super(props);
        this.state = {
            big: this.props.big,
            bigTime: Date.now(),
        };

        this.toggleSize = this.toggleSize.bind(this);
        this.getBig = this.getBig.bind(this);
    }

    toggleSize() : void {
        this.setState({
            big: !this.getBig(),
            bigTime: Date.now(),
        })
    }

    getBig() : boolean {
        return this.props.bigTime > this.state.bigTime ? this.props.big : this.state.big;
    }

    render() : JSX.Element {
        console.debug("render boss");
        const bossValue = this.props.bossValue;
        const hasIcon = Object.prototype.hasOwnProperty.call(bossValue, "iconMiniId");
        const big = this.getBig();
        return (
            <section className={"boss"
            + (big?" big" : " small")
            + (hasIcon?"":" no-icon")}>
                {bossValue.iconMiniId
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