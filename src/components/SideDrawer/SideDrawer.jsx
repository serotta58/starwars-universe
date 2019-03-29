import React from 'react';

import './SideDrawer.css'
import MenuItems from '../MenuItems/MenuItems';

const sideDrawer = props => {
    let drawerClasses = (props.show) ? 'side-drawer open' : 'side-drawer';
    return (
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <MenuItems />
        </nav>
    );
};

export default sideDrawer;