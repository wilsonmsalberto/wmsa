import React from 'react';

import codepenIcon from '../../images/svg/codepen.svg';
import githubIcon from '../../images/svg/github.svg';
import linkedinIcon from '../../images/svg/linkedin.svg';

import styles from './Svg.module.css';

const SvgIcon = ({ xlinkHref }) => (
  <svg className={styles.SocialIcons}>
    <use fill="#dc1718" xlinkHref={xlinkHref} />
  </svg>
);

export const CodepenIcon = () => (
  <SvgIcon xlinkHref={`#${codepenIcon.id}`} />
);

export const GithubIcon = () => (
  <SvgIcon xlinkHref={`#${githubIcon.id}`} />
);

export const LinkedinIcon = () => (
  <SvgIcon xlinkHref={`#${linkedinIcon.id}`} />
);
