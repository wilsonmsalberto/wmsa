import { ReactElement } from 'react';

import { GithubIcon, CodepenIcon, LinkedInIcon } from '@/components/Icons';

import { SocialMenuWrapper, SocialMenuItem } from './SocialMenu.styles';

type MenuItemProps = {
  className?: string;
  linkText: string;
  url: string;
  svg: ReactElement;
};

const MenuItem = ({ className = ``, linkText, url, svg }: MenuItemProps) => (
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

export const SocialMenu = () => (
  <SocialMenuWrapper>
    <>
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
    </>
  </SocialMenuWrapper>
);
