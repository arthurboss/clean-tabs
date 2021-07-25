import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

interface INode {
  name: string;
  relativeDirectory: string;
}

const ContentIndex = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { ext: { eq: ".txt" } }) {
        nodes {
          name
          relativeDirectory
        }
      }
    }
  `);

  return (
    <ul>
      {data.allFile.nodes.map((node: INode) => {
        const { name, relativeDirectory } = node;

        return (
          <li>
            <Link to={`${relativeDirectory}/${name}/`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ContentIndex;
