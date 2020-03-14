import React, {Component} from 'react';
import ItemIcon from "../helper/ItemIcon";


import './Boss.css';
import SetupSelector from "./SetupSelector";
import HistoryManager from "../helper/HistoryManager";

class Boss extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <section className={"boss"}>
                {this.props.iconMiniId
                    ? <ItemIcon itemId={this.props.iconMiniId} />
                    : null
                }
                <span className={"boss-name"}>Boss: {this.props.name}</span>
                <SetupSelector bossId={this.props.bossId}>
                    {this.props.children}
                </SetupSelector>
            </section>
        )
    }
}

export default Boss;