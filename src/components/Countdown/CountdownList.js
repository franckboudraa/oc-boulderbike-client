import React from 'react';
import CountdownItem from '../Countdown/CountdownItem';

const items = ['month', 'days', 'hours', 'minutes', 'seconds'];
const CountdownList = () =>
  items.map(unit => <CountdownItem key={unit} unit={unit} />);

export default CountdownList;
