import React, { Component } from 'react';
import { Container, Menu, Icon, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Menu
          inverted
          size="massive"
          icon
          borderless
          stackable
          className="bgrey"
          attached
        >
          <Container>
            <Menu.Item className="brand">Boulder Bike Tour 2020</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item name="facebook">
                <Icon name="facebook f" />
                <Icon name="twitter" />
                <Icon name="instagram" />
                <Icon name="pinterest" />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <Menu
          widths={5}
          condensed
          inverted
          borderless
          stackable
          className="bgrey"
          attached
        >
          <Container>
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
            <Menu.Item name="sponsor" as={NavLink} to="/sponsorship">
              Sponsoring
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Header;
