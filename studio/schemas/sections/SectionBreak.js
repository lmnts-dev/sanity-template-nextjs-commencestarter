/**
 *
 * @name SectionBreak Section
 * @author Alisha Garric
 *
 */
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const SectionBreakRegistry = {
  title: "Text: Section Break",
  name: "sectionBreak",
  type: "object",
};

export const SectionBreak = {
  ...SectionBreakRegistry,
  fields: [
    {
      name: "style",
      title: "Section Break Style",
      type: "string",
      options: {
        list: [
          { title: "Subtle Section Break", value: "subtle" },
          { title: "Bold Section Break", value: "bold" },
        ],
        layout: "dropdown",
      },
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
