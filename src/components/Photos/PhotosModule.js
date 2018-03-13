import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions';

import { Icon, Loader, Message, Segment } from 'semantic-ui-react';

import PhotoItem from './PhotoItem';

class PhotosModule extends Component {
  componentDidMount = () => {
    this.loadMore();
  };

  loadMore = () => {
    this.props.fetchPhotos(1);
  };

  renderPhotos = () => {
    const { photos, page } = this.props.photos;
    return (
      <PhotoItem key={1} {...photos[0]} index={1} page={page} loadMore={null} />
    );
  };

  render() {
    const { loading, error } = this.props.photos;
    return (
      <Segment padded={false}>
        <a href="/photos" className="grey-link">
          <Icon name="angle right" />Follow #boulderbiketour
        </a>
        {loading && <Loader active inline="centered" />}
        {error && (
          <Message negative>
            <Message.Header>Sorry, an error occured</Message.Header>
            <p>Please try again</p>
          </Message>
        )}
        {!loading && !error && this.renderPhotos()}
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  };
}

export default connect(mapStateToProps, { fetchPhotos })(PhotosModule);
