import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

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

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  console.warn(JSON.stringify(data));
  if (!data) return null;

  const site = data.site;

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Welcome to {site.title}</h1>
        {data.events.edges.map(({ node }) => (
          <>
            <p>{node.id}</p>
            <p>{node.name}</p>
            <div>{JSON.stringify(node._rawDescription)}</div>
          </>
        ))}
      </Container>
    </Layout>
  );
};

export default IndexPage;
