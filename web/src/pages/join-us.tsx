import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import Layout from '../components/Layout';
import { SignUpCardFull } from '../components/SignUpCard';
import { JoinUsQueryResponse } from '../types.queryResponses';
import { buildExcerpt } from '../util';

// TODO: Make this cleaner, ideally in the lambda function
const SIGN_UP_ID = 'Membership';

export const query = graphql`
  query {
    page: sanityMembership {
      ...membership
    }
  }
`;

const Membership: React.FC<{ data: JoinUsQueryResponse }> = ({ data }) => {
  const { _rawDescription, buttonText, signupError, signupSuccess } = data.page;
  const { title, image, categories, name } = data.page;

  return (
    <Layout description={buildExcerpt(_rawDescription)} slug={slugs.events} title={title}>
      <SignUpCardFull
        buttonText={buttonText}
        content={_rawDescription}
        errorMessage={signupError}
        img={image?.asset.fluid}
        signUpId={SIGN_UP_ID}
        successMessage={signupSuccess}
        ticketCategories={categories}
        title={name}
        type="border"
      />
    </Layout>
  );
};

export default Membership;
