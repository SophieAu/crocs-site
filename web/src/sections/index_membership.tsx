import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { paths } from '../../data/config';
import { SignUpCardPreview } from '../components/SignUpCard';
import Heading from '../elements/Heading';
import { MembershipSectionQueryResponse } from '../types.queryResponses';
import { buildExcerpt } from '../util';
import * as styles from './index_membership.styles';

const query = graphql`
  query {
    membership: sanityHomepage {
      ...membershipSection
    }
  }
`;

const MembershipSection: React.FC = () => {
  const result = useStaticQuery<MembershipSectionQueryResponse>(query);
  const { title, membership } = result.membership.membership;

  return (
    <section>
      <Heading>{title}</Heading>
      <SignUpCardPreview
        buttonText={membership.buttonText}
        className={styles.previewCard}
        description={buildExcerpt(membership._rawDescription)}
        img={membership.image.asset.fluid}
        title={membership.name}
        to={paths.membership}
        type="border"
      />
    </section>
  );
};

export default MembershipSection;
