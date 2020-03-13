import React, {Component} from 'react';
import ItemIcon from "../helper/ItemIcon";


import './Boss.css';

class Boss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSetup: 0,
            setupSelection: false,
        };

        this.children = React.Children.map(this.props.children, child => {
            const otherProps = Object.assign({onClick: this.childClick(child.key)}, child.props);

            return React.cloneElement(
                child,
                otherProps
            );
        });

        this.openSetupSelect = this.openSetupSelect.bind(this);
        this.selectSetup = this.selectSetup.bind(this);
        this.childClick = this.childClick.bind(this);
    }

    openSetupSelect() {
        console.log("openSelect");
        this.setState({
            setupSelection: true
        });

        this.children.forEach(child => {
            child.setActive(true)
        });
    }

    selectSetup(setupKey) {
        console.log("selected: ", setupKey);
        this.setState({
            setupSelection: false,
            activeSetup: setupKey
        });

        this.children.forEach(child => {
            this.props.children.forEach(child => {
                child.setActive(child.key === this.state.activeSetup)
            });

        });
    }

    childClick(setupKey) {
        return (() => {
            console.log("childClick: ", setupKey);
            if(this.state.setupSelection) {
                this.selectSetup(setupKey)
            }
            else {
                this.openSetupSelect();
            }
        }).bind(this)
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className={"boss"}>
                {this.props.iconMiniId
                    ? <ItemIcon itemId={this.props.iconMiniId} />
                    : null
                }
                <span className={"boss-name"}>Boss: {this.props.name}</span>
                {this.children}
            </section>
        )
    }
}

export default Boss;