export default {
  name: "home_sponsors",
  title: "Sponsor Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "sponsors", title: "Sponsors", type: "array", of: [{ type: "sponsor" }] }
  ]
};
