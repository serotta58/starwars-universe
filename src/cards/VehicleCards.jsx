import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

import {
    fullUrlFromPath, CharacterList, FilmList, localizeNumeric
} from './CardFuncs';
import './Cards.css'

const VehiclePage = ({ universe }) => {
    return (
        <Switch>
            <Route exact path='/vehicles' render={() => (<VehicleCards universe={universe} />)} />
            <Route path='/vehicles/:number' render={
                ({ match }) => (<VehicleDetail match={match} universe={universe} />)
            } />
        </Switch>
    );
};

const VehicleCards = ({ universe }) => {
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

const VehicleCard = ({ vehicle }) => {
    const arr = vehicle.url.split('/');
    const number = arr[arr.length - 2];
    const localUrl = '/vehicles/' + number;
    return (
        <Link to={localUrl} className='card grow'>
            <h2>{vehicle.name}</h2>
            <p>Crew: {localizeNumeric(vehicle.crew)}</p>
            <p>Passengers: {localizeNumeric(vehicle.passengers)}</p>
            <p>Class: {vehicle.vehicle_class}</p>
        </Link>
    );
}

const VehicleDetail = ({ match, universe }) => {
    const detailUrl = fullUrlFromPath(match.url);
    // destructure the universe!
    const { vehicles } = universe;
    const vehicle = vehicles.get(detailUrl);
    return (
        <div className='detail'>
            <h1>{vehicle.name}</h1>
            <h2>Class: {vehicle.vehicle_class}</h2>
            <h3>Model: {vehicle.model}</h3>
            <h3>Crew: {localizeNumeric(vehicle.crew)}</h3>
            <h3>Passengers: {localizeNumeric(vehicle.passengers)}</h3>
            <h3>Cargo Capacity: {localizeNumeric(vehicle.cargo_capacity)}</h3>
            <h3>Length: {localizeNumeric(vehicle.length)}</h3>
            <h3>Max Atmosphering Speed: {localizeNumeric(vehicle.max_atmosphering_speed)}</h3>
            <h3>Consumables: {vehicle.consumables}</h3>
            <h3>Manufacturer: {vehicle.manufacturer}</h3>
            <h3>Cost (credits): {localizeNumeric(vehicle.cost_in_credits)}</h3>
            <FilmList films={vehicle.films}
                universe={universe} />
            <CharacterList characters={vehicle.pilots} title='Pilots'
                universe={universe} />
        </div>
    );
}

export default VehiclePage;