import React from "react";
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import {
    keyFromUrl, localizeNumeric, CharacterList, FilmList } from './CardFuncs';
import './Cards.css'

const PlanetsPage = ({ universe }) => {
    return (
        <Switch>
            <Route exact path='/planets' render={() => (<PlanetCards universe={universe} />)} />
            <Route path='/planets/:number' render={
                ({ match }) => (<PlanetDetail match={match} universe={universe} />)
            } />
            <Redirect to='/planets' />ç
        </Switch>
    );
};

const PlanetCards = ({universe}) => {
    // destructure the universe!
    const { planets } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())
    const cardList =
        [...planets.values()].map(data =>
            <PlanetCard key={data.url} planet={data} />);
    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>Planets</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
};

const PlanetCard = ({planet}) => {
    const number = planet.url;
    const localUrl = '/planets/' + number;
    return (
        <Link to={localUrl} className='card grow'>
            <h2>{planet.name}</h2>
            <p>Population: {localizeNumeric(planet.population)}</p>
            <p>Terrain: {planet.terrain}</p>
        </Link>
    );
}

const PlanetDetail = ({ match, universe }) => {
    const detailKey = keyFromUrl(match.url);
    // destructure the universe!
    const { planets } = universe;
    const planet = planets.get(detailKey);
    if (!planet) {
        return <Redirect to='/planets' />;
    }
    return (
        <div className='detail'>
            <h1>{planet.name}</h1>
            <h2>Population: {localizeNumeric(planet.population)}</h2>
            <h2>Terrain: {planet.terrain}</h2>
            <h3>Climate: {planet.climate}</h3>
            <h3>Diameter: {localizeNumeric(planet.diameter)}</h3>
            <h3>Surface Water (%): {planet.surface_water}</h3>
            <h3>Gravity: {planet.gravity}</h3>
            <h3>Orbital Period: {planet.orbital_period}</h3>
            <h3>Rotation Period: {planet.rotation_period}</h3>
            <FilmList films={planet.films}
                universe={universe} />
            <CharacterList characters={planet.residents} title='Residents'
                universe={universe} />
        </div>
    );
}

export default PlanetsPage;