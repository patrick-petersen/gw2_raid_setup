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
        this.addSaveCallback = this.addSaveCallback.bind(this);
        this.saveChildren = this.saveChildren.bind(this);

        this.children = this.cloneChildren();

        this.saveCallbacks = [];

        this.props.saveCallback(this.saveChildren);
    }

    cloneChildren() {
        let getSelectedPlayer = HistoryManager.getInstance().getPlayerSettings(this.props.bossId);

        return React.Children.map(this.props.children, (child, index) => {
            let props = Object.assign({}, child.props);
            Object.assign(props, {
                bossId: this.props.bossId,
                addSaveCallback: this.addSaveCallback,
                selectedPlayer: getSelectedPlayer(index),
                roleNumber: index,
            });

            return React.cloneElement(child, props);
        });
    }

    addSaveCallback(callback) {
        this.saveCallbacks.push(callback);
    }

    saveChildren() {
        this.saveCallbacks.forEach(callback => {
            callback();
        });
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