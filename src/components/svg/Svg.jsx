import React from 'react';
import { PropTypes } from 'prop-types';

import codepenIcon from '../../images/svg/codepen.svg';
import githubIcon from '../../images/svg/github.svg';
import linkedinIcon from '../../images/svg/linkedin.svg';

// Styles
import { SocialIcons } from './styles';

const SvgIcon = ({ xlinkHref }) => (
  <SocialIcons>
    <use fill="#dc133d" xlinkHref={xlinkHref} />
  </SocialIcons>
);

SvgIcon.propTypes = {
  xlinkHref: PropTypes.string.isRequired
};

export const CodepenIcon = () => <SvgIcon xlinkHref={`#${codepenIcon.id}`} />;

export const GithubIcon = () => <SvgIcon xlinkHref={`#${githubIcon.id}`} />;

export const LinkedinIcon = () => <SvgIcon xlinkHref={`#${linkedinIcon.id}`} />;
