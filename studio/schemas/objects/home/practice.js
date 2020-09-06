export default {
  name: "home_practice",
  title: "Practice Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "osmUrl", title: "Open Street Map URL", type: "url" },
    { name: "text", title: "Text", type: "body" }
  ]
};
