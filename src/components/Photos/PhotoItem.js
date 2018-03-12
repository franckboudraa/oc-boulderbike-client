import React from 'react';
import { Card, Icon, Image, Visibility } from 'semantic-ui-react';

const PhotoItem = props => {
  const PHOTO_URL = `https://farm${props.farm}.staticflickr.com/${
    props.server
  }/${props.id}_${props.secret}_n.jpg`;
  const loadMoreAfterItem = 29 * props.page;
  return (
    <Card raised link>
      {props.index === loadMoreAfterItem - 6 ? (
        <Visibility onOnScreen={() => props.loadMore()} once={true} />
      ) : (
        ''
      )}
      <Image
        src={PHOTO_URL}
        as="img"
        style={{ width: '100%', height: '15rem', objectFit: 'cover' }}
        fluid
      />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">owner</span>
        </Card.Meta>
        <Card.Description>#tags</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href={`https://www.flickr.com/photos/${props.owner}/${props.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="external" /> View on flickr
        </a>
      </Card.Content>
    </Card>
  );
};

export default PhotoItem;
