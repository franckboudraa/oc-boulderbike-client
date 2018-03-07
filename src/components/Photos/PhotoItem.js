import React from 'react';
import { Card, Icon, Image, Visibility } from 'semantic-ui-react';

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
// https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=767f4a87ffca583251e855cb80fc886c&photo_id=38858244100&format=json&nojsoncallback=1

const PhotoItem = props => {
  const PHOTO_URL = `https://farm${props.farm}.staticflickr.com/${
    props.server
  }/${props.id}_${props.secret}_q.jpg`;
  const loadMoreAfterItem = 29 * props.page;
  return (
    <Card raised link>
      {props.index === loadMoreAfterItem - 6 ? (
        <Visibility onOnScreen={() => props.loadMore()} once={true} />
      ) : (
        ''
      )}
      <Image src={PHOTO_URL} fluid />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">owner</span>
        </Card.Meta>
        <Card.Description>#tags</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="external" /> View on flickr
        </a>
      </Card.Content>
    </Card>
  );
};

export default PhotoItem;
