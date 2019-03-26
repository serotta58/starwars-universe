import React from "react";

import './Cards.css'

const speciesCards = ({universe}) => {
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
    return (
        <div className='card grow'>
            <h2>{species.name}</h2>
            <p>Classification: {species.classification}</p>
            <p>Language: {species.language}</p>
        </div>
    );
}

export default speciesCards;