import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';

import Countdown from '../Countdown/Countdown';
import CarouselPlayer from '../Carousel/CarouselPlayer';
import ArticleModule from '../Articles/ArticleModule';
import PhotosModule from '../Photos/PhotosModule';
import SponsorshipModule from '../Sponsorship/SponsorshipModule';

const Homepage = () => {
  return (
    <Container className="mb-2">
      <CarouselPlayer />
      <Grid stackable>
        <Grid.Row stretched columns={2} className="pb-1 pt-4">
          <Grid.Column width={6} className="pr-1">
            <ArticleModule />
          </Grid.Column>
          <Grid.Column width={10} className="pl-1">
            <Countdown />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={3} className="pt-1">
          <Grid.Column className="pr-1" mobile={16} tablet={5} computer={4}>
            <PhotosModule />
          </Grid.Column>
          <Grid.Column className="px-1" mobile={16} tablet={6} computer={8}>
            <Segment>toDo</Segment>
          </Grid.Column>
          <Grid.Column className="pl-1" mobile={16} tablet={5} computer={4}>
            <SponsorshipModule />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Homepage;
