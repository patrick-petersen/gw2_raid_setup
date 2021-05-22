import * as React from 'react';
import './Wing.scss';
import * as RaidSetup from "../Setups/SetupConfigs/RaidSetup";

type WingProps = {
    wingValue: RaidSetup.Wing<any>,
}

class Wing extends React.Component<WingProps> {
    constructor(props : WingProps) {
        super(props);
        this.state = {
        }
    }

    render() : JSX.Element {
        console.debug("rendering wing")
        const wingValue = this.props.wingValue;
        return (
            <article className={"wing"}>
                <div className={"wing-name-wrapper"}><span className={"wing-name"}>Raid: {wingValue.name}</span></div>
                {this.props.children}
            </article>
        )
    }
}

export default Wing;