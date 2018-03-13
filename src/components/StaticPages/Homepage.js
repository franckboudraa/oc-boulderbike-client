import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import Countdown from '../Countdown/Countdown';
import CarouselPlayer from '../Carousel/CarouselPlayer';
import ArticleModule from '../Articles/ArticleModule';
import PhotosModule from '../Photos/PhotosModule';

import motivationCover from '../../assets/motivation_cover.jpg';

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
          <Grid.Column className="pr-1" mobile={16} tablet={6} computer={6}>
            <PhotosModule />
          </Grid.Column>
          <Grid.Column className="px-1" mobile={16} tablet={6} computer={6}>
            <PhotosModule />
          </Grid.Column>
          <Grid.Column className="pl-1" mobile={16} tablet={4} computer={4}>
            <Image
              src={motivationCover}
              as="img"
              style={{ imageFit: 'cover' }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Homepage;
