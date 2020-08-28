// @ts-check

import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
      title
    }
    events: allSanityEvent {
      edges {
        node {
          id
          name
          _rawDescription
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.warn(JSON.stringify(data));
  if (!data) return null;

  return (
    <div>
      <h1>Welcome to {data.site.title}</h1>
      {data.events.edges.map(({ node }) => (
        <>
          <p>{node.id}</p>
          <p>{node.name}</p>
          <div>{JSON.stringify(node._rawDescription)}</div>
        </>
      ))}
    </div>
  );
};

export default IndexPage;
