import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Container>
      <Menu
        inverted
        icon
        borderless
        stackable
        className="bgrey"
        attached
        size="mini"
        widths={3}
      >
        <Container>
          <Menu.Item>Boulder Bike Tour 2020</Menu.Item>
          <Menu.Item>
            <a
              href="http://www.franckboudraa.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; Franck Boudraa - All Rights Reserved
            </a>
          </Menu.Item>
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
    </Container>
  );
};

export default Footer;
