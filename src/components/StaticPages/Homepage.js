import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import Countdown from '../Countdown/Countdown';

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';

class Homepage extends Component {
  render() {
    return (
      <Container>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          emulateTouch={true}
        >
          <div>
            <img src={carousel2} />
            <p className="legend">
              Trainings have started! Credit: Marcus Spiske
            </p>
          </div>
          <div>
            <img src={carousel1} />
            <p className="legend">Credit: Marcus Spiske</p>
          </div>
          <div>
            <img src={carousel3} />
            <p className="legend">Credit: Marc Wieland</p>
          </div>
        </Carousel>
        <Card className="bgrey text-center" centered fluid>
          <Card.Content>
            <Card.Header className="text-white">Are you ready?</Card.Header>
            <Card.Meta className="text-white">
              The course will begin in:
            </Card.Meta>
            <Card.Description>
              <Countdown />
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Homepage;
