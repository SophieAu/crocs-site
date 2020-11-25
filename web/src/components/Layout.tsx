import { graphql, useStaticQuery } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import { FONT_PATH } from '../_variables.styles';
import { BannerContextProvider } from '../BannerContext';
import { GlobalsQueryResponse } from '../types.queryResponses';
import { buildPageTitle } from '../util';
import Footer from './Footer';
import Header from './Header';
import MobileMenu from './HeaderMobile';
import * as styles from './Layout.styles';
import SEO from './SEO';

const query = graphql`
  query {
    global: sanitySiteSettings {
      ...globals
    }
  }
`;

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  additionalHead?: React.ReactNode;
  ogImage?: string;
  contentClassName?: string;
}

const Layout: React.FC<Props> = props => {
  const { title, description, slug, additionalHead, ogImage } = props;
  const { children, contentClassName } = props;

  const siteTitle = useStaticQuery<GlobalsQueryResponse>(query).global.title;

  return (
    <React.StrictMode>
      <SEO
        description={description}
        ogImagePath={ogImage}
        slug={slug}
        title={buildPageTitle(siteTitle, title)}
      >
        <link href={FONT_PATH} rel="stylesheet" />
        {additionalHead}
      </SEO>
      <div className={styles.root}>
        <Header />
        <MobileMenu />
        <BannerContextProvider>
          <main className={cx(styles.main, contentClassName)}>{children}</main>
        </BannerContextProvider>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

export default Layout;
