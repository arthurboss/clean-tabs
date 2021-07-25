import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { capitalizeText } from '../utils/capitalize';

const Tab = ({ pageContext }) => {
  const title = capitalizeText(pageContext.name);

  return (
    <Layout>
      <Seo title={title} />

      <pre>{pageContext.content}</pre>
    </Layout>
  );
};

export default Tab;
