import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';

const backdrop = props => (
    <div className='backdrop' onClick={props.click} />
);

backdrop.propTypes = {
    click: PropTypes.func.isRequired
}

export default backdrop;