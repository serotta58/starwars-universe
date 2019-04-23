let fs = require('fs');
let axios = require('axios');

const urls = [
  'https://swapi.co/api/films/',
  'https://swapi.co/api/people/',
  'https://swapi.co/api/planets/',
  'https://swapi.co/api/species/',
  'https://swapi.co/api/starships/',
  'https://swapi.co/api/vehicles/'
];

loadAndSaveUniverseData = async () => {
  try {
    const [films, people, planets, species, starships, vehicles] = await Promise.all(
      urls.map(url => loadArrayOfObjects(url))
    );
    const universe = { films, people, planets, species, starships, vehicles };
    const jsonData = JSON.stringify(universe);
    // Shorten all the urls to just the index number to shrink the file
    // Thus:
    //    'https://swapi.co/api/people/15/'
    // becomes just
    //    '15'
    const shorterData = jsonData.replace(
      /https:\/\/swapi.co\/api\/(films|people|planets|species|starships|vehicles)\/(\d+)\//g,
      '$2');

    fs.writeFile("./public/universe.json", shorterData, function(err) {
      if (err) {
        console.error(err);
      }
    });
  } catch (error) {
    const errorString = error.name + ': ' + error.message;
    console.error(errorString);
  }
}

loadArrayOfObjects = async (url) => {
  const urlSplit = url.split('/');
  const dataType = urlSplit[urlSplit.length - 2];
  let arr = [];
  let reportedCount = 0;
  let nextUrl = url;
  // read each successive page until no more
  do {
    try {
      const response = await axios.get(nextUrl);
      const jsonObj = response.data;
      reportedCount = jsonObj.count;

      // Iterate through the objects on this page and add them to the array
      jsonObj.results.forEach(element => arr.push(element));

      nextUrl = jsonObj.next;
    } catch (error) {
      console.error(error);
      nextUrl = null;
    }
  } while (nextUrl);
  // Remove bulky unnecessary properties
  arr.forEach(obj => {
    delete obj.created;
    delete obj.edited;
  })
  // Sort the array on the appropriate field
  switch (dataType) {
    case 'films':
      arr.sort((a, b) => a.episode_id - b.episode_id);
      break;
    default:
      arr.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  console.log('Processed', dataType);

  if (arr.length !== reportedCount) {
    console.error('Expected: ', reportedCount, ' Got: ', arr.length, ' for ', url)
  }
  return arr;
}

loadAndSaveUniverseData();
