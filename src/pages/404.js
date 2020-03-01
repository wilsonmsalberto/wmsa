import { Link } from 'gatsby';
import React from 'react';

// Components
import Layout from '../components/layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      `Maybe we should try again <Link to="/">from the start</Link>`
    </p>
  </Layout>
);

export default NotFoundPage;
