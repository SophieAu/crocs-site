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
    { name: "tickets", title: "Ticket Categories", type: "array", of: [{ type: "categoryAmount" }]  },
    { name: "buttonText", title: "Button Text", type: "string" }
  ],
  preview: {
    select: {
      title: 'name',
      startTime: 'startTime',
      category: 'category.category',
      tag: "tag",
    },
    prepare({title = 'No title', startTime, category, tag}) {
      const dateSegment = format(startTime, 'YYYY-MM-DD')
      return {
        title: `${dateSegment} ${title}`,
        subtitle: `${category} – ${tag}`
      }
    }
  }
};
