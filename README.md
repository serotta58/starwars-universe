# Star Wars Universe

This single page React.js app loads the Star Wars data from www.swapi.co and then presents it in a browsable form with links between related items.  Category pages listing all items of that type, and individual detail pages are show.

This makes use of the react-router-dom router.  The original URL's from the API are used as keys for links and to retrieve data from the local store.

Note the use of the react-router Link component styled as a summary card to allow clicking anywhere on the card to redirect.