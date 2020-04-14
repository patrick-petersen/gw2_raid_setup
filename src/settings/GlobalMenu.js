import React, {Component} from 'react';

import './GlobalMenu.scss';

class GlobalMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: "All",
        };

        this.clickOn = this.clickOn.bind(this);
    }

    clickOn(menu) {
        return () => {
            console.debug("clicked menu");
            this.props.clickCallback(menu);
        };
    }

    render() {
        const menuItems = this.props.menuItems;
        return (
            <div className="menu">
                {
                    menuItems.map((value) => {
                        return (<span className={"menu-item"}
                                        onClick={this.clickOn(value)}
                                        key={value}>{value}</span>);
                    })
                }
            </div>
        );
    }
}

export default GlobalMenu;
