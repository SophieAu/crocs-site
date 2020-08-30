export default {
  name: "siteSettings",
  type: "document",
  title: "Website Settings",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "copyrightHolder", type: "string", title: "Official Club Name" },
    { name: "footerText", type: "string", title: "Footer Text" }
  ]
};
