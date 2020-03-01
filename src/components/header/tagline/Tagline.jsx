import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Row } from '../../grid/styles';
import { Wrapper, Title, Subtitle } from './styles';

const Tagline = () => (
  <Wrapper>
    <Link to="/">
      <Title css={Row}>Wilson Alberto</Title>
      <Subtitle css={Row}>Front End Developer</Subtitle>
    </Link>
  </Wrapper>
);

export default Tagline;
