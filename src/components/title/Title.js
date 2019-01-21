import React from 'react';

// Styles
import styles from './Title.module.css';

const Title = ({ children }) => (
  <h2 className={ styles.Title }>{ children }</h2>
);

export default Title;
