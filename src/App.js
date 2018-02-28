import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

class App extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Menu stackable>
          <Menu.Item>Boulder Bike Tour 2020</Menu.Item>

          <Menu.Item
            name="features"
            active={activeItem === 'features'}
            onClick={this.handleItemClick}
          >
            Features
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>
          <Menu.Menu position="right">

          <Menu.Item
            name="sign-in"
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default App;
