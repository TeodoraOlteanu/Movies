import React from "react";
import { Wrapper, Content} from "./Menu.styles.js";
import { Link } from 'react-router-dom';

const Menu = () => (
    <Wrapper>
      <Content>
          <Link style={{ textDecoration: 'none' }} to="/">
            <span>Home</span>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/Teaching">
            <span>Teaching</span>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/AboutMe">
            <span>About Me</span>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/Contact">
            <span>Contact</span>
          </Link>
        </Content>
  </Wrapper>
);

export default Menu;