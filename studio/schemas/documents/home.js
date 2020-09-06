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
    { name: "title", title: "Title", type: "string" },
    { name: "hero", title: "Hero Section", type: "home_hero" },
    { name: "practice", title: "Practice Section", type: "home_practice" },
    {
      name: "events",
      title: "Event Section",
      type: "home_events",
      description: "The 3 next upcoming events will be inserted here automatically"
    },
    { name: "membership", title: "Membership Section", type: "home_membership" },
    { name: "contact", title: "Contact Section", type: "home_contact" },
    { name: "sponsors", title: "Sponsor Section", type: "home_sponsors" }
  ]
};
