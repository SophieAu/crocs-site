export default {
  name: "home_hero",
  title: "Hero Section",
  type: "object",
  options: {  collapsible: true },
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Subtitle", name: "subtitle", type: "string" },
    { title: "Background Image", name: "bg_image", type: "image" },
    { title: "Intro Text", name: "intro_text", type: "body" }
  ]
};
