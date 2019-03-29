# Star Wars Universe

This single page React.js app loads the Star Wars data from www.swapi.co and then presents it in a browsable form with links between related items.  Category pages listing all items of that type, and individual detail pages are show.

## Snappy Response

The main purpose of this exercise was to show how responsive a web app can be when it keeps the data in the browser and all page routing is done on the client side with no server interactions (i.e.- a single page app).  The initial download of all the data takes a few seconds, but after that, all the jumps between pages are nearly instant since there is no need to wait for file retrievals over the Internet.

The initial startup time could be made much shorter through caching and/or background loading.  See the To-Do list below.

## Routing

- This makes use of the react-router-dom router, and illustrates both straight links (e.g.- to the /planets category page) and parameterized path links (e.g.- /planets/:number to match /planets/1, /planets/2...) to generate the detail pages with the appropriate data record.

- The server is static and only holds a single page.  All the routing and dynamic page generation is done on the client side, using the react-router-dom package.  The user will see the URL path change to match the displayed page, and the browser history allows the forward and back buttons to work.  But if a path such as {root}/films/2 is sent to the static server it will generate a 404 Not Found error.  That means that if you send a URL with such a path to someone else or try to refresh a page in your browser it will fail.

  The solution is to use the HashRouter component.  If the standard BrowserRouter is used, the URLs will look like {root}/films/2, causing the server to look for that non-existent page.  If the HashRouter is used instead, it will insert a hash into the URL (e.g. {root}/films/2 becomes {root}/#/films/2).  The server will always serve the root index.html file (which serves up the whole React app).  And the HashRouter interprets everything after the hash to do the proper client side routing from there.

- The original URL's from the API are used as keys for links and to retrieve data from the local store.  For example, https://www.swapi.co/api/planets/1/, the original URL for the API JSON data is stored as the key to retrieve from the planets local store, but the local routing just uses the path, namely /planets/1/.  Since the JSON data links (e.g.- all the characters that were in a particular movie) are the original URLs, this is the logical key to use for navigating the data.

- Note the use of the react-router Link component styled as a summary card to allow clicking anywhere on the card to redirect to the associated detail page.  This is much cleaner than some roundabout solutions that are sometimes required such as triggering a component render through a change of state, and then routing from within the render routine.  All card clicks will always route to a different page, so there is no need for partial component renderings.  The Link simply replaces the div or button that normally would have been used to form the cards.

## To-Do

- Add caching or background loading so the app is ready faster.  One thought is to direct all data retrievals through an interface that either serves up the cached data, or retrieves just that bit from the API (and keeps it in the cache) as needed.  Asynchronous background loading of the cache could still occur.  Or the background loading could be skipped and just load elements and add them to the cache as required.  For example, on first click of the Planets the app could retrieve all the planets from the API.  Or if jumping to a particular planet that is not in the cache yet, just that one could be retrieved from the API (faster since it is just one) to minimize the user wait time.  As they use the app, the local data store would quickly get populated and more and more would be retrieved locally with no waits.

- Add a close button to the side drawer menu for a more obvious alternative to clicking on the backdrop.  This could be a simple small round button with an X in it.