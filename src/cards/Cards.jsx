import React from "react";
import FilmCard from './FilmCard';
import PersonCard from './PersonCard';
import PlanetCard from './PlanetCard';

const cards = ({ dataMap }) => {
    // convert map of url key, json data pairs into an array of json data
    // const arr = Array.from(dataMap.values());   // alternate form
    const arr = [...dataMap.values()];     // using spread notation

    // Get the type of data from the url: eg. .../films/1/ is films
    const urlArray = arr[0].url.split('/');
    const dataType = urlArray[urlArray.length - 3];

    switch (dataType) {
        case 'films':
            arr.sort((a, b) => a.episode_id - b.episode_id);
            break;
        case 'people':
        case 'planets':
            arr.sort((a, b) => {
                let aName = a.name.toUpperCase();
                let bName = b.name.toUpperCase();
                if (aName < bName) return -1;
                else if (aName > bName) return 1;
                else return 0;
            });
            break;

        default:
            break;
    }

    return (
        <div>
            {
                arr.map(data => {
                    switch (dataType) {
                        case 'films':
                            return <FilmCard key={data.url} film={data} />;
                        case 'people':
                            return <PersonCard key={data.url} person={data} />;
                        case 'planets':
                            return <PlanetCard key={data.url} planet={data} />;
                        default:
                            return null;
                    }
                })
            }
        </div>
    );
};

export default cards;