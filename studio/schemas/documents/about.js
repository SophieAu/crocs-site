import { required } from "../_util";

export default {
  name: "about",
  type: "document",
  title: "About Page",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "content", title: "Cards", type: "array", of: [{ type: "card" }] },
    { name: "sections", title: "Sections", type: "array", of: [{ type: "section" }] }
  ]
};
