import React from 'react';

import './Cards.css'

const planetCard = ({planet}) => {
    return (
        <div className='card grow'>
            <h2>{planet.name}</h2>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
        </div>
    );
}

export default planetCard;