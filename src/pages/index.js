import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { hillsong_united_oceans } from '../assets/tabs';
import Tab from '../components/tab/index';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Tab src={hillsong_united_oceans} />
  </Layout>
);

export default IndexPage;
