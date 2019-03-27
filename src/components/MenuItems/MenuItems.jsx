import React from 'react';

import { Link } from 'react-router-dom';

const menuItems = props => (
    <ul>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/people">Characters</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/species">Species</Link></li>
        <li><Link to="/starships">Starships</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
    </ul>
);

export default menuItems;