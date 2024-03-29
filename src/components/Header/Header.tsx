import { Link } from 'gatsby';
import { Navigation } from './Navigation';

import { Wrapper, Tagline, Title, Subtitle } from './Header.styles';

export const Header = () => (
  <Wrapper>
    <Tagline>
      <Link to="/">
        <Title>Wilson Alberto</Title>

        <Subtitle>Front End Developer</Subtitle>
      </Link>
    </Tagline>

    <Navigation />
  </Wrapper>
);
