import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

import FilmPage from './cards/FilmCards';
import PeoplePage from './cards/PeopleCards';
import PlanetPage from './cards/PlanetCards';
import SpeciesPage from './cards/SpeciesCards';
import StarshipPage from './cards/StarshipCards';
import VehiclePage from './cards/VehicleCards';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      sideDrawerOpen: false,
      loadingMessage: 'Loading the universe...',
    };
    this.universe = {};
  }

  loadMapOfObjects = async (url) => {
    const map = new Map([]);
    let arr = [];
    let reportedCount = 0;
    let nextUrl = url;
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

      // Iterate through the objects on this page and add them to the array
      jsonObj.results.forEach(element => arr.push(element));

      nextUrl = jsonObj.next;
    } while (nextUrl);
    // Sort the array on the appropriate field
    const urlSplit = url.split('/');
    const dataType = urlSplit[urlSplit.length - 2];
    switch (dataType) {
      case 'films':
        arr.sort((a, b) => a.episode_id - b.episode_id);
        break;
      default:
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    // Convert the array to a map with the URL as the key
    arr.forEach(element => map.set(element.url, element));

    if (map.size !== reportedCount) {
      console.log('Expected: ', reportedCount, ' Got: ', map.size, ' for ', url)
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
      this.universe = { films, people, planets, species, starships, vehicles };
      // Flag that loading is complete
      this.setState({
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
              <Route exact path='/' render={() => (
                <div className='scroll-up'>
                  <div>
                    <h2>Explore the Star Wars Universe!</h2>
                    <p>Click a menu item to view a category.</p>
                    <p>Click on any item card in a category for more detail.</p>
                    <p>Click on any links to jump that item.</p>
                  </div>
                </div>
              )} />
              <ScrollToTop>
                <Switch>
                  <Route path='/films' render={() => (<FilmPage universe={this.universe} />)} />
                  <Route path='/people' render={() => (<PeoplePage universe={this.universe} />)} />
                  <Route path='/planets' render={() => (<PlanetPage universe={this.universe} />)} />
                  <Route path='/species' render={() => (<SpeciesPage universe={this.universe} />)} />
                  <Route path='/starships' render={() => (<StarshipPage universe={this.universe} />)} />
                  <Route path='/vehicles' render={() => (<VehiclePage universe={this.universe} />)} />
                </Switch>
              </ScrollToTop>
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
