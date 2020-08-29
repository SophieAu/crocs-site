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
    // about section

    // practice section

    // event section

    // membershiip section

    // contact section

    // footer section (ALSO: PAGES FOR FOOTER )
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [{ type: "section" }]
    }
  ]
};
