export default {
  name: "home_membership",
  title: "Membership Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "membership", title: "Membership", type: "reference", to: [{ type: "membership" }] }
  ]
};
