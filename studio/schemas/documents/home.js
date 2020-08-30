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
    { name: "title", type: "string", title: "Title" },
    { name: "hero", type: "home_hero", title: "Hero Section" },
    { name: "practice", type: "home_practice", title: "Practice Section" },
    {
      name: "events",
      type: "home_events",
      title: "Event Section",
      description: "The 3 next upcoming events will be inserted here automatically"
    },
    { name: "membership", type: "home_membership", title: "Membership Section" },
    { name: "contact", type: "home_contact", title: "Contact Section" },
    { name: "sponsors", type: "home_sponsors", title: "Sponsor Section" }
  ]
};
