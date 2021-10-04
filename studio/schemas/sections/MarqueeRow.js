/**
 *
 * @name MarqueeRow Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const MarqueeRowRegistry = {
  title: "Text: Marquee Row",
  name: "marqueeRow",
  type: "object",
};

export const MarqueeRow = {
  ...MarqueeRowRegistry,
  fields: [
    ...SectionName,
    {
      name: "words",
      title: "Words/Phrases",
      description: "Words and phrases shown in marquee.",
      type: "array",
      of: [
        {
          name: "word",
          title: "Word/Phrase",
          type: "string",
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
