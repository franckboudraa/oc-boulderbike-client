import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Countdown from '../Countdown/Countdown';

class Homepage extends Component {
  render() {
    return (
      <Container>
        <h1 className="mb-5 text-center">Ready?</h1>
        <div className="text-center">
          <Countdown />
        </div>
      </Container>
    );
  }
}

export default Homepage;
