import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.01, lng: -105.25 },
    zoom: 13,
    bounds: {
      lat: 0,
      lng: 0
    }
  };

  renderMarkers = () => {
    let localRiders = localStorage.getItem('bbt-riders');
    const riders = JSON.parse(localRiders);
    return (riders.map(rider => (
          <Marker
            id={rider.id}
            key={rider.id}
          lat={rider.lat}
          lng={rider.lng}
          name={rider.first_name}
            avatar={rider.avatar}
        />
        ))
    );
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{ key: 'AIzaSyDLwL9cdzAulDezq8SLFUZMUfpW4ZM5dEo' }}
        options={{ scrollwheel: false }}
      >
        {this.renderMarkers()}
        </GoogleMapReact>
    );
  }
}

export default Map;
