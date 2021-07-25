
import * as React from 'react';
import ContentIndex from '../components/ContentIndex';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <ContentIndex />
  </Layout>
);

export default IndexPage;
