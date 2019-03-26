import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';
import Footer from './components/Footer/Footer';

import FilmCards from './cards/FilmCards';
import PeopleCards from './cards/PeopleCards';
import PlanetCards from './cards/PlanetCards';
import SpeciesCards from './cards/SpeciesCards';
import StarshipCards from './cards/StarshipCards';
import VehicleCards from './cards/VehicleCards';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// TODO: Make the menu items work, and make them change the URL and
// vice versa to match.  E.g.- clicking the People menu should
// load a list of people, but also show /people/ in the URL.  And
// entering .../people should put it in that mode.
// TODO: Add clickable links on some cards to jump to other detail
// cards.  E.g.- home planet should be clickable and jump to that
// planet's detail.  Or in a list of residents of a planet, be able
// to jump to the detail on that planet.

const urls = [
  'https://swapi.co/api/films/',
  'https://swapi.co/api/people/',
  'https://swapi.co/api/planets/',
  'https://swapi.co/api/species/',
  'https://swapi.co/api/starships/',
  'https://swapi.co/api/vehicles/'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      universe: {},
      sideDrawerOpen: false,
      loadingMessage: 'Loading the universe...',
    };
  }

  loadMapOfObjects = async (url) => {
    const map = new Map([]);
    let objCount = 0;
    let reportedCount = 0;
    let nextUrl = url;
    function addElement(elem) {
      map.set(elem.url, elem);
      ++objCount;
    }
    // read each successive page until no more
    do {
      let response = await fetch(nextUrl);
      // Remember that fetch doesn't throw errors on HTTP 404 or 500,
      // so we have to check the 'ok' state to catch those too.
      if (!response.ok) {
        throw Error(response.status + ' on fetch of ' + response.url);
      }
      const jsonObj = await response.json();
      reportedCount = jsonObj.count;

      // Iterate through the objects on this page and add them to the map
      jsonObj.results.forEach(element => addElement(element));

      nextUrl = jsonObj.next;
    } while (nextUrl);
    if (objCount !== reportedCount) {
      console.log('Expected: ', reportedCount, ' Got: ', objCount, ' for ', url)
    }
    return map;
  }


  componentDidMount = async () => {
    try {
      const [films, people, planets, species, starships, vehicles] = await Promise.all(
        // TODO: Add some type of progress indicator, such as telling what type
        // of data is being loaded, or how many objects so far.
        urls.map(url => this.loadMapOfObjects(url))
      );
      this.setState({
        universe: { films, people, planets, species, starships, vehicles },
        loadingMessage: ''
      });
    } catch (error) {
      const errorString = error.name + ': ' + error.message;
      this.setState({ loadingMessage: errorString });
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const loadingMessage = this.state.loadingMessage;
    const backdrop = (this.state.sideDrawerOpen) ?
      <Backdrop click={this.backdropClickHandler} /> : null;

    if (loadingMessage.length) {
      return (
        <div className='centered-message'>
          <h2>{loadingMessage}</h2>
        </div>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main>
              <Route path='/' exact render={() => (
                // <div className='centered-message'>
                <div className='scroll-up'>
                  <div>
                    <h2>Explore the Star Wars Universe!</h2>
                    <p>Click any menu item to view a category.</p>
                    <p>Click on any item in a category for more detail.</p>
                    <p>Click on any links to jump to an associated item.</p>
                  </div>
                </div>
              )} />
              <Route path='/films' render={() => (<FilmCards universe={this.state.universe} />)} />
              <Route path='/people' render={() => (<PeopleCards universe={this.state.universe} />)} />
              <Route path='/planets' render={() => (<PlanetCards universe={this.state.universe} />)} />
              <Route path='/species' render={() => (<SpeciesCards universe={this.state.universe} />)} />
              <Route path='/starships' render={() => (<StarshipCards universe={this.state.universe} />)} />
              <Route path='/vehicles' render={() => (<VehicleCards universe={this.state.universe} />)} />
            </main>
            <footer>
              <Footer />
            </footer>
          </div >
        </Router>
      );
    }
  }
}

export default App;
