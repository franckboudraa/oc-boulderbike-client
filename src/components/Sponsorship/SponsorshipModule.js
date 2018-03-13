import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import motivationCover from '../../assets/motivation_cover.jpg';

const SponsorshipModule = () => {
  return (
    <div style={{ height: '100%' }}>
      <Link to="/sponsorship">
        <Image
          fluid
          src={motivationCover}
          as="img"
          className="object-fit-cover"
          style={{ height: '100%' }}
        />
      </Link>
    </div>
  );
};

export default SponsorshipModule;
