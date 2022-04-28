/**
 *
 * @name SimpleHero Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { Cta } from "../components/Cta";
import { Body, Caption, Headline, HeadlineReq } from "../components/TextItems";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const SimpleHeroRegistry = {
  title: "Hero: Simple Hero",
  name: "simpleHero",
  type: "object",
};

export const SimpleHero = {
  ...SimpleHeroRegistry,
  fields: [
    ...SectionName,
    ...HeadlineReq,
    ...BlockBasic(false, undefined, "Body", "body"),
    ...Cta(),
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
