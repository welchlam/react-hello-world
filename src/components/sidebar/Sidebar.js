import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
    // const localFeatures = props.features;
    // localFeatures.push({
    //     id: 5,
    //     name: 'feature 5',
    //     detail: 'feature 5 detail'
    // });
    const listItems = props.features.map((item, index) =>
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

export default Sidebar;
