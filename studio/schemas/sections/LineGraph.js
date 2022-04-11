/**
 *
 * @name LineGraph Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { Color, SectionThemeSubtle } from "../components/SectionTheme";
import { Body, Headline } from "../components/TextItems";

// __________________________________________________________________________________________

export const LineGraphRegistry = {
  title: "Graph: Line",
  name: "lineGraph",
  type: "object",
};

export const LineGraph = {
  ...LineGraphRegistry,
  fields: [
    ...SectionName,
    ...Headline,
    ...Body,
    {
      name: "position",
      title: "Headline and body position",
      description:
        "The headline and body text can be placed on top of or next to your graph. Place it so it doesn't overlap in a way that covers important graph lines.",
      type: "string",
      options: {
        list: [
          { title: "Bottom Right of Graph (default)", value: "default" },
          { title: "Top Right of Graph", value: "top-right" },
          { title: "Bottom Left of Graph", value: "bottom-left" },
          { title: "Top Left of Graph", value: "top-left" },
          { title: "Below Graph", value: "below" },
          { title: "Above Graph", value: "above" },
        ],
        layout: "radio",
      },
    },
    {
      name: "image",
      title: "Line Graph Image",
      type: "image",
      validation: (validate) => validate.required(),
    },
    ...SectionSpacing,
    ...SectionThemeSubtle,
  ],
};
