import { required } from "../_util";

export default {
  name: "membership",
  type: "document",
  title: "Membership Page",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", title: "Page Title", type: "string", validation: required },
    { name: "name", title: "Card Title", type: "string", validation: required },
    { name: "image", title: "Card Image", type: "image", validation: required },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "ticketAmount" }],
      validation: required
    },
    { name: "description", title: "Description", type: "body", validation: required },
    { name: "buttonText", title: "Button Text", type: "string" }
  ]
};
