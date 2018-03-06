import React, { Component } from 'react';
class Marker extends Component {
  render() {
    console.log(this.props.avatar);
    return (
      <div>
        {this.props.name}
        <img src={this.props.avatar} alt={this.props.name} />
      </div>
    );
  }
}

export default Marker;
