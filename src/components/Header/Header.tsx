import { Link } from 'gatsby';
import { Navigation } from './Navigation';

import { Wrapper, Tagline, Title, Subtitle } from './Header.styles';

export function Header() {
  return (
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
}
