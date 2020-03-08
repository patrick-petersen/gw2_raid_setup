import React, {Component} from 'react';

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                {this.props.children}
            </div>
        )
    }
}

export default Setup;