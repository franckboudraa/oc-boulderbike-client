import React from 'react';
import { Container, Menu, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import bbtlogo from '../../assets/bbt_logo.png';

const Header = () => {
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
          <Menu.Item className="brand">
            <Image src={bbtlogo} />
          </Menu.Item>
          <Menu.Item>April 1, 2020</Menu.Item>
          <Menu.Item>Rocky Mountains, Colorado</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="facebook">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Icon name="facebook f" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Icon name="twitter" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Icon name="instagram" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Icon name="pinterest" />
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <Menu widths={6} inverted borderless stackable className="bgrey" attached>
        <Container>
          <Menu.Item name="homepage" as={NavLink} exact to="/">
            Home
          </Menu.Item>
          <Menu.Item name="informations" as={NavLink} to="/informations">
            Plan your race
          </Menu.Item>
          <Menu.Item name="photos" as={NavLink} to="/photos">
            Stories & Photos
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
};

export default Header;
