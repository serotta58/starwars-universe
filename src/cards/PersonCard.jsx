import React from 'react';

import './Cards.css'

const personCard = ({person}) => {
    return (
        <div className='card grow'>
            <h2>{person.name}</h2>
            <p>{person.gender}</p>
            <p>{person.height} cm</p>
        </div>
    );
}

export default personCard;