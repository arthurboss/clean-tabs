import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { capitalizeText } from '../utils/capitalize';

export const query = graphql`
  query ($slug: String!) {
    file(ext: { eq: ".txt" }, name: { eq: $slug }) {
      name
      internal {
        content
      }
    }
  }
`;

const Tab = ({ data }) => {
  const title = capitalizeText(data.file.name);
  const content = data.file.internal.content;

  return (
    <Layout>
      <Seo title={title} />

      <pre>{content}</pre>
    </Layout>
  );
};

export default Tab;
