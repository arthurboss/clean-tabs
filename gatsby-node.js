exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allFile(filter: { ext: { eq: ".txt" } }) {
        nodes {
          name
          relativeDirectory
          internal {
            content
          }
        }
      }
    }
  `);

  data.allFile.nodes.forEach((node) => {
    const {
      name,
      relativeDirectory,
      internal: { content },
    } = node;

    actions.createPage({
      path: `/${relativeDirectory}/${name}`,
      component: require.resolve(`./src/templates/tab.js`),
      context: { content, name },
    });
  });
};
