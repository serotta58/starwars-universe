import React from 'react';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import MenuItems from '../MenuItems/MenuItems';
import './Toolbar.css';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className='toolbar__logo'><a href="/">Star Wars Universe</a></div>
            <div className='toolbar__navigation-items'>
                <MenuItems />
            </div>
        </nav>
    </header>
);

export default toolbar;