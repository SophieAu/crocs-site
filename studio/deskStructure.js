import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdEventAvailable, MdDesktopMac } from "react-icons/lib/md";

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
  "event",
  "homepage",
  "membership",
  "ladies",
  "men",
  "about",
  "siteSettings"
];

export default () =>
  S.list()
    .title("Content")
    .items([
      page("Settings", "siteSettings", MdSettings),
      page("Homepage", "homepage"),
      page("About Page", "about"),
      page("Team Page - Ladies", "ladies"),
      page("Team Page - Men", "men"),
      page("Membership Page", "membership"),
      pageList("Events", "event", MdEventAvailable),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes(definedDocTypes))
    ]);
