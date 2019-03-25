import React from 'react';

import {romanize} from './romanize';
import './Cards.css'

const filmCard = ({film}) => {
    return (
        <div className='card grow'>
            <h2>{film.title}</h2>
            <p>{romanize(film.episode_id)}</p>
            <p>{film.director}</p>
        </div>
    );
}

export default filmCard;