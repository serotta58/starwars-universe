# Star Wars Universe

This single page React.js app loads the Star Wars data from www.swapi.co and then presents it in a browsable form with links between related items.  Category pages listing all items of that type, and individual detail pages are show.

This makes use of the react-router-dom router.  The original URL's from the API are used as keys for links and to retrieve data from the local store.

Note the use of the react-router Link component styled as a summary card to allow clicking anywhere on the card to redirect.

## Current issues

- Since all the routing is done on the client side, sending a url (such as .../films/2/) to someone else or refreshing in your browser will not work.  The server side only knows about the root page.  So you will see the URLs change as you navigate within the app, and the browsers back/forward buttons should work, but reusing the URLs somewhere else will not.  I'm working on this.
- If you see any problems, let me know.