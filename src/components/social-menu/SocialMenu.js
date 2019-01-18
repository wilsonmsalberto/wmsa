import React from 'react';
import classnames from 'classnames';



// Styles
import styles from './SocialMenu.module.css';

export const SocialMenu = ({ children, className }) => (
  <ul className={classnames(styles.SocialMenu, className) }>
    { children }
  </ul>
);

export const SocialMenuItem = ({ className, linkText, url, svg }) => (
  <li>
    <a
      className={classnames(styles.SocialMenuItem, className)}
      href={ url }
      target="_blank"
      rel="noopener noreferrer">
      { svg }{ linkText }
    </a>
  </li>
);
