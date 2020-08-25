export default {
  name: "section",
  title: "Section",
  type: "object",
  options: {
    hotspot: true
  },
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Cards",
      name: "card",
      type: "array",
      of: [{ type: "card" }]
    }
  ]
};
