export default {
  name: "home_sponsors",
  title: "Sponsor Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Sponsors", name: "sponsors", type: "array", of: [{ type: "sponsor" }] }
  ]
};
