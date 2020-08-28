// @ts-check

import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    sampleProject: sanityEvent(id: { eq: $id }) {
      id
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data && data.sampleProject;

  return <>{project && JSON.stringify(project)}</>;
};

export default ProjectTemplate;
