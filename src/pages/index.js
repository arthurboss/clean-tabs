import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import file from '!!raw-loader!../assets/tabs/hillsong_united/prince_of_peace.txt';
import Tab from '../components/tab/index';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Tab src={file} />
  </Layout>
);

export default IndexPage;
