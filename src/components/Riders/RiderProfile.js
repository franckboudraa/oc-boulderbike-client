import React from 'react';
import { Card, Container } from 'semantic-ui-react';

const RiderProfile = props => {
  return (
    <Container className="my-3">
      <Card fluid>
        <Card.Content>{props.match.params.id}</Card.Content>
      </Card>
    </Container>
  );
};

export default RiderProfile;
