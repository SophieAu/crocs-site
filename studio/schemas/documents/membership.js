export default {
  name: "membership",
  type: "document",
  title: "Membership Page",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", title: "Page Title", type: "string" },
    { name: "name", title: "Card Title", type: "string" },
    { name: "image", title: "Card Image", type: "image" },
    { name: "cateogries", title: "Categories", type: "array", of: [{ type: "ticketAmount" }]  },
    { name: "description", title: "Description", type: "body" },
    { name: "buttonText", title: "Button Text", type: "string" }
  ]
};
