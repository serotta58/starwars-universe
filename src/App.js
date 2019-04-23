import React, { Component } from 'react';
import axios from 'axios';

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      loadingMessage: 'Loading the universe...',
    };
    this.universe = {};
    this.loadData();
  }

  loadData = async () => {
  // componentDidMount = async () => {
    try {
      const response = await axios.get('/universe.json');      
      const data = response.data;
      // Convert each array to a map with the URL as the key
      // arr.forEach(element => map.set(element.url, element));
      const arrayToMap = (mapAccum, element) => mapAccum.set(element.url, element);
      this.universe.films = data.films.reduce(arrayToMap, new Map([]));
      this.universe.people = data.people.reduce(arrayToMap, new Map([]));
      this.universe.planets = data.planets.reduce(arrayToMap, new Map([]));
      this.universe.species = data.species.reduce(arrayToMap, new Map([]));
      this.universe.starships = data.starships.reduce(arrayToMap, new Map([]));
      this.universe.vehicles = data.vehicles.reduce(arrayToMap, new Map([]));
      this.setState({ loadingMessage: '' });
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
        <div className='centered'>
          <h2>{loadingMessage}</h2>
        </div>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
            {backdrop}
            <main>
              <Route exact path='/' render={() => (
                <div className='centered'>
                  {/* <div> */}
                    <h2>Explore the Star Wars Universe!</h2>
                    <p>Click a menu item to view a category.</p>
                    <p>Click any item card in a category for more detail.</p>
                    <p>Click any links to jump to that item.</p>
                    <h3>May the Force be with you!</h3>
                  {/* </div> */}
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
