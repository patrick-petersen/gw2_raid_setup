import React, {Component} from 'react';
import ItemIcon from "../helper/ItemIcon";


import './Boss.css';

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
                {this.props.children}
            </section>
        )
    }
}

export default Boss;