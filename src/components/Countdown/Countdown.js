import React, { Component } from 'react';

import CountdownItem from '../Countdown/CountdownItem';

class Countdown extends Component {
  render() {
    return (
      <div>
        <CountdownItem unit="years" refreshEvery="60" color="teal" />
        <CountdownItem unit="months" refreshEvery="60" color="blue" />
        <CountdownItem unit="days" refreshEvery="30" color="violet" />
        <CountdownItem unit="hours" refreshEvery="5" color="purple" />
        <CountdownItem unit="minutes" refreshEvery="1" color="pink" />
        <CountdownItem unit="seconds" refreshEvery="1" color="brown" />
      </div>
    );
  }
}

export default Countdown;
