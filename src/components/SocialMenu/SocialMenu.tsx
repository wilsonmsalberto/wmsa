import { ReactElement } from 'react';

import { GithubIcon, CodepenIcon, LinkedInIcon } from '@/components/Icons';

import {
  SocialMenuWrapper,
  SocialMenuItem,
  FooterText,
} from './SocialMenu.styles';

type MenuItemProps = {
  className?: string;
  linkText: string;
  url: string;
  svg: ReactElement;
};

function MenuItem({ className = ``, linkText, url, svg }: MenuItemProps) {
  return (
    <SocialMenuItem>
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {svg}
        {linkText}
      </a>
    </SocialMenuItem>
  );
}

export function SocialMenu() {
  return (
    <footer>
      <SocialMenuWrapper>
        <MenuItem
          svg={
            <LinkedInIcon
              title="Linked In - wilsonmsalberto"
              color="currentColor"
            />
          }
          linkText="Linked In - wilsonmsalberto"
          url="https://www.linkedin.com/in/wilsonmsalberto"
        />

        <MenuItem
          svg={
            <GithubIcon title="Github - wilsonmsalberto" color="currentColor" />
          }
          linkText="Github - wilsonmsalberto"
          url="https://github.com/wilsonmsalberto"
        />

        <MenuItem
          svg={<CodepenIcon title="Codepen - walberto" color="currentColor" />}
          linkText="Codepen - walberto"
          url="https://codepen.io/walberto"
        />
      </SocialMenuWrapper>

      <FooterText>
        Drop me a line if you want to chat about frontend, performance
        optimization, or why Portuguese custard tarts are objectively the best
        pastry.
      </FooterText>
    </footer>
  );
}
