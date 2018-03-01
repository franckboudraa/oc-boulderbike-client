import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react';

import countdown from '../../lib/countdown.js';

class CountdownItem extends Component {
  state = {
    value: 0
  };

  componentDidMount = () => {
    this.renderCountdown(this.props.unit);
    this.refreshCounterEvery(this.props.refreshEvery * 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  refreshCounterEvery = ms => {
    this.timer = setInterval(() => {
      this.renderCountdown(this.props.unit);
    }, ms);
  };

  renderCountdown = unit => {
    const targetDate = new Date(2020, 3, 1); // 2020 April 1st
    switch (unit) {
      case 'seconds':
        return this.setState({
          value: countdown(targetDate).seconds
        });
      case 'minutes':
        return this.setState({
          value: countdown(targetDate).minutes
        });
      case 'hours':
        return this.setState({
          value: countdown(targetDate).hours
        });
      case 'days':
        return this.setState({
          value: countdown(targetDate).days
        });
      case 'months':
        return this.setState({
          value: countdown(targetDate).months
        });
      case 'years':
        return this.setState({
          value: countdown(targetDate).years
        });
      default:
        break;
    }
  };

  render() {
    return (
      <Statistic size="huge" className="mx-5">
        <Statistic.Value className="byellow-color thicker">{this.state.value}</Statistic.Value>
        <Statistic.Label className="text-white">{this.props.unit}</Statistic.Label>
      </Statistic>
    );
  }
}

export default CountdownItem;
