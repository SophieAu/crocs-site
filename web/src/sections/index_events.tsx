import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { paths } from '../../data/config';
import { SignUpCardPreview } from '../components/SignUpCard';
import { LinkButton } from '../elements/Button';
import Heading from '../elements/Heading';
import { EventsSectionQueryResponse } from '../types.queryResponses';
import { removePastEvents } from '../util';
import * as styles from './index_events.styles';

const query = graphql`
  query {
    eventSection: sanityHomepage {
      ...eventsSection
    }
    events: allSanityEvent {
      ...allEvents
    }
  }
`;

const EventsSection: React.FC = () => {
  const { eventSection, events } = useStaticQuery<EventsSectionQueryResponse>(query);
  const meta = eventSection?.events || {
    title: 'derp',
    moreButtonText: 'string',
    signupButtonText: 'string',
    emptyText: 'string',
  };

  const filteredEvents = (events.nodes || []).filter(removePastEvents);
  filteredEvents.length = 3;

  return (
    <section className={styles.root}>
      <Heading>{meta.title}</Heading>
      {!filteredEvents.length ? (
        <p className={styles.emptyContent}>{meta.emptyText}</p>
      ) : (
        <>
          <div className={styles.eventCards}>
            {filteredEvents.map(event => (
              <SignUpCardPreview
                key={event._id}
                buttonText={meta.signupButtonText}
                category={event.category.category}
                className={styles.previewCard}
                description={event.excerpt}
                img={event.image?.asset.fluid}
                meta={{ datetime: new Date(event.startTime), location: event.location }}
                tag={event.tag}
                title={event.name}
                to={`${paths.events}/${event._id}`}
              />
            ))}
          </div>
          <LinkButton href={paths.events} styling="outline">
            {meta.moreButtonText}
          </LinkButton>
        </>
      )}
    </section>
  );
};

export default EventsSection;
