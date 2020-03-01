import React from 'react';

// Components
import Navigation from '../navigation/Navigation';
import Tagline from './tagline/Tagline';

// Styles
import { Header as StylesHeader } from './styles';
import { Row } from '../grid/styles';

const Header = () => (
  <StylesHeader css={Row}>
    <Tagline />
    <Navigation />
  </StylesHeader>
);

export default Header;
