import React from 'react';
import { PropTypes } from 'prop-types';

import { GithubIcon, CodepenIcon, LinkedinIcon } from '../svg/Svg';

// Styles
import { SocialMenu as StyledSocialMenu, SocialMenuItem as StyledSocialMenuItem } from './styles';

const SocialMenu = ({ children, className }) => <StyledSocialMenu className={className}>{children}</StyledSocialMenu>;

SocialMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string
};

SocialMenu.defaultProps = {
  className: undefined
};

const SocialMenuItem = ({ className, linkText, url, svg }) => (
  <StyledSocialMenuItem>
    <a className={className} href={url} target="_blank" rel="noopener noreferrer">
      {svg}
      {linkText}
    </a>
  </StyledSocialMenuItem>
);

SocialMenuItem.propTypes = {
  svg: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

SocialMenuItem.defaultProps = {
  className: undefined
};

const FullSocialMenu = () => (
  <SocialMenu>
    <>
      <SocialMenuItem
        svg={<LinkedinIcon />}
        linkText="Linked In - wilsonmsalberto"
        url="https://www.linkedin.com/in/wilsonmsalberto"
      />
      <SocialMenuItem
        svg={<GithubIcon />}
        linkText="Github - wilsonmsalberto"
        url="https://github.com/wilsonmsalberto"
      />
      <SocialMenuItem svg={<CodepenIcon />} linkText="Codepen - walberto" url="https://codepen.io/walberto" />
    </>
  </SocialMenu>
);

export { SocialMenu, SocialMenuItem, FullSocialMenu };
