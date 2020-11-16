import { required } from "../../_util";

export default {
  name: "home_practice",
  title: "Practice Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    { name: "osmUrl", title: "Open Street Map URL", type: "url", validation: required },
    { name: "text", title: "Text", type: "body", validation: required }
  ]
};
