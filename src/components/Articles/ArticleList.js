import React from 'react';
import { Card, Item, Icon, Image } from 'semantic-ui-react';

const ArticleList = () => {
  return (
    <Card fluid centered>
      <Card.Content>
        <Card.Header>Running & Sleep</Card.Header>
        <Card.Meta>March 6, 2018 by Franck</Card.Meta>
        <Card.Description>
          In addition to training hard and eating right, it’s equally important
          to personalize your sleep environment...
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="right">
        <a>
          <Icon name="angle right" />
          Read more
        </a>
      </Card.Content>
    </Card>
  );
};

export default ArticleList;
