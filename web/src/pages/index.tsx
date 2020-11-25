import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import Layout from '../components/Layout';
import AboutSection from '../sections/index_about';
import ContactSection from '../sections/index_contact';
import EventsSection from '../sections/index_events';
import MembershipSection from '../sections/index_membership';
import PracticeSection from '../sections/index_practice';
import SponsorsSection from '../sections/index_sponsors';
import { HomePageQueryResponse } from '../types.queryResponses';
import { buildExcerpt } from '../util';
import * as styles from './index.styles';

export const query = graphql`
  query {
    page: sanityHomepage {
      ...homePage
    }
  }
`;

const Home: React.FC<{ data: HomePageQueryResponse }> = ({ data }) => {
  const { hero, title } = data.page;

  return (
    <Layout
      contentClassName={styles.sectionSpacing}
      description={buildExcerpt(hero._rawIntroText)}
      slug={slugs.home}
      title={title}
    >
      <AboutSection />
      <PracticeSection />
      <EventsSection />
      <MembershipSection />
      <ContactSection />
      <SponsorsSection />
    </Layout>
  );
};

export default Home;
