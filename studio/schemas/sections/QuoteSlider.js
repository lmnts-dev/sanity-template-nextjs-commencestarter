/**
 *
 * @name QuoteSlider Section
 * @author Alisha Garric
 * @description Simple QuoteSlider Schema
 * @requires /web/sections/QuoteSlider
 *
 */
import { Author } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const QuoteSliderRegistry = {
  title: "Text: Quote Slider",
  name: "quoteSlider",
  type: "object",
};

export const QuoteSlider = {
  ...QuoteSliderRegistry,
  fields: [
    ...SectionName,
    {
      name: "slides",
      title: "Slides",
      type: "array",
      validation: (Rule) => Rule.required().min(2),
      of: [
        {
          name: "slide",
          title: "Slide",
          type: "object",
          fields: [
            {
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            ...Author,
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
