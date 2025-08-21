import { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';

import { About } from '@/views/About';

const AboutPage: FC<PageProps> = () => <About />;

export const Head: HeadFC = () => (
  <>
    <title>About - Wilson Alberto</title>
    <meta
      name="description"
      content="About Wilson Alberto, Frontend Developer"
    />
  </>
);

export default AboutPage;
