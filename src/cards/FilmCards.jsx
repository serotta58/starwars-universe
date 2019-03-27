import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

import {
    fullUrlFromPath, romanize, CharacterList, PlanetList,
    SpeciesList, StarshipList, VehicleList } from './CardFuncs';
import './Cards.css'

const FilmPage = ({ universe }) => {
    return (
        <Switch>
            <Route exact path='/films' render={() => (<FilmCards universe={universe} />)} />
            <Route path='/films/:number' render={
                ({ match }) => (<FilmDetail match={match} universe={universe} />)
            } />
        </Switch>
    );
};

const FilmCards = ({ universe }) => {
    // destructure the universe!
    const { films } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())
    const cardList =
        [...films.values()].map(data =>
            <FilmCard key={data.url} film={data} />);
    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>Films</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
}

const FilmCard = ({ film }) => {
    const arr = film.url.split('/');
    const number = arr[arr.length - 2];
    const localUrl = '/films/' + number;
    return (
        <Link to={localUrl} className='card grow'>
            <h2>{film.title}</h2>
            <p>Episode {romanize(film.episode_id)}</p>
            <p>Director: {film.director}</p>
        </Link>
    );
}

const FilmDetail = ({ match, universe }) => {
    const detailUrl = fullUrlFromPath(match.url);
    // destructure the universe!
    const { films } = universe;
    const film = films.get(detailUrl);
    return (
        <div className='detail'>
            <h1>{film.title}</h1>
            <h2>Episode: {romanize(film.episode_id)}</h2>
            <pre>{film.opening_crawl}</pre>
            <h3>Director: {film.director}</h3>
            <h3>Producer: {film.producer}</h3>
            <h3>Release Date: {film.release_date}</h3>
            <CharacterList characters={film.characters}
                universe={universe} />
            <PlanetList planets={film.planets}
                universe={universe} />
            <SpeciesList species={film.species}
                universe={universe} />
            <StarshipList starships={film.starships}
                universe={universe} />
            <VehicleList vehicles={film.vehicles}
                universe={universe} />
        </div>
    );
}

export default FilmPage;