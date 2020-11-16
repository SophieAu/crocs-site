import { required } from '../../_util';

export default {
  name: 'home_hero',
  title: 'Hero Section',
  type: 'object',
  options: { collapsible: true },
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: required },
    { name: 'subtitle', title: 'Subtitle', type: 'string', validation: required },
    { name: 'bgImage', title: 'Background Image', type: 'image', validation: required },
    { name: 'introText', title: 'Intro Text', type: 'body', validation: required },
  ],
};
