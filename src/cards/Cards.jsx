import React from "react";
import FilmCard from './FilmCard';
import PersonCard from './PersonCard';
import PlanetCard from './PlanetCard';

import { ListType } from '../DisplayStates';

const cards = ({ listType, films, people, planets, species, starships, vehicles }) => {
    // convert map of url key, json data pairs into an array of json data
    // [...dataMap.values()] is equivalent to Array.from(dataMap.values())
    let cardList;
    switch (listType) {
        case ListType.Films:
            cardList = [...films.values()].map(data =>
                <FilmCard key={data.url} film={data} />);
            break;
        case ListType.People:
            cardList = [...people.values()].map(data =>
                <PersonCard key={data.url} person={data} />);
            break;
        case ListType.Planets:
            cardList = [...planets.values()].map(data =>
                <PlanetCard key={data.url} planet={data} />);
            break;
        // case ListType.Species:
        //     cardList = [...species.values()].map(data =>
        //         <SpeciesCard key={data.url} species={data} />);
        //     break;
        // case ListType.Starships:
        //     cardList = [...starships.values()].map(data =>
        //         <StarshipCard key={data.url} starship={data} />);
        //     break;
        // case ListType.Vehicles:
        //     cardList = [...vehicles.values()].map(data =>
        //         <VehicleCard key={data.url} vehicle={data} />);
        //     break;
        default:
            break;
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            {cardList}
        </div>
    );
};

export default cards;