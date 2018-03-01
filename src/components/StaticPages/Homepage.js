import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import Countdown from '../Countdown/Countdown';

class Homepage extends Component {
  render() {
    return (
      <Container>
        <Card className="bgrey mt-5 text-center" centered fluid>
          <Card.Content>
            <Card.Header className="text-white">Are you ready?</Card.Header>
            <Card.Meta className="text-white">The course will begin in:</Card.Meta>
            <Card.Description><Countdown /></Card.Description>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Homepage;
