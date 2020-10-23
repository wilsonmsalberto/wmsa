/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, Global, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';

// Components
import { FullSocialMenu } from '../social-menu/SocialMenu';
import Header from '../header/Header';

// Styles
import { GlobalStyles, Main } from './Global.styles';

const Layout = ({ children }) => (
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
    <Main>{children}</Main>
    <FullSocialMenu />
    <Global styles={css(GlobalStyles)} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
