import React from 'react';

const Marker = ({ name, avatar }) => {
  return (
    <div>
      {name}
      <img src={avatar} alt={name} />
    </div>
  );
};

export default Marker;
