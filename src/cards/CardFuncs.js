import React from 'react';
import { Link } from 'react-router-dom';

export function localizeNumeric(origStr) {
    // Add commas to numeric string, unless NaN
    return isNaN(origStr) ? origStr : Number(origStr).toLocaleString();
}

export function romanize(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

export function keyFromUrl( url ) {
    const arr = url.split('/');
    const number = arr[arr.length - 1];
    return number;
}

export const FilmList = ({ films, universe }) => {
    if (!films.length) {
        return <div></div>;
    } else {
        return (
            <div className='film-list'>
                <h3 className='list-title'>Films:</h3>
                {
                    films.map(origUrl => (
                        <FilmLink key={origUrl} origUrl={origUrl}
                            universe={universe} />
                    ))
                }
            </div>
        );
    }
}

const FilmLink = ({ origUrl, universe }) => {
    const { films } = universe;
    const number = origUrl;
    const localUrl = '/films/' + number;
    const name = romanize(films.get(origUrl).episode_id)
        + ': ' + films.get(origUrl).title;
    return (
        <div className='film-link'>
            <Link to={localUrl}>{name}</Link>
        </div>
    );
}

export const CharacterList = ({ characters, universe, title }) => {
    title = title || 'Characters'
    if (!characters.length) {
        return <div></div>;
    } else {
        return (
            <div className='character-list'>
                <h3 className='list-title'>{title}:</h3>
                {
                    characters.map(origUrl => (
                        <PersonLink key={origUrl} origUrl={origUrl}
                            universe={universe} />
                    ))
                }
            </div>
        );
    }
}

const PersonLink = ({ origUrl, universe }) => {
    const { people } = universe;
    const number = origUrl;
    const localUrl = '/people/' + number;
    const name = people.get(origUrl).name;
    return (
        <div className='person-link'>
            <Link to={localUrl}>{name}</Link>
        </div>
    );
}

export const PlanetList = ({ planets, universe }) => {
    if (!planets.length) {
        return <div></div>;
    } else {
        return (
            <div className='planet-list'>
                <h3 className='list-title'>Planets:</h3>
                {
                    planets.map(origUrl => (
                        <PlanetLink key={origUrl} origUrl={origUrl}
                            universe={universe} />
                    ))
                }
            </div>
        );
    }
}

export const PlanetLink = ({ origUrl, universe, useSpan }) => {
    useSpan = useSpan || false;     // default is false
    if (origUrl === undefined || origUrl === null) {
        return useSpan ? <span>N/A</span> : <div>N/A</div>;
    }
    const { planets } = universe;
    const number = origUrl;
    const localUrl = '/planets/' + number;
    const name = planets.get(origUrl).name;
    if (useSpan) {
        return (
            <span className='planet-link'>
                <Link to={localUrl}>{name}</Link>
            </span>
        );
    } else {
        return (
            <div className='planet-link'>
                <Link to={localUrl}>{name}</Link>
            </div>
        );
    }
}

export const SpeciesList = ({ species, universe }) => {
    if (!species.length) {
        return <div></div>;
    } else {
        return (
            <div className='species-list'>
                <h3 className='list-title'>Species:</h3>
                {
                    species.map(origUrl => (
                        <SpeciesLink key={origUrl} origUrl={origUrl}
                            universe={universe} />
                    ))
                }
            </div>
        );
    }
}

export const SpeciesLink = ({ origUrl, universe }) => {
    const { species } = universe;
    const number = origUrl;
    const localUrl = '/species/' + number;
    const name = species.get(origUrl).name;
    return (
        <div className='species-link'>
            <Link to={localUrl}>{name}</Link>
        </div>
    );
}

export const StarshipList = ({ starships, universe }) => {
    if (!starships.length) {
        return <div></div>;
    } else {
        return (
            <div className='starships-list'>
                <h3 className='list-title'>Starships:</h3>
                {
                    starships.map(origUrl => (
                        <StarshipLink key={origUrl} origUrl={origUrl}
                            universe={universe} />
                    ))
                }
            </div>
        );
    }
}

const StarshipLink = ({ origUrl, universe }) => {
    const { starships } = universe;
    const number = origUrl;
    const localUrl = '/starships/' + number;
    const name = starships.get(origUrl).name;
    return (
        <div className='starship-link'>
            <Link to={localUrl}>{name}</Link>
        </div>
    );
}

export const VehicleList = ({ vehicles, universe }) => {
    if (!vehicles.length) {
        return <div></div>;
    } else {
        return (
            <div className='vehicles-list'>
                <h3 className='list-title'>Vehicles:</h3>
                {
                    vehicles.map(origUrl => (
                        <VehicleLink key={origUrl} origUrl={origUrl}
                            universe={universe} />
                    ))
                }
            </div>
        );
    }
}

const VehicleLink = ({ origUrl, universe }) => {
    const { vehicles } = universe;
    const number = origUrl;
    const localUrl = '/vehicles/' + number;
    const name = vehicles.get(origUrl).name;
    return (
        <div className='vehicle-link'>
            <Link to={localUrl}>{name}</Link>
        </div>
    );
}