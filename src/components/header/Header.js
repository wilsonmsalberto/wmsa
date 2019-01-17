import React from 'react';
import classnames from 'classnames';

// Components
import Navigation from '../navigation/Navigation';
import Tagline from './tagline/Tagline';

// Styles
import styles from './Header.module.css';
import gridStyles from '../grid/Grid.module.css';

const Header = () => (
  <header className={classnames(gridStyles.Row, styles.Wrapper) }>
    <Tagline />
    <Navigation />
  </header>
);

export default Header;
