import React, { Component } from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';

class RiderItem extends Component {
  render() {
    return (
      <Card raised link>
        <Image src={this.props.avatar} fluid />
        <Card.Content>
          <Card.Header>{`${this.props.firstName} ${
            this.props.lastName
          }`}</Card.Header>
          <Card.Meta>
            <span className="date">{`${this.props.city}, ${
              this.props.state
            }`}</span>
          </Card.Meta>
          <Card.Description>{this.props.quote}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="marker" />
            Find {this.props.firstName} on map
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default RiderItem;
