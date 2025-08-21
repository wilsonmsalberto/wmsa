import { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';

import { Home } from '@/views/Home';

const HomePage: FC<PageProps> = () => <Home />;

export const Head: HeadFC = () => (
  <>
    <title>Wilson Alberto - Frontend Developer - Personal Website</title>
    <meta
      name="description"
      content="The personal website of Wilson Alberto, a Frontend Developer based in Portugal"
    />
  </>
);

export default HomePage;
