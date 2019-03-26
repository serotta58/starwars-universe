import React from 'react';

import './Cards.css'

const speciesCard = ({species}) => {
    return (
        <div className='card grow'>
            <h2>{species.name}</h2>
            <p>Classification: {species.classification}</p>
            <p>Language: {species.language}</p>
        </div>
    );
}

export default speciesCard;