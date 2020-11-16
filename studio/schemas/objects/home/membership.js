import { required } from "../../_util";

export default {
  name: "home_membership",
  title: "Membership Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string", validation: required },
    {
      name: "membership",
      title: "Membership",
      type: "reference",
      to: [{ type: "membership" }],
      validation: required,
      readOnly: true
    }
  ]
};
