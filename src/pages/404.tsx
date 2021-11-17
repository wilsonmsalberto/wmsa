import { FC } from 'react';
import { PageProps, Link } from 'gatsby';

import { Layout } from '@/components/Layout';

const NotFound: FC<PageProps> = () => (
  <Layout title="NOT FOUND">
    <p>
      `Maybe we should try again <Link to="/">from the start</Link>`
    </p>
  </Layout>
);

export default NotFound;
