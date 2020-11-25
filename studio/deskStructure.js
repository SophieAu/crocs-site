import S from '@sanity/desk-tool/structure-builder';
import { MdDesktopMac, MdEventAvailable, MdGroup, MdSettings } from 'react-icons/lib/md';

const hiddenDocTypes = defined => listItem => !defined.includes(listItem.getId());

const page = (title, id, icon) =>
  S.listItem()
    .title(title)
    .child(
      S.editor()
        .id(id)
        .schemaType(id)
        .documentId(id)
    )
    .icon(icon || MdDesktopMac);

const pageList = (title, id, icon) =>
  S.listItem()
    .title(title)
    .schemaType(id)
    .child(S.documentTypeList(id).title(title))
    .icon(icon);

const definedDocTypes = [
  'event',
  'homepage',
  'membership',
  'ladies',
  'men',
  'about',
  'siteSettings',
  'eventCategory',
];

export default () =>
  S.list()
    .title('Content')
    .items([
      page('General Settings', 'siteSettings', MdSettings),
      S.divider(),
      S.divider(),
      page('Homepage', 'homepage'),
      page('About Page', 'about'),
      page('Team Page - Ladies', 'ladies'),
      page('Team Page - Men', 'men'),
      S.divider(),
      page('Membership', 'membership', MdGroup),
      pageList('Events', 'event', MdEventAvailable),
      pageList('Event Categories', 'eventCategory', MdSettings),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes(definedDocTypes)),
    ]);
