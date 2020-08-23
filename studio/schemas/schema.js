// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import about from "./documents/about";
import event from "./documents/event";
import home from "./documents/home";
import membership from "./documents/membership";
import team_ladies from "./documents/team_ladies";
import team_men from "./documents/team_men";
import siteSettings from "./documents/siteSettings";

import mainImage from "./objects/mainImage";

const objectTypes = [mainImage];
const documentTypes = [about, home, event, membership, team_ladies, team_men, siteSettings];

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "berlinCrocs",
  types: schemaTypes.concat([...objectTypes, ...documentTypes]),
});
