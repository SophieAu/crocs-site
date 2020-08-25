export default {
  name: "ladies",
  type: "document",
  title: "Team Page: Ladies",
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
      title: "Cards",
      name: "content",
      type: "array",
      of: [{ type: "card" }]
    }
  ]
};
