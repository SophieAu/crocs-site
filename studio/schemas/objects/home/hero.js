export default {
  name: "home_hero",
  title: "Hero Section",
  type: "object",
  options: { collapsible: true },
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "bgImage", title: "Background Image", type: "image" },
    { name: "introText", title: "Intro Text", type: "body" }
  ]
};
