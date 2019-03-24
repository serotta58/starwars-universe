import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = (props.show) ? 'side-drawer open' : 'side-drawer';
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Films</a></li>
                <li><a href="/">People</a></li>
                <li><a href="/">Planets</a></li>
                <li><a href="/">Species</a></li>
                <li><a href="/">Starships</a></li>
                <li><a href="/">Vehicles</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;