import { required } from "../_util";

export default {
  name: "sponsor",
  title: "sponsor",
  type: "object",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "website", title: "Website", type: "url" },
    { name: "logo", title: "Logo", type: "image", validation: required }
  ]
};
