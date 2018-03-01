import React, { Component } from 'react';
import {Popup, Image} from 'semantic-ui-react';

class Marker extends Component {

  render() {
    console.log(this.props.avatar);
    return (
      <div>
        {this.props.name}
        <img src={this.props.avatar} />
      </div>
    );
  }
}

export default Marker;
