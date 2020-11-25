import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import Layout from '../components/Layout';
import { SignUpCardFull } from '../components/SignUpCard';
import { EventQueryResponse } from '../types.queryResponses';
import { buildExcerpt } from '../util';

export const query = graphql`
  query($id: String!) {
    event: sanityEvent(id: { eq: $id }) {
      ...event
    }
    page: sanityHomepage {
      ...eventsSection
    }
  }
`;

const Event: React.FC<{ data: EventQueryResponse }> = ({ data: { event, page } }) => {
  const description = buildExcerpt(event._rawDescription);
  const slug = `${slugs.events}/${event._id}`;
  const meta = { datetime: new Date(event.startTime), location: event.location };

  return (
    <Layout description={description} slug={slug} title={event.name}>
      <SignUpCardFull
        buttonText={page.events.signupButtonText}
        category={event.category.category}
        content={event._rawDescription}
        errorMessage={page.events.signupError}
        img={event.image?.asset.fluid}
        meta={meta}
        signUpId={event._id}
        successMessage={page.events.signupSuccess}
        tag={event.tag}
        ticketCategories={event.tickets || []}
        title={event.name}
      />
    </Layout>
  );
};

export default Event;
