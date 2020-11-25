/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
//@ts-check

require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
const clientConfig = require('./client-config');
const token = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === 'production';

const hiddenPages = ['/404'];

exports.siteMetadata = {
  title: `Berlin Crocodiles`,
  description: `Website of the Berlin Crocodiles`,
  author: `Sophie Au`,
  siteUrl: `https://www.gatsbyjs.org`,
};

exports.manifestOptions = {
  name: `gatsby-template`,
  short_name: `gatsby-templ`,
  start_url: `/`,
  background_color: `#FFFFFF`,
  theme_color: `#FFFFFF`,
  display: `minimal-ui`,
  icon: `favicon.png`, // This path is relative to the root of the site.
};

exports.reactSVGOptions = { rule: { include: /\.inline\.svg$/ } };

exports.robotsTxtOptions = {
  policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }],
};

exports.sitemapOptions = { exclude: hiddenPages };

exports.filesystemImageOptions = { name: 'img', path: `${__dirname}/../data/img/` };

exports.transformerRemarkOptions = {
  plugins: [
    {
      resolve: 'gatsby-remark-images',
      options: { maxWidth: 970, quality: 90, withWebp: true },
    },
  ],
};

exports.sanityOptions = {
  ...clientConfig.sanity,
  token,
  watchMode: !isProd,
  overlayDrafts: !isProd && token,
};
