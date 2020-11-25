import BlockContent from '@sanity/block-content-to-react';
import React from 'react';

import { slugs } from '../../data/config';
import Layout from '../components/Layout';
import Card from '../elements/Card';
import Heading from '../elements/Heading';
import { SubpageQueryResponse } from '../types.queryResponses';
import { buildExcerpt } from '../util';
import * as styles from './Subpage.styles';

const Subpage: React.FC<{ data: SubpageQueryResponse }> = ({ data }) => {
  const { sections, cards, title } = data.page;

  const description = buildExcerpt(
    sections?.[0]?.cards?.[0]?._rawCardBody || cards?.[0]?._rawCardBody
  );

  return (
    <Layout description={description} slug={slugs.aboutUs} title={title}>
      {(cards || []).map(c => (
        <Card key={c._key} className={styles.card}>
          <BlockContent blocks={c._rawCardBody} />
        </Card>
      ))}
      {(sections || []).map(s => (
        <section key={s._key} className={styles.sectionHeading}>
          {!!s.title && <Heading>{s.title}</Heading>}
          {(s.cards || []).map(c => (
            <Card key={c._key} className={styles.card}>
              <BlockContent blocks={c._rawCardBody} />
            </Card>
          ))}
        </section>
      ))}
    </Layout>
  );
};

export default Subpage;
