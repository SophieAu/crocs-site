export default {
  name: "home_contact",
  title: "Contact Section",
  type: "object",
  options: { collapsible: true },
  fieldsets: [{ name: "social", title: "Social Media Handles" }],
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Text", name: "text", type: "text" },

    { title: "Social Media Text", name: "soc_med_text", type: "string" },
    { title: "Twitter", name: "twitter", type: "string", fieldset: "social" },
    { title: "Instagram", name: "instagram", type: "string", fieldset: "social" },
    { title: "Facebook", name: "facebook", type: "string", fieldset: "social" },

    { title: "Target Email", name: "email", type: "email" }
  ]
};
