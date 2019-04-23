import React from "react";
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import {
    keyFromUrl, CharacterList, PlanetLink, FilmList } from './CardFuncs';
import './Cards.css'

const SpeciesPage = ({ universe }) => {
    return (
        <Switch>
            <Route exact path='/species' render={() => (<SpeciesCards universe={universe} />)} />
            <Route path='/species/:number' render={
                ({ match }) => (<SpeciesDetail match={match} universe={universe} />)
            } />
            <Redirect to='/species' />
        </Switch>
    );
};

const SpeciesCards = ({universe}) => {
    // destructure the universe!
    const { species } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())

    const cardList =
        [...species.values()].map(data =>
            <SpeciesCard key={data.url} species={data} />);
    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>Species</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
};

const SpeciesCard = ({species}) => {
    const number = species.url;
    const localUrl = '/species/' + number;
    return (
        <Link to={localUrl} className='card grow'>
            <h2>{species.name}</h2>
            <p>Classification: {species.classification}</p>
            <p>Language: {species.language}</p>
        </Link>
    );
}

const SpeciesDetail = ({ match, universe }) => {
    const detailKey = keyFromUrl(match.url);
    // destructure the universe!
    let { species } = universe;
    const allSpecies = species;
    species = allSpecies.get(detailKey);
    if (!species) {
        return <Redirect to='/species' />;
    }
    return (
        <div className='detail'>
            <h1>{species.name}</h1>
            <h2>Classification: {species.classification}</h2>
            <h2>Language: {species.language}</h2>
            <h3>Avg Height (cm): {species.average_height}</h3>
            <h3>Designation: {species.designation}</h3>
            <h3>Eye Colors: {species.eye_colors}</h3>
            <h3>Hair Colors: {species.hair_colors}</h3>
            <h3>Skin Colors: {species.skin_colors}</h3>

            <h3><span>Homeworld: </span>
                <PlanetLink origUrl={species.homeworld} universe={universe} useSpan={true} />
            </h3>

            <FilmList films={species.films}
                universe={universe} />
            <CharacterList characters={species.people}
                universe={universe} />
        </div>
    );
}

export default SpeciesPage;