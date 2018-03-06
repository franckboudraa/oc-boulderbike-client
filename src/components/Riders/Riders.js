import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRiders } from '../../actions';
import { Container, Card, Loader, Message } from 'semantic-ui-react';

import RiderItem from './RiderItem';

class Riders extends Component {
  componentDidMount = () => {
    this.props.fetchRiders();
  };

  renderRiders = () => {
    const { riders } = this.props.riders;
    return (
      <Card.Group centered itemsPerRow={5} doubling>
        {riders.map(rider => (
          <RiderItem
            key={rider.id}
            firstName={rider.first_name}
            lastName={rider.last_name}
            avatar={rider.avatar}
            city={rider.city}
            state={rider.state}
            quote={rider.quote}
          />
        ))}
      </Card.Group>
    );
  };
  render() {
    const { loading, error } = this.props.riders;
    return (
      <Container>
        <h1 className="text-center mt-3 uppercase">Riders</h1>
        {loading ? <Loader active inline="centered" /> : ''}
        {error ? (
          <Message negative>
            <Message.Header>Sorry, an error occured</Message.Header>
            <p>Please try again</p>
          </Message>
        ) : (
          ''
        )}
        {!loading && !error ? this.renderRiders() : ''}
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
