/**
 *
 * @name AnimatedStats Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionAccent, SectionTheme } from "../components/SectionTheme";
import { BlockStandard } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const AnimatedStatsRegistry = {
  title: "Text: Animated Stats",
  name: "animatedStats",
  type: "object",
};

export const AnimatedStats = {
  ...AnimatedStatsRegistry,
  fields: [
    ...SectionName,
    ...BlockStandard(true, undefined, "Headline"),
    {
      name: "stats",
      title: "Stats",
      type: "array",
      validation: (validate) => validate.required().min(3),
      of: [
        {
          name: "stat",
          title: "Stat",
          type: "object",
          fields: [
            {
              name: "number",
              title: "Number/Percentage",
              description: "Include the unit.",
              type: "string",
              validation: (validate) => validate.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
          ],
        },
      ],
    },
    ...SectionAccent,
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
