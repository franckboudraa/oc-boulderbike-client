import React from 'react';
import FAQAccordion from './FAQAccordion';

import { Container, Card, Grid, Input, Icon } from 'semantic-ui-react';

const FAQ = () => {
  return (
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
                  <FAQAccordion />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Input
                    fluid
                    icon="users"
                    iconPosition="left"
                    placeholder="Your email address"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default FAQ;
