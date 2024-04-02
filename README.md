# Star Wars Universe

[![Netlify Status](https://api.netlify.com/api/v1/badges/c319526a-b930-48e7-be54-b432ca3510c7/deploy-status)](https://app.netlify.com/sites/starwars-universe/deploys)

This single page React.js app loads the Star Wars data from [www.swapi.dev](https://www.swapi.dev) and then presents it in a browsable form with links between related items.  Category pages listing all items of that type, and individual detail pages are show.

> The data used to be hosted at [www.swapi.co].  It has been moved to swapi.dev according to the [new site](https://swapi.dev/about).  See more info at [SWAPI - Star Wars API Integrations](https://pipedream.com/apps/swapi).

## Deployed Versions

The older version deployed on [GitHub Pages](https://serotta58.github.io/starwars-universe/) loaded all the data from the [Star Wars API](https://www.swapi.dev/api/) when the web app is first loaded, or any time a page is refreshed in the browser.  This illustrates parallel asynchronous loading, progress display and a spinner to keep the user entertained during the long loading time (3-6 seconds on a fast connection, much longer on a slow mobile connection).

The newer working version is now deployed on [Netlify](https://starwars-universe.netlify.com/), and features a much much faster startup due to loading the API data during the build and compiling it into a single static JSON data file.  This will act similar to a statically generated blog site where the data is relatively static and thus only needs to be updated and baked into the compiled site whenever there is a change.

Compare the two example websites to see the amazing difference in startup speeds.  I measured these times for the web app and data to complete loading, or for a browser refresh.  (The 3G speeds were similated in Chrome developer mode.):

|          | Fast WiFi | Fast 3G | Slow 3G |
|---------:|:---------:|:-------:|:-------:|
|   Old:   |   3.4 sec | 7 sec   |  24 sec |
|   New:   |   0.2 sec | 2.2 sec |  8 sec  |
| Speedup: |    17 X ! |   3X    |   3 X   |

## Snappy Response

The main purpose of this exercise was to show how responsive a web app can be when it keeps the data in the browser and all page routing is done on the client side with no server interactions (i.e.- a single page app).  The initial download of all the data takes a fraction of a second with a fast connection, but after that, all the jumps between pages are nearly instantaneous since there is no need to wait for file retrievals over the Internet.

## Routing

- This makes use of the react-router-dom router, and illustrates both straight links (e.g.- to the /planets category page) and parameterized path links (e.g.- /planets/:number to match /planets/1, /planets/2...) to generate the detail pages with the appropriate data record.

- The original URL's from the API are used as keys for links and to retrieve data from the local store.  For example, [https://www.swapi.dev/api/planets/1/](https://www.swapi.dev/api/planets/1/), the original URL for the API JSON data is stored as the key to retrieve from the planets local store, but the local routing just uses the path, namely /planets/1/.  Since the JSON data links (e.g.- all the characters that were in a particular movie) are the original URLs, this is the logical key to use for navigating the data.

- Note the use of the react-router Link component styled as a summary card to allow clicking anywhere on the card to redirect to the associated detail page.  This is much cleaner than some roundabout solutions that are sometimes required such as triggering a component render through a change of state, and then routing from within the render routine.  All card clicks will always route to a different page, so there is no need for partial component renderings.  The Link simply replaces the div or button that normally would have been used to form the cards.