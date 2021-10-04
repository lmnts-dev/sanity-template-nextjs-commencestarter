/**
 *
 * @name Accordions Section
 * @author Alisha Garric
 * @description Simple Accordions Schema
 * @requires /web/sections/Accordions
 *
 */

import { Body, Headline, HeadlineReq } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { AddStickyHeader } from "../components/StickyHeader";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const AccordionsRegistry = {
  title: "Text: Accordions",
  name: "accordionListings",
  type: "object",
};

export const Accordions = {
  ...AccordionsRegistry,
  fields: [
    ...SectionName,
    {
      name: "accordions",
      title: "Accordions",
      type: "array",
      validation: (validate) => validate.min(1),
      of: [
        {
          name: "accordion",
          title: "Accordion",
          type: "object",
          fields: [
            ...HeadlineReq,
            ...BlockBasic(false, undefined, "Body", "body"),
            {
              name: "blurbs",
              type: "array",
              description: "Shown after accordion expands",
              title: "Blurbs",
              validation: (validate) => validate.min(1).max(2),
              of: [
                {
                  name: "blurb",
                  type: "object",
                  fields: [...Headline, ...Body],
                },
              ],
            },
          ],
        },
      ],
    },
    ...AddStickyHeader,
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
