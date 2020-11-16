// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import about from './documents/about';
import event from './documents/event';
import eventCategory from './documents/eventCategory';
import events from './documents/events';
import home from './documents/home';
import membership from './documents/membership';
import siteSettings from './documents/siteSettings';
import team_ladies from './documents/team_ladies';
import team_men from './documents/team_men';
import body from './objects/body';
import card from './objects/card';
import h_contact from './objects/home/contact';
import h_events from './objects/home/events';
import h_hero from './objects/home/hero';
import h_membership from './objects/home/membership';
import h_practice from './objects/home/practice';
import h_sponsors from './objects/home/sponsors';
import section from './objects/section';
import sponsor from './objects/sponsor';
import ticketAmount from './objects/ticketAmount';

const homeSections = [h_contact, h_events, h_hero, h_membership, h_practice, h_sponsors];
const objectTypes = [...homeSections, body, card, section, sponsor, ticketAmount];

const pages = [about, home, membership, team_ladies, team_men, events];
const documentTypes = [...pages, eventCategory, event, siteSettings];

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'berlinCrocs',
  types: schemaTypes.concat([...objectTypes, ...documentTypes]),
});
