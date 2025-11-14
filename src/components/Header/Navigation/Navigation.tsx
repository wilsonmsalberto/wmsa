import { Link } from 'gatsby';

import { Menu, Nav } from './Navigation.styles';

export function Navigation() {
  return (
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
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </Menu>
    </Nav>
  );
}
