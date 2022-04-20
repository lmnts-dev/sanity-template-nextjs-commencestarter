/**
 *
 * @name FaqListings Section
 * @author Alisha Garric
 * @description Simple FaqListings Schema
 * @requires /web/sections/FaqListings
 *
 */

import { HeadlineReq } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme, SectionThemeSubtle } from "../components/SectionTheme";
import { AddStickyHeader } from "../components/StickyHeader";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const FaqListingsRegistry = {
  title: "Text: FAQ",
  name: "faqListings",
  type: "object",
};

export const FaqListings = {
  ...FaqListingsRegistry,
  fields: [
    ...SectionName,
    {
      name: "faqSections",
      title: "Faq Sections",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          title: "Faq Section",
          name: "faqSection",
          type: "object",
          fields: [
            {
              type: "string",
              name: "label",
              title: "Label",
              validation: (validate) => validate.required(),
            },
            {
              title: "Faqs",
              name: "faqs",
              type: "array",
              validation: (validate) => validate.required().min(1),
              of: [
                {
                  name: "accordion",
                  title: "Accordion",
                  type: "object",
                  fields: [
                    ...HeadlineReq,
                    ...BlockBasic(true, undefined, "Body", "body"),
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionThemeSubtle,
  ],
};
