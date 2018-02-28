import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import Header from './components/Layout/Header';
import Homepage from './components/StaticPages/Homepage';
import Photos from './components/Photos/Photos';
import Location from './components/Location/Location';
import Riders from './components/Riders/Riders';

class App extends Component {
  render() {
    return (
      <Router>
        <Segment inverted>
          <Header />

          <Route exact path="/" component={Homepage} />
          <Route path="/photos" component={Photos} />
          <Route path="/location" component={Location} />
          <Route path="/riders" component={Riders} />
        </Segment>
      </Router>
    );
  }
}

export default App;
