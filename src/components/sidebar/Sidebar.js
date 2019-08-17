import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="side">
            <ul className="side--features">
                <li>
                    <div><a href="">Test1</a></div>
                </li>
                <li>
                    <div><a href="#">Test2</a></div>
                </li>
                <li>
                    <div><a href="#">Test3</a></div>
                </li>
                <li>
                    <div><a href="#">Test4</a></div>
                </li>
                <li>
                    <div><a href="#">Test5</a></div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;