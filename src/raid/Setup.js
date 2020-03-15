import React, {Component} from 'react';

import './Setup.css';
import HistoryManager from "../helper/HistoryManager";

class Setup extends Component {
    static setupStates = ["main-setup", "backup-setup", "missing-setup"];

    constructor(props) {
        super(props);
        this.state = {
            setupState: Setup.setupStates[0],
        };

        this.cloneChildren = this.cloneChildren.bind(this);
        this.onRoleChanged = this.onRoleChanged.bind(this);

        this.children = this.cloneChildren();
    }

    cloneChildren() {
        let getSelectedPlayer = HistoryManager.getInstance().getPlayerSettings(this.props.bossId);

        return React.Children.map(this.props.children, (child, index) => {
            let props = Object.assign({}, child.props);
            Object.assign(props, {
                bossId: this.props.bossId,
                onChange: this.onRoleChanged(index),
                selectedPlayer: getSelectedPlayer(index),
                roleNumber: index,
            });

            return React.cloneElement(child, props);
        });
    }

    onRoleChanged(roleNumber) {
        return (value) => {
            //TODO
            console.log("role changed value", roleNumber, value);
        }
    }

    render() {
        return (
            <div className={"setup-roles"}>
                {this.children}
            </div>
        )
    }
}

export default Setup;