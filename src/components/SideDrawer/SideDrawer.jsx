import React from 'react';
import PropTypes from 'prop-types';

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

sideDrawer.propTypes = {
    drawerClickHandler: PropTypes.func.isRequired
}
export default sideDrawer;