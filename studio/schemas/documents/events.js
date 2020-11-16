import { required } from '../_util';

export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: required },
    { name: 'description', title: 'Description', type: 'text', validation: required },
    {
      name: 'emptyText',
      title: 'No Event Text',
      type: 'text',
      description: 'What to display if there are no upcoming events',
      validation: required,
    },
  ],
};
