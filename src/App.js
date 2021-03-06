import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Layout/Header';
import Homepage from './components/StaticPages/Homepage';
import Photos from './components/Photos/Photos';
import Location from './components/Location/Location';
import Riders from './components/Riders/Riders';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Informations from './components/StaticPages/Informations';
import ArticleItem from './components/Articles/ArticleItem';
import Footer from './components/Layout/Footer';
import FAQ from './components/StaticPages/FAQ';
import ProhibitedItems from './components/StaticPages/ProhibitedItems';
import RiderProfile from './components/Riders/RiderProfile';

import { startHerokuVM } from './actions';

class App extends Component {
  componentDidMount = () => {
    this.props.startHerokuVM(); // ping the Heroku backend VM for starting it
  };

  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <title>Boulder Bike Tour 2020 - Rocky Mountains, Colorado</title>
          </Helmet>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/photos" component={Photos} />
          <Route path="/location" component={Location} />
          <Route path="/riders" component={Riders} />
          <Route path="/rider/:id" component={RiderProfile} />
          <Route path="/sponsorship" component={Sponsorship} />
          <Route path="/informations" component={Informations} />
          <Route path="/article" component={ArticleItem} />
          <Route path="/faq" component={FAQ} />
          <Route path="/prohibited-items" component={ProhibitedItems} />
          <Route path="/" render={props => <Footer {...props} />} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { startHerokuVM })(App);
