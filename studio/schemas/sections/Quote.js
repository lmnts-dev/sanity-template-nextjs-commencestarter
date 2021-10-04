/**
 *
 * @name Quote Section
 * @author Alisha Garric
 *
 */

import { Author, Body } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { Cta, Ctas } from "../components/Cta";
import { Image, ImageAltText } from "../components/ImageItems";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const QuoteRegistry = {
  title: "Text: Quote",
  name: "Quote",
  type: "object",
};

export const Quote = {
  ...QuoteRegistry,
  fields: [
    ...SectionName,
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    ...Author,
    ...Image,
    ...ImageAltText,
    {
      name: "layout",
      title: "Layout",
      type: "string",
      description: "Change quote layout.",
      options: {
        list: [
          { title: "Centered", value: "default" },
          { title: "Split", value: "split" },
        ],
        layout: "dropdown",
      },
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
