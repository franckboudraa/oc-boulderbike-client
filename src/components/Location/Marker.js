import React from 'react';
import { Image, Popup } from 'semantic-ui-react';
import RiderItem from '../Riders/RiderItem';

const Marker = props => {
  return (
    <div style={{ height: '4rem', width: '4rem' }}>
      <Popup
        hoverable
        position="top center"
        key={props.id}
        size="small"
        style={{ backgroundColor: 'rgb(0,0,0,0)', padding: 0, border: 0 }}
        trigger={
          <div>
            <Image src={props.avatar} circular fluid className="test-class" />
          </div>
        }
      >
        <RiderItem {...props} />
      </Popup>
    </div>
  );
};

export default Marker;
