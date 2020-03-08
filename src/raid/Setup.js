import React, {Component} from 'react';

import './Setup.css';

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className={"setup"}>
                <div className={"setup-name"}>
                    <h3>Setup: {this.props.name}</h3>
                </div>
                <div className={"setup-roles"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Setup;