import BlockContent from '@sanity/block-content-to-react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Card from '../elements/Card';
import { AboutSectionQueryResponse } from '../types.queryResponses';
import * as styles from './index_about.styles';

const query = graphql`
  query {
    about: sanityHomepage {
      ...aboutSection
    }
  }
`;

const AboutSection: React.FC = () => {
  const result = useStaticQuery<AboutSectionQueryResponse>(query);
  const { bgImage, title, subtitle, _rawIntroText } = result.about.hero;

  return (
    <section className={styles.root}>
      <Card className={styles.image}>
        {bgImage && <Img alt="" fluid={bgImage.asset.fluid} />}
        <div className={styles.overlay}>
          <p className={styles.title}>{title}</p>
          <p className={styles.content}>{subtitle}</p>
        </div>
      </Card>
      <Card className={styles.introCard}>
        <BlockContent blocks={_rawIntroText} />
      </Card>
    </section>
  );
};

export default AboutSection;
