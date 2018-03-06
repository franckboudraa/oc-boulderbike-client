import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Countdown from '../Countdown/Countdown';
import CarouselPlayer from '../Carousel/CarouselPlayer';
import ArticleList from '../Articles/ArticleList';

class Homepage extends Component {
  render() {
    return (
      <Container>
        <CarouselPlayer />
        <Grid stackable padded="vertically">
          <Grid.Row stretched columns={2}>
            <Grid.Column width={6} className="pr-1">
              <ArticleList />
            </Grid.Column>
            <Grid.Column width={10} className="pl-3">
              <Countdown />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Homepage;
