import BlockContent from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BorderCard from '../elements/BorderCard';
import Card from '../elements/Card';
import Heading from '../elements/Heading';
import { PracticeSectionQueryResponse } from '../types.queryResponses';
import * as styles from './index_practice.styles';

const query = graphql`
  query {
    practice: sanityHomepage {
      ...practiceSection
    }
  }
`;

const PracticeSection: React.FC = () => {
  const result = useStaticQuery<PracticeSectionQueryResponse>(query);
  const { title, osmUrl, _rawText } = result.practice.practice;

  return (
    <section className={styles.root}>
      <Heading>{title}</Heading>
      <BorderCard className={styles.map}>
        <iframe
          frameBorder="0"
          height="100%"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src={osmUrl.replace(/&amp;/g, '&')}
          title="Map of our Practice Location"
          width="100%"
        ></iframe>
      </BorderCard>
      <Card className={styles.text}>
        <BlockContent blocks={_rawText} />
      </Card>
    </section>
  );
};

export default PracticeSection;
