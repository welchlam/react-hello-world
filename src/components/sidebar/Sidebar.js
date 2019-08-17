import React from 'react';
import {connect} from "react-redux";
import './Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const listItems = this.props.features.map((item, index) =>
            <li key={index}>
                <div><a href="">{item.name}</a></div>
            </li>
        );

        return (
            <div className="side">
                <ul className="side--features">
                    {listItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { features } = state;
    return { features };
};

export default connect(
    mapStateToProps,
    null
)(Sidebar);
