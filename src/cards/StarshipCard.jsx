import React from 'react';

import './Cards.css'
import { localizeNumeric } from './CardFuncs';

const starshipCard = ({starship}) => {
    return (
        <div className='card grow'>
            <h2>{starship.name}</h2>
            <p>Crew: {localizeNumeric(starship.crew)}</p>
            <p>Passengers: {localizeNumeric(starship.passengers)}</p>
            <p>Class: {starship.starship_class}</p>
        </div>
    );
}

export default starshipCard;