import React from 'react';
import { Image, Popup } from 'semantic-ui-react';

const Marker = ({ name, avatar }) => {
  return (
    <Popup
      style={{ width: '100% !important', height: '100% !important' }}
      className="testClass"
      key={name}
      trigger={
        <Image
          src={avatar}
          avatar
          style={{ width: '100% !important', height: '100% !important' }}
          size="big"
        />
      }
      header={name}
      content={name}
    />
  );
};

export default Marker;
