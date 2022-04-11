/**
 *
 * @name TextSlider Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const TextSliderRegistry = {
  title: "Slider: Text",
  name: "textSlider",
  type: "object",
};

export const TextSlider = {
  ...TextSliderRegistry,

  fields: [
    ...SectionName,
    {
      name: "textSlides",
      title: "Text Slides",
      type: "array",
      validation: (Rule) => Rule.required().min(2),
      of: [
        {
          name: "slide",
          title: "Slide",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            ...BlockBasic(false, undefined, "Body", "body"),
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
