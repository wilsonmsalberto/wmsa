import { FC } from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { Layout } from '@/components/Layout';

const NotFound: FC<PageProps> = () => (
  <Layout title="NOT FOUND">
    <p>
      Maybe we should try again <Link to="/">from the start</Link>
    </p>
  </Layout>
);

export const Head: HeadFC = () => (
  <>
    <title>Page Not Found</title>
    <meta name="description" content="Page not found" />
  </>
);

export default NotFound;
