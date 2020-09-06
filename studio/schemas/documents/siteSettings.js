export default {
  name: "siteSettings",
  type: "document",
  title: "Website Settings",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "title", title: "Site Title", type: "string" },
    { name: "copyrightHolder", title: "Official Club Name", type: "string" },
    { name: "footerText", title: "Footer Text", type: "string" }
  ]
};
