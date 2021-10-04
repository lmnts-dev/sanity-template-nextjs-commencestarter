/**
 *
 * @name Headline Section
 * @author Alisha Garric
 *
 */

import { Body, Subheadline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const HeadlineRegistry = {
  title: "Text: Header",
  name: "headline",
  type: "object",
};

export const Headline = {
  ...HeadlineRegistry,
  fields: [
    ...SectionName,
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    ...Subheadline,
    ...BlockBasic(false, undefined, "Body", "body"),
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Split", value: "split" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "dropdown",
      },
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
