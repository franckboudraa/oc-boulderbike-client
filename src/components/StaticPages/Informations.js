import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

const Informations = () => {
  return (
    <div>
      <Helmet>
        <title>Informations - Boulder Bike Tour</title>
      </Helmet>
      <Container className="my-3">
        <Card fluid>
          <Card.Content>blabla</Card.Content>
        </Card>
      </Container>
    </div>
  );
};

export default Informations;
