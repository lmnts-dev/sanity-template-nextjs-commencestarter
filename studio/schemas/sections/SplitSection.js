/**
 *
 * @name SplitSection Section
 * @author Alisha Garric
 *
 */
import { ImageReq } from "../components/ImageItems";
import {
  BodyReq,
  Headline,
  HeadlineReq,
  Subheadline,
} from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";
import { Cta } from "../components/Cta";

// __________________________________________________________________________________________

export const SplitSectionRegistry = {
  title: "Image: Split Section",
  name: "splitSection",
  type: "object",
};

export const SplitSection = {
  ...SplitSectionRegistry,
  fields: [
    ...SectionName,
    ...Subheadline,
    ...HeadlineReq,
    ...BlockBasic(false, undefined, "Body", "body"),
    ...Cta(),
    {
      title: "Icon",
      name: "icon",
      description:
        "Add a max of 1. If addded, this is shown above your text content.",
      type: "array",
      validation: (Rule) => Rule.min(1).max(1),
      of: [
        {
          title: "Image",
          name: "icon",
          type: "image",
        },
      ],
    },
    ...ImageReq,
    {
      title: "Offset Logo",
      name: "offsetLogo",
      type: "image",
      description:
        "If added, this smaller image overlaps your main image, offset to the bottom left of it.",
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Image Right (default)", value: "default" },
          { title: "Image Left", value: "left" },
        ],
        layout: "dropdown",
      },
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
