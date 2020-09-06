export default {
  name: "events",
  type: "document",
  title: "Events",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "emptyText",
      title: "No Event Text",
      type: "text",
      description: "What to display if there are no upcoming events"
    }
  ]
};
