import { Link } from 'gatsby';
import React from 'react';

// Styles
import { Row } from '../grid/styles';
import { Menu, Nav } from './styles';

const Navigation = () => (
  <Nav css={Row}>
    <Menu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {/* <li>
        <Link to="/coding">Coding</Link>
      </li>
      <li>
        <Link to="/writing">Writing</Link>
      </li> */}
      <li>
        <Link to="/speaking">Speaking</Link>
      </li>
    </Menu>
  </Nav>
);

export default Navigation;
