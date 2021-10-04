/**
 *
 * @name OverlapHero Section
 * @author Alisha Garric
 *
 */

import { HeadlineReq, Subheadline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";
import { ImageReq } from "../components/ImageItems";

// __________________________________________________________________________________________

export const OverlapHeroRegistry = {
  title: "Image: Overlap Hero",
  name: "overlapHero",
  type: "object",
};

export const OverlapHero = {
  ...OverlapHeroRegistry,
  fields: [
    ...SectionName,
    ...HeadlineReq,
    ...Subheadline,
    ...ImageReq,
    ...SectionTheme,
  ],
};
