import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions';
import { Card, Container, Loader, Message } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

import PhotoItem from './PhotoItem';

class Photos extends Component {
  componentDidMount = () => {
    this.loadMore();
  };

  loadMore = () => {
    this.props.fetchPhotos(this.props.photos.page + 1);
  };

  renderPhotos = () => {
    const { photos, page } = this.props.photos;
    return (
      <Card.Group centered itemsPerRow={4} stackable doubling>
        {photos.map((photo, i) => (
          <PhotoItem
            key={i}
            {...photo}
            index={i}
            page={page}
            loadMore={() => this.loadMore()}
          />
        ))}
        <Card.Content extra>
          <Loader active inline="centered" />
        </Card.Content>
      </Card.Group>
    );
  };

  render() {
    const { loading, error } = this.props.photos;
    return (
      <div>
        <Helmet>
          <title>Stories & Photos - Boulder Bike Tour</title>
        </Helmet>
        <Container>
          <Card fluid centered className="my-3">
            <Card.Content>
              <div className="text-center mb-4">
                <h1>Stories & Photos</h1>
                <h3>
                  Want your photo to be published here? Just upload your photo
                  on flickr with hashtag #BoulderBikeTour!
                </h3>
              </div>
              {loading && <Loader active inline="centered" />}
              {error && (
                <Message negative>
                  <Message.Header>Sorry, an error occured</Message.Header>
                  <p>Please try again</p>
                </Message>
              )}
              {!loading && !error && this.renderPhotos()}
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  };
}

export default connect(mapStateToProps, { fetchPhotos })(Photos);
