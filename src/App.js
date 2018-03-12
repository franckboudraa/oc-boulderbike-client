import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/*
2254121210.0105cd8.c0d41d9f7d9b4e799122bd577124d913
https://www.instagram.com/oauth/authorize/?client_id=0105cd8432bd495c81e22abf3cb1349c&redirect_uri=http://www.franckboudraa.me/boulderbike&response_type=token&scope=public_content
https://api.instagram.com/v1/tags/LaTable/media/recent?access_token=2254121210.0105cd8.c0d41d9f7d9b4e799122bd577124d913
*/
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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/photos" component={Photos} />
          <Route path="/location" component={Location} />
          <Route path="/riders" component={Riders} />
          <Route path="/sponsorship" component={Sponsorship} />
          <Route path="/informations" component={Informations} />
          <Route path="/article" component={ArticleItem} />
          <Route path="/faq" component={FAQ} />
          <Route path="/prohibited-items" component={ProhibitedItems} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
