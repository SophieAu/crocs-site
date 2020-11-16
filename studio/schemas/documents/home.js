import { required } from '../_util';

export default {
  name: 'homepage',
  type: 'document',
  title: 'Hompage',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: required },
    { name: 'hero', title: 'Hero Section', type: 'home_hero', validation: required },
    { name: 'practice', title: 'Practice Section', type: 'home_practice', validation: required },
    {
      name: 'events',
      title: 'Event Section',
      type: 'home_events',
      description: 'The 3 next upcoming events will be inserted here automatically',
      validation: required,
    },
    {
      name: 'membership',
      title: 'Membership Section',
      type: 'home_membership',
      validation: required,
    },
    { name: 'contact', title: 'Contact Section', type: 'home_contact', validation: required },
    { name: 'sponsors', title: 'Sponsor Section', type: 'home_sponsors', validation: required },
  ],
};
