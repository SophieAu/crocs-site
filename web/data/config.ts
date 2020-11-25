import { NavElem } from '../src/types';

export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/';
export const SIGN_UP_API = 'signup';
export const LAMBDA_BASE = `${process.env.LAMBDA_API || ''}/.netlify/functions/`;

// TODO: update this with actual url once I get acess
export const BASE_URL = 'https://www.gatsbyjs.org/';
export const FALLBACK_IMAGE = '/socialImage.jpg';

export const slugs = {
  home: '',
  notFound: '404',
  events: 'events',
  aboutUs: 'about-us',
  teamLadies: 'team-ladies',
  teamMen: 'team-men',
  membership: 'join-us',
};

export const paths = {
  home: `/${slugs.home}`,
  notFound: `/${slugs.notFound}`,
  events: `/${slugs.events}`,
  aboutUs: `/${slugs.aboutUs}`,
  teamLadies: `/${slugs.teamLadies}`,
  teamMen: `/${slugs.teamMen}`,
  membership: `/${slugs.membership}`,
};

export const navigation: NavElem[] = [
  { title: 'Home', path: paths.home },
  { title: 'About', path: paths.aboutUs },
  {
    title: 'Teams',
    children: [
      { title: 'Mens', path: paths.teamMen },
      { title: 'Ladies', path: paths.teamLadies },
    ],
  },
  { title: 'Events', path: paths.events },
  { title: 'Join Us', path: paths.membership },
];
