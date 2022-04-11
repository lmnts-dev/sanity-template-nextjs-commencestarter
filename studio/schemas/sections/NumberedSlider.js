/**
 *
 * @name NumberedSlider Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { HeadlineReq, Subheadline } from "../components/TextItems";
import { BlockBasic } from "../components/DefaultBlocks";
import { Ctas } from "../components/Cta";

// __________________________________________________________________________________________

export const NumberedSliderRegistry = {
  title: "Slider: Numbered Text Blocks",
  name: "numberedSlider",
  type: "object",
};

export const NumberedSlider = {
  ...NumberedSliderRegistry,
  fields: [
    ...SectionName,
    ...HeadlineReq,
    {
      title: "Slides",
      name: "items",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          name: "item",
          title: "Slide",
          type: "object",
          fields: [
            ...HeadlineReq,
            ...Subheadline,
            ...BlockBasic(false, undefined, "Body"),
            ...Ctas(),
            {
              name: "numberOverride",
              title: "Override slide number?",
              validation: (validate) => validate.max(3),
              description:
                "By default, slides are labeled in double-digit ascending order starting with 01",
              type: "string",
            },
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
