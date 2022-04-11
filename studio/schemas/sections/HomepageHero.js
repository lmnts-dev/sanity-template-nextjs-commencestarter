/**
 *
 * @name HomepageHero Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic, BlockSimple } from "../components/DefaultBlocks";
import { Cta } from "../components/Cta";

// __________________________________________________________________________________________

export const HomepageHeroRegistry = {
  title: "Image: Homepage Hero",
  name: "homepageHero",
  type: "object",
};

export const HomepageHero = {
  ...HomepageHeroRegistry,
  fields: [
    ...SectionName,
    ...BlockSimple(
      true,
      "This should only be one sentence, or a small paragraph. Multiple paragraphs will cause bad SEO performance.",
      "Headline",
      "blockH1"
    ),
    ...BlockBasic(false, undefined, "Body"),
    ...Cta(),
    ...BlockSimple(
      true,
      "Shown in second of 2 sections included in this hero.",
      "Second Headline",
      "blockH2"
    ),
    ...SectionTheme,
    {
      name: "firstSectionTheme",
      type: "string",
      title: "Alternate Section Theme",
      description:
        "If chosen, it will be applied to the first of 2 sections included in this hero.",
      options: {
        list: [
          { title: "Off-White (Default)", value: "default" },
          { title: "Tan", value: "tan" },
          { title: "Black", value: "dark" },
          { title: "White", value: "light" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
