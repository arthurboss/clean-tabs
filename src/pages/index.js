import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import file from '!!raw-loader!../assets/tabs/hillsong_united/prince_of_peace.txt';
import Tab from '../components/tab/index';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Tab src={file} />

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
);

export default IndexPage;
