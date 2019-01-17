import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

// Components
import { Column } from '../../grid/Grid';

// Styles
import gridStyles from '../../grid/Grid.module.css';
import styles from './Tagline.module.css';

const Tagline = () => (
  <Column className={ styles.Wrapper }>
    <Link to="/">
      <h1 className={ classnames(styles.Title, gridStyles.Row) }>
        Wilson Alberto
      </h1>
      <h2 className={ classnames(styles.Subtitle, gridStyles.Row) }>
        Front End Developer
      </h2>
    </Link>
  </Column>
);

export default Tagline;
