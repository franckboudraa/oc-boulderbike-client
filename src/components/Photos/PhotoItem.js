import React from 'react';
import moment from 'moment';
import { Card, Icon, Image, Visibility } from 'semantic-ui-react';

const PhotoItem = props => {
  const PHOTO_URL = `https://farm${props.farm}.staticflickr.com/${
    props.server
  }/${props.id}_${props.secret}_n.jpg`;
  const loadMoreAfterItem = 29 * props.page;
  const timestamp = moment.unix(props.dateupload);
  const avatarUrl = props.iconfarm > 0 ? `http://farm${props.iconfarm}.staticflickr.com/${props.iconserver}/buddyicons/${props.owner}.jpg` : 'https://www.flickr.com/images/buddyicon.gif';
  return (
    <Card raised link>
      {props.index === loadMoreAfterItem - 6 && (
        <Visibility onOnScreen={() => props.loadMore()} once={true} />
      )}
      
      <Card.Content><Image src={avatarUrl} avatar />
    <span>{props.ownername}</span></Card.Content>
      <Image
        src={PHOTO_URL}
        as="img"
        style={{ width: '100%', height: '15rem', objectFit: 'cover' }}
        fluid
      />
      <Card.Content>
        {props.title}
        <Card.Meta>
          <span className="date">{timestamp.fromNow()}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
      <Icon name="eye" />{props.views}
      <span style={{float:'right'}}>
        <a
          href={`https://www.flickr.com/photos/${props.owner}/${props.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="external" /> View on flickr
        </a>
        </span>
      </Card.Content>
    </Card>
  );
};

export default PhotoItem;
