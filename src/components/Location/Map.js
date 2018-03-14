import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { fetchRiders } from '../../actions';
import Marker from './Marker';

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.01, lng: -105.25 },
    zoom: 13
  };
  componentDidMount = () => {
    this.props.fetchRiders();
  };

  render() {
    const { loading, error, riders } = this.props.riders;
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_KEY }}
        options={{ scrollwheel: false }}
      >
        {!loading &&
          !error &&
          riders.map(rider => <Marker key={`t${rider.id}`} {...rider} />)}
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
