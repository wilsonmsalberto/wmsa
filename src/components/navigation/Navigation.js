import { Link } from 'gatsby';
import React from 'react';
import classnames from 'classnames';

// Styles
import gridStyles from '../grid/Grid.module.css';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={ classnames(styles.Wrapper ,gridStyles.Row) }>
    <ul className={ styles.Menu }>
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
    </ul>
  </nav>
)

export default Navigation
