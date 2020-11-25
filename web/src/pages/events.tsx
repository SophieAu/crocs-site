import { graphql } from 'gatsby';
import React, { useState } from 'react';

import { paths, slugs } from '../../data/config';
import Layout from '../components/Layout';
import { SignUpCardPreview } from '../components/SignUpCard';
import { ToggleButton } from '../elements/Button';
import { EventsQueryResponse } from '../types.queryResponses';
import { removePastEvents } from '../util';
import * as styles from './events.styles';

export const query = graphql`
  query {
    categories: allSanityEventCategory {
      ...eventCategories
    }
    page: sanityHomepage {
      ...eventsSection
    }
    events: allSanityEvent {
      ...allEvents
    }
  }
`;

const Events: React.FC<{ data: EventsQueryResponse }> = ({ data }) => {
  const meta = data.page.events;

  const [selectedTag, selectTag] = useState<string>();

  const handleClick = (tag?: string) => () => selectTag(selectedTag === tag ? undefined : tag);

  const cats = data.categories.nodes;
  const filteredEvents = (data.events.nodes || [])
    .filter(removePastEvents)
    .filter(({ category }) => !selectedTag || category.category === selectedTag);

  return (
    <Layout description={''} slug={slugs.events} title={meta.title}>
      <div className={styles.categories}>
        {cats.map(({ category }) => (
          <ToggleButton
            key={category}
            aria-label={'Show' + selectedTag === category ? ' all.' : ` ${category}`}
            className={styles.categoryButton}
            isActive={selectedTag === category}
            onClick={handleClick(category)}
          >
            {category}
          </ToggleButton>
        ))}
      </div>
      <div className={styles.eventContainer}>
        {!filteredEvents.length && <p className={styles.emptyContent}>{meta.emptyText}</p>}
        {filteredEvents.map(event => (
          <SignUpCardPreview
            key={event._id}
            buttonText={meta.signupButtonText}
            category={event.category?.category || 'merp'}
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
    </Layout>
  );
};

export default Events;
