/**
 *
 * @name BlockQuote Section
 * @author Alisha Garric
 *
 */

import { Author, Body } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme, SectionThemeSubtle } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const BlockQuoteRegistry = {
  title: "Text: Block Quote",
  name: "blockQuote",
  type: "object",
};

export const BlockQuote = {
  ...BlockQuoteRegistry,
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
    ...SectionSpacing,
    ...SectionThemeSubtle,
  ],
};
