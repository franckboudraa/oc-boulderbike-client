import React from 'react';
import { Card } from 'semantic-ui-react';
import CountdownList from './CountdownList';

const Countdown = () => {
  return (
    <Card className="bgrey" fluid centered>
      <Card.Content>
        <Card.Header className="text-white" textAlign="center">
          Are you ready?
        </Card.Header>
        <Card.Meta className="text-white" textAlign="center">
          The course will begin in:
        </Card.Meta>
        <Card.Description textAlign="center">
          <CountdownList />
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Countdown;
