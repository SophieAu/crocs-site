export default {
  name: "card",
  title: "Card",
  type: "object",
  options: { hotspot: true },
  fields: [{ title: "Content", name: "cardBody", type: "body" }],
  preview: {
    select: { blocks: "card_body" },
    prepare(value) {
      const block = (value.blocks || []).find(block => block._type === "block");
      return {
        title: block
          ? block.children
              .filter(child => child._type === "span")
              .map(span => span.text)
              .join("")
          : "No title"
      };
    }
  }
};
