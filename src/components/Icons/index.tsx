import { Codepen } from './svg/Codepen';
import { Github } from './svg/Github';
import { LinkedIn } from './svg/LinkedIn';

import { SocialIcons } from './Icons.styles';

type IconProps = {
  title: string;
  color: string;
};

export function CodepenIcon(props: IconProps) {
  return (
    <SocialIcons>
      <Codepen {...props} />
    </SocialIcons>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <SocialIcons>
      <Github {...props} />
    </SocialIcons>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <SocialIcons>
      <LinkedIn {...props} />
    </SocialIcons>
  );
}
