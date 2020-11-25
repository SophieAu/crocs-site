import { required } from '../../_util';

export default {
  name: 'home_contact',
  title: 'Contact Section',
  type: 'object',
  options: { collapsible: true },
  fieldsets: [{ name: 'social', title: 'Social Media Handles' }],
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: required },
    { name: 'text', title: 'Text', type: 'text', validation: required },

    { name: 'socialMediaText', title: 'Social Media Text', type: 'string', validation: required },
    { name: 'twitter', title: 'Twitter', type: 'string', fieldset: 'social' },
    { name: 'instagram', title: 'Instagram', type: 'string', fieldset: 'social' },
    { name: 'facebook', title: 'Facebook', type: 'string', fieldset: 'social' },
  ],
};
