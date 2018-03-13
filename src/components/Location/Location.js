import React from 'react';
import { Helmet } from 'react-helmet';
import Map from './Map';

const Location = () => {
  return (
    <div>
      <Helmet>
        <title>Riders location - Boulder Bike Tour</title>
      </Helmet>
      <div className="full-height">
        <Map />
      </div>
    </div>
  );
};

export default Location;
