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
        return (
            <section className={"boss"
            + (this.state.big?" big" : " small")}>
                {this.props.iconMiniId
                    ? <ItemIcon itemId={this.props.iconMiniId} />
                    : null
                }
                <span className={"boss-name"} onClick={this.toggleSize}>{this.props.name}</span>
                <SetupSelector bossId={this.props.bossId}>
                    {this.props.children}
                </SetupSelector>
            </section>
        )
    }
}

export default Boss;