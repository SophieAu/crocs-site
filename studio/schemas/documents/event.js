import { format } from 'date-fns';

import { required } from '../_util';

export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    { name: 'name', title: 'Event Title', type: 'string', validation: required },
    { name: 'image', title: 'Header Image', type: 'image', validation: required },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'eventCategory' }],
      validation: required,
    },
    { name: 'tag', title: 'Tag', type: 'string' },
    { name: 'startTime', title: 'Date and Time', type: 'datetime', validation: required },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'description', title: 'Description', type: 'body', validation: required },
    { name: 'excerpt', title: 'Excerpt', type: 'text', validation: required },
    { name: 'tickets', title: 'Ticket Categories', type: 'array', of: [{ type: 'ticketAmount' }] },
  ],

  preview: {
    select: {
      title: 'name',
      startTime: 'startTime',
      category: 'category.category',
      tag: 'tag',
    },
    prepare({ title = 'No title', startTime, category, tag }) {
      const dateSegment = format(startTime, 'YYYY-MM-DD');
      return {
        title: `${dateSegment} ${title}`,
        subtitle: `${category} – ${tag}`,
      };
    },
  },
};
