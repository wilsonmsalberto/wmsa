import React from 'react';
import { PropTypes } from 'prop-types';

import Codepen from './icons/CodepenIcon';
import Github from './icons/GithubIcon';
import Linkedin from './icons/LinkedinIcon';

// Styles
import { SocialIcons } from './styles';

const SvgIcon = ({ children }) => <SocialIcons>{children}</SocialIcons>;

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export const CodepenIcon = () => (
  <SvgIcon>
    <Codepen />
  </SvgIcon>
);

export const GithubIcon = () => (
  <SvgIcon>
    <Github />
  </SvgIcon>
);

export const LinkedinIcon = () => (
  <SvgIcon>
    <Linkedin />
  </SvgIcon>
);
