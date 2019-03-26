import React from "react";

import './Cards.css'

const peopleCards = ({universe}) => {
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

const PersonCard = ({person}) => {
    return (
        <div className='card grow'>
            <h2>{person.name}</h2>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height} cm</p>
        </div>
    );
}

export default peopleCards;