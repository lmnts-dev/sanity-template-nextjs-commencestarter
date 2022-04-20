/**
 *
 * @name SolutionsLinkListings Section
 * @author Alisha Garric
 * @description Simple SolutionsLinkListings Schema
 * @requires /web/sections/SolutionsLinkListings
 *
 */

import { Headline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";
import { Cta, Ctas } from "../components/Cta";

// __________________________________________________________________________________________

export const SolutionsLinkListingsRegistry = {
  title: "Solutions: Link Listings",
  name: "solutionsLinkListings",
  type: "object",
};

export const SolutionsLinkListings = {
  ...SolutionsLinkListingsRegistry,
  fields: [
    ...SectionName,
    ...Headline,
    ...BlockBasic(false, undefined, "Body"),
    ...Cta(),
    /*
    {
      name: "solutions",
      title: "Solutions",
      description: "Add and order solutions here.",
      type: "array",
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: "reference",
          name: "solution",
          to: [{ type: "solution" }],
        },
      ],
    }*/
    ...SectionTheme,
    ...SectionSpacing,
  ],
};
