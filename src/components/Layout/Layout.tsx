// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FC, type ReactNode } from 'react';

import { SocialMenu } from '@/components/SocialMenu';
import { Header } from '@/components/Header';

import { GlobalStyles, Main, Title } from './Global.styles';

export const Layout: FC<{
  title: string;
  children?: ReactNode;
}> = ({ title, children }) => (
  <>
    <Header />

    <Main>
      <Title>{title}</Title>

      {children}
    </Main>

    <SocialMenu />

    <GlobalStyles />
  </>
);
