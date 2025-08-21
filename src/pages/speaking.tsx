import { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';

import { Speaking } from '@/views/Speaking';

const SpeakingPage: FC<PageProps> = () => <Speaking />;

export const Head: HeadFC = () => (
  <>
    <title>Speaking - Wilson Alberto</title>
    <meta name="description" content="Speaking engagements by Wilson Alberto" />
  </>
);

export default SpeakingPage;
