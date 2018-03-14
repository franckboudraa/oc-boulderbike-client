import React, { Component } from 'react';
import FAQAccordion from './FAQAccordion';
import { Helmet } from 'react-helmet';

import { Container, Card, Grid } from 'semantic-ui-react';
import Contact from './Contact';

class FAQ extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>FAQ - Boulder Bike Tour</title>
        </Helmet>
        <Container className="my-3">
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign="center">Help Center</Card.Header>
              <Card.Meta textAlign="center">
                We're here for you. How can we help?
              </Card.Meta>
              <Card.Description className="mt-3">
                <Grid stackable>
                  <Grid.Row>
                    <Grid.Column width={10}>
                      <h3 style={{ textAlign: 'center' }}>FAQ</h3>
                      <FAQAccordion />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <h3 style={{ textAlign: 'center' }}>Contact us</h3>
                      <Contact />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}

export default FAQ;
