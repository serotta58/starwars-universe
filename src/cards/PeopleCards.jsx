import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

import {
    fullUrlFromPath, FilmList, PlanetLink, SpeciesList,
    StarshipList, VehicleList
} from './CardFuncs';
import './Cards.css'

const PeoplePage = ({ universe }) => {
    return (
        <Switch>
            <Route exact path='/people' render={() => (<PeopleCards universe={universe} />)} />
            <Route path='/people/:number' render={
                ({ match }) => (<PersonDetail match={match} universe={universe} />)
            } />
        </Switch>
    );
};

const PeopleCards = ({ universe }) => {
    // destructure the universe!
    const { people } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())
    const cardList =
        [...people.values()].map(data =>
            <PersonCard key={data.url} person={data} />);
    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>People</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
};

const PersonCard = ({ person }) => {
    const arr = person.url.split('/');
    const number = arr[arr.length - 2];
    const localUrl = '/people/' + number;
    return (
        <Link to={localUrl} className='card grow'>
            <h2>{person.name}</h2>
            <p>Gender: {person.gender}</p>
            <p>Height (cm): {person.height}</p>
        </Link>
    );
}

const PersonDetail = ({ match, universe }) => {
    const detailUrl = fullUrlFromPath(match.url);
    // destructure the universe!
    const { people } = universe;
    const person = people.get(detailUrl);
    return (
        <div className='detail'>
            <h1>{person.name}</h1>
            <h3>Gender: {person.gender}</h3>
            <h3>Height (cm): {person.height}</h3>
            <h3>Birth Year: {person.birth_year}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
            <h3>Eye Color: {person.eye_color}</h3>
            <h3>Skin Color: {person.skin_color}</h3>
            <h3>Mass (kg): {person.mass}</h3>
            <h3><span>Homeworld: </span>
                <PlanetLink origUrl={person.homeworld} universe={universe} useSpan={true} />
            </h3>
            <SpeciesList species={person.species}
                universe={universe} />
            <FilmList films={person.films}
                universe={universe} />
            <StarshipList starships={person.starships}
                universe={universe} />
            <VehicleList vehicles={person.vehicles}
                universe={universe} />
        </div>
    );
}

export default PeoplePage;