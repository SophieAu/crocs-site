/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { resolve } = require(`path`);

exports.PAGES_QUERY = `
  {
    events: allSanityEvent {
      nodes {
        id
        _id
        name
      }
    }
  }
`;

exports.buildEvents = (nodes, createPage) => {
  const component = resolve(`./src/templates/event.tsx`);

  nodes.forEach(({ _id, id, name }) => {
    createPage({ path: `events/${_id}`, component, context: { id } });

    console.log(name, id);
  });
};
