/**
 *
 * @name QuoteHero Section
 * @author Alisha Garric
 * @description Simple QuoteHero Schema
 * @requires /web/sections/QuoteHero
 *
 */
import { Cta } from "../components/Cta";
import { SectionSpacing } from "../components/Spacing";
import { Author, Body, Caption } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const QuoteHeroRegistry = {
  title: "Text: Quote Hero",
  name: "quoteHero",
  type: "object",
};

export const QuoteHero = {
  ...QuoteHeroRegistry,
  fields: [
    ...SectionName,
    ...Caption,
    {
      name: "quote",
      title: "Quote",
      type: "text", //let's keep this one as text
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    ...Author,
    ...BlockBasic(false, undefined, "Body", "body"),
    ...Cta(),
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
