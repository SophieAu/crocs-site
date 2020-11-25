import { graphql } from 'gatsby';
import React from 'react';

import Subpage from '../components/Subpage';
import { SubpageQueryResponse } from '../types.queryResponses';

export const query = graphql`
  query {
    page: sanityAbout {
      ...aboutUsPage
    }
  }
`;

const AboutUs: React.FC<{ data: SubpageQueryResponse }> = ({ data }) => <Subpage data={data} />;

export default AboutUs;
