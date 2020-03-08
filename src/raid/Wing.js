import React, {Component} from 'react';

class Wing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <article>
                <h1>Raid: {this.props.name}</h1>
                {this.props.children}
            </article>
        )
    }
}

export default Wing;