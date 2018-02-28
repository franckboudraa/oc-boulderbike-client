import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Container>
        <Menu stackable>
          <Menu.Item className="brand">Boulder Bike Tour 2020</Menu.Item>

          <Menu.Item name="homepage" as={NavLink} exact to="/">
            Homepage
          </Menu.Item>
          <Menu.Item name="photos" as={NavLink} to="/photos">
            Photos
          </Menu.Item>
          <Menu.Item name="location" as={NavLink} to="/location">
            Location
          </Menu.Item>
          <Menu.Item name="riders" as={NavLink} to="/riders">
            Riders
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="sign-in">Sign-in</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default Header;
