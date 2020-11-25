import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { strings } from '../../data/strings';
import { FooterQueryResponse } from '../types.queryResponses';
import * as styles from './Footer.styles';

const query = graphql`
  query {
    global: sanitySiteSettings {
      ...footer
    }
  }
`;

const Footer: React.FC = () => {
  const result = useStaticQuery<FooterQueryResponse>(query).global;
  return (
    <footer className={styles.root}>
      <p>{strings.copyright(result.copyrightHolder)}</p>
      <p>{result.footerText}</p>
    </footer>
  );
};

export default Footer;
