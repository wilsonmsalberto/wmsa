import { FC } from 'react';
import { Codepen } from './svg/Codepen';
import { Github } from './svg/Github';
import { LinkedIn } from './svg/LinkedIn';

import { SocialIcons } from './Icons.styles';

const SvgIcon: FC = ({ children }) => <SocialIcons>{children}</SocialIcons>;

type IconProps = {
  title: string;
  color: string;
};

export const CodepenIcon = (props: IconProps) => (
  <SvgIcon>
    <Codepen {...props} />
  </SvgIcon>
);

export const GithubIcon = (props: IconProps) => (
  <SvgIcon>
    <Github {...props} />
  </SvgIcon>
);

export const LinkedInIcon = (props: IconProps) => (
  <SvgIcon>
    <LinkedIn {...props} />
  </SvgIcon>
);
