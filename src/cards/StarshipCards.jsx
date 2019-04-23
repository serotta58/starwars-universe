import React from "react";
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import {
    keyFromUrl, CharacterList, localizeNumeric, FilmList } from './CardFuncs';
import './Cards.css'

const StarshipPage = ({ universe }) => {
    return (
        <Switch>
            <Route exact path='/starships' render={() => (<StarshipCards universe={universe} />)} />
            <Route path='/starships/:number' render={
                ({ match }) => (<StarshipDetail match={match} universe={universe} />)
            } />
            <Redirect to='/starships' />
        </Switch>
    );
};

const StarshipCards = ({universe}) => {
    // destructure the universe!
    const { starships } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())

    const cardList =
        [...starships.values()].map(data =>
            <StarshipCard key={data.url} starship={data} />);
    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>Starships</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
};

const StarshipCard = ({starship}) => {
    const number = starship.url;
    const localUrl = '/starships/' + number;
    return (
        <Link to={localUrl} className='card grow'>
            <h2>{starship.name}</h2>
            <p>Class: {starship.starship_class}</p>
            <p>Crew: {localizeNumeric(starship.crew)}</p>
            <p>Passengers: {localizeNumeric(starship.passengers)}</p>
        </Link>
    );
}

const StarshipDetail = ({ match, universe }) => {
    const detailKey = keyFromUrl(match.url);
    // destructure the universe!
    const { starships } = universe;
    const starship = starships.get(detailKey);
    if (!starship) {
        return <Redirect to='/starships' />;        
    }
    return (
        <div className='detail'>
            <h1>{starship.name}</h1>
            <h2>Class: {starship.starship_class}</h2>
            <h3>Model: {starship.model}</h3>
            <h3>Crew: {localizeNumeric(starship.crew)}</h3>
            <h3>Passengers: {localizeNumeric(starship.passengers)}</h3>
            <h3>Cargo Capacity: {localizeNumeric(starship.cargo_capacity)}</h3>
            <h3>Length: {localizeNumeric(starship.length)}</h3>
            <h3>Sublight Speed (MGLT): {localizeNumeric(starship.MGLT)}</h3>
            <h3>Hyperdrive Rating: {starship.hyperdrive_rating}</h3>
            <h3>Max Atmosphering Speed: {localizeNumeric(starship.max_atmosphering_speed)}</h3>
            <h3>Consumables: {starship.consumables}</h3>
            <h3>Manufacturer: {starship.manufacturer}</h3>
            <h3>Cost (credits): {localizeNumeric(starship.cost_in_credits)}</h3>
            <FilmList films={starship.films}
                universe={universe} />
            <CharacterList characters={starship.pilots} title='Pilots'
                universe={universe} />
        </div>
    );
}

export default StarshipPage;