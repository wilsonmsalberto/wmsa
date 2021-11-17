import { Link } from 'gatsby';

import { Menu, Nav } from './Navigation.styles';

export const Navigation = () => (
  <Nav>
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
