export default {
  name: "home_practice",
  title: "Practice Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Open Street Map URL", name: "osmUrl", type: "url" },
    { title: "Text", name: "text", type: "body" }
  ]
};
