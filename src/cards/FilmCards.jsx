import React from "react";

import {romanize} from './romanize';
import './Cards.css'

const filmCards = ({universe}) => {
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
};

const FilmCard = ({film}) => {
    return (
        <div className='card grow'>
            <h2>{film.title}</h2>
            <p>Episode {romanize(film.episode_id)}</p>
            <p>Director: {film.director}</p>
        </div>
    );
}

export default filmCards;