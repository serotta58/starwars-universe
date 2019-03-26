import React from 'react';

import './Cards.css'
import { localizeNumeric } from './CardFuncs';

const vehicleCard = ({vehicle}) => {
    return (
        <div className='card grow'>
            <h2>{vehicle.name}</h2>
            <p>Crew: {localizeNumeric(vehicle.crew)}</p>
            <p>Passengers: {localizeNumeric(vehicle.passengers)}</p>
            <p>Class: {vehicle.vehicle_class}</p>
        </div>
    );
}

export default vehicleCard;