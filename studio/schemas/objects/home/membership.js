export default {
  name: "home_membership",
  title: "Membership Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { title: "Title", name: "title", type: "string" }
    // TODO: figure this out
    // { title: "Membership", name: "membership", type: "reference", to: [{ type: "person" }] }
  ]
};
