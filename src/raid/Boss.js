import React, {Component} from 'react';

class Boss extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <section>
                <h2>Boss: {this.props.name}</h2>
                {this.props.children}
            </section>
        )
    }
}

export default Boss;