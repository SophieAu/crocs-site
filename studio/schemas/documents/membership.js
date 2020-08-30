export default {
  name: "membership",
  type: "document",
  title: "Membership Page",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", type: "string", title: "Page Title" },
    { name: "name", type: "string", title: "Card Title" },
    { name: "image", type: "image", title: "Card Image" },
    { name: "description", type: "body", title: "Description" }
  ]
};
