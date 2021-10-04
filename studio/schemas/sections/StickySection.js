/**
 *
 * @name StickySection Section
 * @author Alisha Garric
 *
 */
import { ImageReq } from "../components/ImageItems";
import { BodyReq, Headline, Subheadline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockStandard } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const StickySectionRegistry = {
  title: "Image: Sticky Section",
  name: "stickySection",
  type: "object",
};

export const StickySection = {
  ...StickySectionRegistry,
  fields: [
    ...SectionName,
    ...BlockStandard(true, undefined, "Body", "body"),
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [...ImageReq],
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Image Left", value: "left" },
          { title: "Image Right", value: "right" },
        ],
        layout: "dropdown",
      },
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
