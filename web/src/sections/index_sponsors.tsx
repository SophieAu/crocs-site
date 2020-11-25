import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Heading from '../elements/Heading';
import { SponsorsSectionQueryResponse } from '../types.queryResponses';
import * as styles from './index_sponsors.styles';

const query = graphql`
  query {
    sponsors: sanityHomepage {
      ...sponsorsSection
    }
  }
`;

const SponsorsSection: React.FC = () => {
  const result = useStaticQuery<SponsorsSectionQueryResponse>(query);
  const { title, sponsors } = result.sponsors.sponsors;

  return (
    <section>
      <Heading>{title}</Heading>
      <div className={styles.sponsors}>
        {(sponsors || []).map(s => (
          <a key={s.website} className={styles.link} href={s.website}>
            <Img
              alt={s.name}
              className={styles.logo}
              fluid={s.logo.asset.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
