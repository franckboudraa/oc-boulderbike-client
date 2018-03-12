import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { fetchRiders } from '../../actions';
import Marker from './Marker';

class Map extends Component {
  componentDidMount = () => {
    this.props.fetchRiders();
  };

  render() {
    const { loading, error, riders } = this.props.riders;
    return (
      <GoogleMapReact
        defaultCenter={{ lat: 40.01, lng: -105.25 }}
        defaultZoom={13}
        bootstrapURLKeys={{ key: 'AIzaSyDLwL9cdzAulDezq8SLFUZMUfpW4ZM5dEo' }}
        options={{ scrollwheel: false }}
      >
        {!loading &&
          !error &&
          riders.map(rider => <Marker key={rider.id} {...rider} />)}
      </GoogleMapReact>
    );
  }
}

function mapStateToProps(state) {
  return {
    riders: state.riders
  };
}

export default connect(mapStateToProps, { fetchRiders })(Map);
