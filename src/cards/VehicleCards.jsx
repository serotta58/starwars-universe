import React from "react";

import { localizeNumeric } from './CardFuncs';
import './Cards.css'

const vehicleCards = ({universe}) => {
    // destructure the universe!
    const { vehicles } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())

    const cardList =
        [...vehicles.values()].map(data =>
            <VehicleCard key={data.url} vehicle={data} />);
    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>Vehicles</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
};

const VehicleCard = ({vehicle}) => {
    return (
        <div className='card grow'>
            <h2>{vehicle.name}</h2>
            <p>Crew: {localizeNumeric(vehicle.crew)}</p>
            <p>Passengers: {localizeNumeric(vehicle.passengers)}</p>
            <p>Class: {vehicle.vehicle_class}</p>
        </div>
    );
}

export default vehicleCards;