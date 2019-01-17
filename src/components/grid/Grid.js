import React from 'react';
import classnames from 'classnames';

// Styles
import styles from './Grid.module.css';

export const Row = ({children, className}) => (
  <div className={classnames(styles.Row, className) }>
    { children }
  </div>
);

export const Column = ({ children, className }) => (
  <div className={classnames(styles.Row, className)}>
    { children }
  </div>
);
