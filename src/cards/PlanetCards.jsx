import React from "react";

import './Cards.css'

const planetCards = ({universe}) => {
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
    return (
        <div className='card grow'>
            <h2>{planet.name}</h2>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
        </div>
    );
}

export default planetCards;