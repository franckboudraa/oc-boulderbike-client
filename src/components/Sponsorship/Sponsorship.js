import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Container, Grid } from 'semantic-ui-react';
import SponsorshipForm from './SponsorshipForm';

const Sponsorship = () => (
  <div>
    <Helmet>
      <title>Sponsorship - Boulder Bike Tour</title>
    </Helmet>
    <Container className="my-3">
      <Card fluid>
        <Card.Content>
          <Card.Header textAlign="center">Wants to be sponsored?</Card.Header>
          <Card.Meta textAlign="center">
            We are sponsoring for anyone to come up with a slogan for the race.
          </Card.Meta>
          <Card.Description className="mt-3">
            <Grid centered>
              <Grid.Row>
                <Grid.Column width={6}>
                  <SponsorshipForm />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  </div>
);

export default Sponsorship;
