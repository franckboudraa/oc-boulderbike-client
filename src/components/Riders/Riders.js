import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRiders } from '../../actions';
import axios from 'axios';
import {
  Container,
  Card,
  Icon,
  Image,
  Loader,
  Message
} from 'semantic-ui-react';

import RiderItem from './RiderItem';

class Riders extends Component {
  /*state = {
    error: false,
    loading: true,
    riders: []
  };*/

  componentDidMount = () => {
    //this.getRiders();
    this.props.fetchRiders();
    //console.log(this.props);
  };

  /*getRiders = async () => {
    let localRiders = await localStorage.getItem('bbt-riders');
    localRiders = JSON.parse(localRiders);
    if (localRiders) {
      // if we already have riders data, no need to fetch datas again on next visits
      this.setState({
        riders: localRiders,
        loading: false
      });
    } else {
      // if we dont have cached riders data, fetch datas with axios
      try {
        const response = await axios.get(
          'https://boulderbike.herokuapp.com/riders'
        );
        this.setState({
          riders: response.data,
          loading: false
        });
        localStorage.setItem('bbt-riders', JSON.stringify(response.data)); // cache data on local storage for next visits
      } catch (error) {
        this.setState({
          error: true,
          loading: false
        });
      }
    }
  };*/

  renderError = () => {
    return (
      <Message negative>
        <Message.Header>Sorry, an error occured</Message.Header>
        <p>Please try again</p>
      </Message>
    );
  };

  renderLoading = () => {
    return <Loader active inline="centered" />;
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
        {loading ? this.renderLoading() : null}
        {error ? this.renderError() : null}
        {!loading && !error ? this.renderRiders() : null}
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
