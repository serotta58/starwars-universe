import React from "react";
import FilmCard from './FilmCard';
import PersonCard from './PersonCard';
import PlanetCard from './PlanetCard';

import { ListType } from '../DisplayStates';


// TODO: Move all downloaded data into a separate database module
// It will never change state once it is loaded, so no sense it 
// tying the App state to it.  Instead, the app should just concern
// itself with the list/detail mode, and which list or detail item
// is selected.
// The database object should take care of sorting the data appropriately
// (so it isn't needed here any more), and provide methods to access any
// specific record of any type by its URL.  This might extend to a general
// retrieval of lists of times by URL (e.g.- .../planets/) as well.
// This opens up the chance to make the database act in a caching mode
// instead of preloading everything.  The database could wait until
// something is asked for, and if it isn't in the cache then it would
// retrieve it from the web API.  That would speed the initial startup
// of the program.  Change the display in some way to notify user when
// the program is retrieving data from the web that might take time or fail.
// Keeping the data in a global object means that the data doesn't need to
// be passed down from the App object, just the state and list or item
// selection (could be by URL).

const cards = ({ listType, films, people, planets, species, starships, vehicles }) => {
    // convert map of url key, json data pairs into an array of json data
    // const arr = Array.from(dataMap.values());   // alternate form
    let arr;
    switch (listType) {
        case ListType.Films:
            arr = [...films.values()];
            break;
        case ListType.People:
            arr = [...people.values()];
            break;
        case ListType.Planets:
            arr = [...planets.values()];
            break;

        default:
            break;
    }

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