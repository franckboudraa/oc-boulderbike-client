import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

const RiderItem = props => {
  return (
    <Card raised link>
      <Image src={props.avatar} fluid />
      <Card.Content>
        <Card.Header>
          {props.first_name} {props.last_name}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {props.city}, {props.state}
          </span>
        </Card.Meta>
        <Card.Description>{props.quote}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/rider/${props.id}`}>
          <Icon name="user" />
          View {props.first_name}'s profile
        </Link>
      </Card.Content>
    </Card>
  );
};

export default RiderItem;
