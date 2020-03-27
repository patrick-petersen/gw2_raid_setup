import React, {Component} from 'react';

import './PlayerSelection.scss';

class PlayerSelection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: "All",
            selectionOpen:false,
        };

        this.openSelection = this.openSelection.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    openSelection() {
        this.setState({
            selectionOpen: true
        });

    }

    selectPlayer(player) {
        return () => {
            this.setState({
                selected: player,
                selectionOpen: false
            });
        }
        this.props.filterListCallback(this.filterList);
    }

    filterList(list) {
        return list;
    }

    render() {
        const {players} = this.props.playerSettings;
        return (
            <div className="players">
                {
                    this.state.selectionOpen
                        ?
                            [<span onClick={this.selectPlayer("All")}>All</span>, players.map((value) => {
                                return (<span onClick={this.selectPlayer(value)}>{value}</span>);
                            })]
                        : <span onClick={this.openSelection}>{this.state.selected}</span>

                }
            </div>
        );
    }
}

export default PlayerSelection;
