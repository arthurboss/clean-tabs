exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allFile(filter: { ext: { eq: ".txt" } }) {
        edges {
          node {
            name
            internal {
              content
            }
          }
        }
      }
    }
  `);

  data.allFile.edges.forEach((edge) => {
    const slug = edge.node.name;

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/tab.js`),
      context: { slug },
    });
  });
};
