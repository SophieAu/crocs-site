export default {
  name: "about",
  type: "document",
  title: "About Page",
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
    }
  ]
};
