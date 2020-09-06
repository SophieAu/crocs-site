import { format } from "date-fns";

export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    { name: "name", title: "Event Title", type: "string" },
    { name: "image", title: "Header Image", type: "image" },
    { name: "category", title: "Category", type: "reference", to: [{ type: "eventCategory" }] },
    { name: "tag", title: "Tag", type: "string" },
    { name: "startTime", title: "Date and Time", type: "datetime" },
    { name: "location", title: "Location", type: "string" },
    { name: "description", title: "Description", type: "body" },
    { name: "excerpt", title: "Excerpt", type: "text" },
  ]
};

/*
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
  */
