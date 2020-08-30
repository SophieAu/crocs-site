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
    // hero section
    {
      name: "hero",
      type: "home_hero",
      title: "Hero Section"
    },
    // practice section
    {
      name: "practice",
      type: "home_practice",
      title: "Practice Section"
    },

    // event section
    {
      name: "events",
      type: "home_events",
      title: "Event Section",
      description: "The 3 next upcoming events will be inserted here automatically"
    },

    // membershiip section
    {
      name: "membership",
      type: "home_membership",
      title: "Membership Section"
    },

    // contact section
    {
      name: "contact",
      type: "home_contact",
      title: "Contact Section"
    },

    {
      name: "sponsors",
      type: "home_sponsors",
      title: "Sponsor Section"
    }

    // footer section (ALSO: PAGES FOR FOOTER )
    // {
    //   title: "Sections",
    //   name: "sections",
    //   type: "array",
    //   of: [{ type: "section" }]
    // }
  ]
};
