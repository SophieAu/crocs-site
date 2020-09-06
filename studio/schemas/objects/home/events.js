export default {
  name: "home_events",
  title: "Event Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "emptyText",
      title: "No Event Text",
      type: "text",
      description: "What to display if there are no upcoming events"
    },
    { name: "buttonText", title: "More Button Text", type: "string" }
  ]
};
