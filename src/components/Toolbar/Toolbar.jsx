import React from 'react';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Toolbar.css';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className='toolbar__logo'><a href="/">Star Wars Universe</a></div>
            <div className='toolbar__navigation-items'>
                <ul>
                    <li><a href="/">Films</a></li>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Planets</a></li>
                    <li><a href="/">Species</a></li>
                    <li><a href="/">Starships</a></li>
                    <li><a href="/">Vehicles</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;