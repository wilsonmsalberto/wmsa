// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FC, type ReactNode } from 'react';
import { Codepen } from './svg/Codepen';
import { Github } from './svg/Github';
import { LinkedIn } from './svg/LinkedIn';

import { SocialIcons } from './Icons.styles';

const SvgIcon: FC<{ children: ReactNode }> = ({ children }) => (
  <SocialIcons>{children}</SocialIcons>
);

type IconProps = {
  title: string;
  color: string;
};

export function CodepenIcon(props: IconProps) {
  return (
    <SvgIcon>
      <Codepen {...props} />
    </SvgIcon>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <SvgIcon>
      <Github {...props} />
    </SvgIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <SvgIcon>
      <LinkedIn {...props} />
    </SvgIcon>
  );
}
