/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { PAGES_QUERY, buildEvents } = require('./meta/node');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) return;

  console.log('\nCreating Event Pages...');
  buildEvents(result.data.events.nodes, actions.createPage);

  console.log();
};
