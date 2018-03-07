import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRiders } from '../../actions';
import { Container, Card, Loader, Message } from 'semantic-ui-react';

import RiderItem from './RiderItem';

class Riders extends Component {
  componentDidMount = () => {
    this.props.fetchRiders();
  };

  render() {
    const { loading, error, riders } = this.props.riders;
    return (
      <Container>
        <Card fluid centered className="my-3">
          <Card.Content>
            <div className="text-center mb-4">
              <h1>Riders in course</h1>
            </div>
            {loading && <Loader active inline="centered" />}
            {error && (
              <Message negative>
                <Message.Header>Sorry, an error occured</Message.Header>
                <p>Please try again</p>
              </Message>
            )}
            {!loading &&
              !error && (
                <Card.Group centered itemsPerRow={5} doubling>
                  {riders.map(rider => <RiderItem key={rider.id} {...rider} />)}
                </Card.Group>
              )}
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    riders: state.riders
  };
}

export default connect(mapStateToProps, { fetchRiders })(Riders);
