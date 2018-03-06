import React, { Component } from 'react';

import CountdownItem from '../Countdown/CountdownItem';

class CountdownList extends Component {
  render() {
    return (
      <div>
        <CountdownItem unit="months" refreshEvery="60" />
        <CountdownItem unit="days" refreshEvery="30" />
        <CountdownItem unit="hours" refreshEvery="5" />
        <CountdownItem unit="minutes" refreshEvery="1" />
        <CountdownItem unit="seconds" refreshEvery="1" />
      </div>
    );
  }
}

export default CountdownList;
