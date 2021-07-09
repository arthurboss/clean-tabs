import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  {
    allPlainText {
      nodes {
        content
      }
    }
  }
`;

const Tabs = ({ data }) => {
  return (
    <Layout>
      <pre>
        {data.allPlainText?.nodes[0]?.content || 'no content found'}
      </pre>
    </Layout>
  );
};

export default Tabs;
