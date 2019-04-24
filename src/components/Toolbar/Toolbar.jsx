import React from 'react';
import PropTypes from 'prop-types';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import MenuItems from '../MenuItems/MenuItems';
import { Link } from 'react-router-dom';

import './Toolbar.css';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className='toolbar__logo'><Link to="/">Star Wars Universe</Link></div>
            <div className='toolbar__navigation-items'>
                <MenuItems />
            </div>
        </nav>
    </header>
);

toolbar.propTypes = {
    drawerClickHandler: PropTypes.func.isRequired
}
export default toolbar;