/**
 *
 * @name NextGuide Section
 * @author Alisha Garric
 * @description Simple NextGuide Schema
 * @requires /web/sections/NextGuide
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const NextGuideRegistry = {
  title: "Navigational: Next Guide",
  name: "nextGuide",
  type: "object",
};

export const NextGuide = {
  ...NextGuideRegistry,
  fields: [
    ...SectionName,
    {
      name: "caption_override",
      title: "Override caption?",
      description: `If left blank, "Up Next" will be the caption`,
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      description:
        "Most times, this should be the page name you're guiding the user to.",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      title: "Internal link",
      description: "Page link you're guiding them to.",
      name: "internalLink",
      type: "reference",
      to: [{ type: "page" }],
      validation: (validate) => validate.required(),
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
