/**
 *
 * @name AnimatedHeadline Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { Cta } from "../components/Cta";
import { Body, Caption, Headline } from "../components/TextItems";
import { SectionAccent, SectionTheme } from "../components/SectionTheme";
import { BlockStandard } from "../components/DefaultBlocks";
import { Image, ImageAltText } from "../components/ImageItems";

// __________________________________________________________________________________________

export const AnimatedHeadlineRegistry = {
  title: "Hero: Animated Headline",
  name: "animatedHeadline",
  type: "object",
};

export const AnimatedHeadline = {
  ...AnimatedHeadlineRegistry,
  fields: [
    ...SectionName,
    {
      name: "leftColumn",
      title: "Left Column",
      type: "object",
      fields: [
        {
          name: "unanimatedHeadline",
          title: "Unanimated Headline",
          description: "Unanimated headline",
          type: "string",
        },
        {
          name: "animatedHeadline",
          title: "Animated Headline",
          description: "Animated headline",
          type: "array",
          //validation: (validate) => validate.required().min(3).max(5),
          of: [...Headline],
        },
      ],
    },
    {
      name: "rightColumn",
      title: "Right Column",
      type: "object",
      fields: [...BlockStandard(false, undefined, "Body", "body"), ...Cta()],
    },
    ...Image,
    ...ImageAltText,
    {
      name: "addDecorativeElement",
      title: "Add Decorative Element",
      type: "boolean",
    },
    ...SectionSpacing,
    ...SectionAccent,
    ...SectionTheme,
  ],
};
