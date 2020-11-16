import { required } from '../_util';

export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  options: { hotspot: true },
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: required },
    { name: 'card', title: 'Cards', type: 'array', of: [{ type: 'card' }], validation: required },
  ],
};
