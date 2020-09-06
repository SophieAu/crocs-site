export default {
  name: "home_contact",
  title: "Contact Section",
  type: "object",
  options: { collapsible: true },
  fieldsets: [{ name: "social", title: "Social Media Handles" }],
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "text", title: "Text", type: "text" },

    { name: "socialMediaText", title: "Social Media Text", type: "string" },
    { name: "twitter", title: "Twitter", type: "string", fieldset: "social" },
    { name: "instagram", title: "Instagram", type: "string", fieldset: "social" },
    { name: "facebook", title: "Facebook", type: "string", fieldset: "social" },

    { name: "email", title: "Target Email", type: "email" }
  ]
};
