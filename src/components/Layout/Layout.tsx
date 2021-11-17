import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SocialMenu } from '@/components/SocialMenu';
import { Header } from '@/components/Header';

import { GlobalStyles, Main, Title } from './Global.styles';

type LayoutProps = {
  title: string;
};

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Wilson Alberto - Frontend Developer - Personal Website</title>
      <meta
        name="description"
        content="The personal website of Wilson Alberto, a Frontend Developer based in Portugal"
      />
    </Helmet>

    <Header />

    <Main>
      <Title>{title}</Title>

      {children}
    </Main>

    <SocialMenu />

    <GlobalStyles />
  </>
);
