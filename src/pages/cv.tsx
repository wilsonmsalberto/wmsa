import { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';

import { CV } from '@/views/CV';

const CVPage: FC<PageProps> = () => <CV />;

export const Head: HeadFC = () => (
  <>
    <title>CV - Wilson Alberto</title>
    <meta
      name="description"
      content="Download Wilson Alberto's CV. 12+ years of frontend development experience, React expert, engineering leader."
    />
    <meta property="og:title" content="Wilson Alberto - CV" />
    <meta
      property="og:description"
      content="Frontend Developer | React Expert | Engineering Leader"
    />
    <meta property="og:type" content="profile" />
  </>
);

export default CVPage;
