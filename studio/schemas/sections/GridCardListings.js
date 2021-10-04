/**
 *
 * @name GridCardListings Section
 * @author Alisha Garric
 * @description Simple GridCardListings Schema
 * @requires /web/sections/GridCardListings
 *
 */

import { ImageReq } from "../components/ImageItems";
import {
  Caption,
  Headline,
  HeadlineReq,
  Subheadline,
} from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const GridCardListingsRegistry = {
  title: "Image: Card Grid",
  name: "gridCardListings",
  type: "object",
};

export const GridCardListings = {
  ...GridCardListingsRegistry,
  fields: [
    ...SectionName,
    ...Caption,
    ...Headline,
    {
      name: "cards",
      title: "Cards",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          name: "card",
          title: "Card",
          type: "object",
          fields: [...ImageReq, ...HeadlineReq, ...Subheadline],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
