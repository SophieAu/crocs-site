export default {
  name: "homepage",
  type: "document",
  title: "Hompage",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [{ type: "section" }]
    }
  ]
};
