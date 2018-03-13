import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

const ArticleList = () => {
  return (
    <Card fluid centered className="bg-gradient-white">
      <Card.Content>
        <Card.Header>Running & Sleep</Card.Header>
        <Card.Meta>March 6, 2018 by Franck</Card.Meta>
        <Card.Description>
          In addition to training hard and eating right, it’s equally important
          to personalize your sleep environment...
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="article">
          <Icon name="angle right" />
          Read more
        </Link>
      </Card.Content>
    </Card>
  );
};

export default ArticleList;
