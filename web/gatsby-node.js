const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityEvent {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityEvent || {}).edges || [];

  projectEdges.forEach((edge) => {
    const id = edge.node.id;
    const slug = edge.node.id;
    const path = `/project/${slug}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
};
