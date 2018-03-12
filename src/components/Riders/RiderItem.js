import React from 'react';

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
        <a>
          <Icon name="marker" />
          Find {props.first_name} on map
        </a>
      </Card.Content>
    </Card>
  );
};

export default RiderItem;
