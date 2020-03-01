/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, Global, jsx } from '@emotion/core';

// Components
import { FullSocialMenu } from '../social-menu/SocialMenu';
import Header from '../header/Header';

// Styles
import { GlobalStyles, Main } from './Global.styles';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <FullSocialMenu />
    <Global styles={css(GlobalStyles)} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
