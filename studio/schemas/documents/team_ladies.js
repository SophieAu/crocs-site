import { required } from "../_util";

export default {
  name: "ladies",
  type: "document",
  title: "Team Page: Ladies",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { title: "Cards", name: "content", type: "array", of: [{ type: "card" }] },
    { title: "Sections", name: "sections", type: "array", of: [{ type: "section" }] }
  ]
};
