import { required } from '../../_util';

export default {
  name: 'home_events',
  title: 'Event Section',
  type: 'object',
  options: { collapsible: true },
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: required },
    {
      name: 'emptyText',
      title: 'No Event Text',
      type: 'text',
      description: 'What to display if there are no upcoming events',
      validation: required,
    },
    { name: 'moreButtonText', title: 'More Button Text', type: 'string', validation: required },
    { name: 'signupButtonText', title: 'Signup Button Text', type: 'string', validation: required },
    {
      name: 'signupSuccess',
      title: 'Signup Success Message',
      type: 'string',
      validation: required,
    },
    {
      name: 'signupError',
      title: 'Signup Error Message',
      type: 'string',
      validation: required,
    },
  ],
};
