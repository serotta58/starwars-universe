import React from "react";
import FilmCard from './FilmCard';
import PersonCard from './PersonCard';
import PlanetCard from './PlanetCard';
import SpeciesCard from './SpeciesCard';
import StarshipCard from './StarshipCard';
import VehicleCard from './VehicleCard';

import { ListType } from '../DisplayStates';

const cards = ({ listType, universe }) => {
    // destructure the universe!
    const { films, people, planets, species, starships, vehicles } = universe;
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())
    let cardList;
    let categoryTitle;
    switch (listType) {
        case ListType.Films:
            categoryTitle = 'Films';
            cardList = [...films.values()].map(data =>
                <FilmCard key={data.url} film={data} />);
            break;
        case ListType.People:
            categoryTitle = 'Films';
            cardList = [...people.values()].map(data =>
                <PersonCard key={data.url} person={data} />);
            break;
        case ListType.Planets:
            categoryTitle = 'Planets';
            cardList = [...planets.values()].map(data =>
                <PlanetCard key={data.url} planet={data} />);
            break;
        case ListType.Species:
            categoryTitle = 'Species';
            cardList = [...species.values()].map(data =>
                <SpeciesCard key={data.url} species={data} />);
            break;
        case ListType.Starships:
            categoryTitle = 'Starships';
            cardList = [...starships.values()].map(data =>
                <StarshipCard key={data.url} starship={data} />);
            break;
        case ListType.Vehicles:
            categoryTitle = 'Vehicles';
            cardList = [...vehicles.values()].map(data =>
                <VehicleCard key={data.url} vehicle={data} />);
            break;
        default:
            categoryTitle = '???';
            break;
    }

    return (
        <div>
            <div className='category-titlebar'>
                <h1 className='card'>{categoryTitle}</h1>
            </div>
            <div className='card-list'>
                {cardList}
            </div>
        </div>
    );
};

export default cards;