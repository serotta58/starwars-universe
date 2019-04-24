import React from 'react';
import PropTypes from 'prop-types';

import './DrawerToggleBtn.css';

// Hamburger menu toggle button
// There are many other ways to create this.
// See: https://css-tricks.com/three-line-menu-navicon/
// The easiest is to use the unicode symbol &#9776; for trigram heaven ☰, but
// then you are stuck with the design (e.g.- too thick with the current font)
// and it may appear fuzzy on some displays.
// Font Awesome has some nice options if that font icon set were loaded
// for other icons, but not worth the fetch time just for this.
const drawerToggleBtn = props => (
    <button className='toggle-button' onClick={props.click} alt="menu">
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
    </button>
);

drawerToggleBtn.propTypes = {
    click: PropTypes.func.isRequired
}

export default drawerToggleBtn;