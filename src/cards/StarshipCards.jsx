import React from "react";

import { localizeNumeric } from './CardFuncs';
import './Cards.css'

const starshipCards = ({universe}) => {
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
    return (
        <div className='card grow'>
            <h2>{starship.name}</h2>
            <p>Crew: {localizeNumeric(starship.crew)}</p>
            <p>Passengers: {localizeNumeric(starship.passengers)}</p>
            <p>Class: {starship.starship_class}</p>
        </div>
    );
}

export default starshipCards;