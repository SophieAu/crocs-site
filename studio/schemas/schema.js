// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import mainImage from "./objects/mainImage";
import section from "./objects/section";
import card from "./objects/card";
import body from "./objects/body";
import sponsor from "./objects/sponsor";

import about from "./documents/about";
import event from "./documents/event";
import home from "./documents/home";
import membership from "./documents/membership";
import team_ladies from "./documents/team_ladies";
import team_men from "./documents/team_men";
import siteSettings from "./documents/siteSettings";

import home_contact from "./objects/home/contact";
import home_events from "./objects/home/events";
import home_hero from "./objects/home/hero";
import home_membership from "./objects/home/membership";
import home_practice from "./objects/home/practice";
import home_sponsors from "./objects/home/sponsors";

const objectTypes = [body, mainImage, card, section, sponsor];
const homeSections = [
  home_contact,
  home_events,
  home_hero,
  home_membership,
  home_practice,
  home_sponsors
];
const documentTypes = [about, home, event, membership, team_ladies, team_men, siteSettings];

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "berlinCrocs",
  types: schemaTypes.concat([...objectTypes, ...homeSections, ...documentTypes])
});
