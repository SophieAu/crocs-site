export default {
  name: "membership",
  type: "document",
  title: "Membership Page",
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
