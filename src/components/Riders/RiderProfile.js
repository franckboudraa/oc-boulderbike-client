import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRider } from '../../actions';

import { Card, Container, Image, Loader, Message } from 'semantic-ui-react';

class RiderProfile extends Component {
  componentDidMount = () => {
    this.props.fetchRider(this.props.match.params.id);
  };

  render() {
    const { loading, error, rider } = this.props;
    return (
      <Container className="my-3">
        <Card fluid>
          <Card.Content textAlign="center">
            {loading && <Loader active inline="centered" />}
            {error && (
              <Message negative>
                <Message.Header>Sorry, an error occured</Message.Header>
                <p>Please try again</p>
              </Message>
            )}
            {!error &&
              !loading && (
                <div>
                  <Image src={rider.avatar} rounded />
                  <h1>
                    {rider.first_name} {rider.last_name}
                  </h1>
                  <h3>
                    {rider.city}, {rider.state}
                  </h3>
                  <h5>
                    Current position: {rider.lat}, {rider.lng}
                  </h5>
                </div>
              )}
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps({ rider: { rider } }) {
  return {
    rider
  };
}

export default connect(mapStateToProps, { fetchRider })(RiderProfile);
