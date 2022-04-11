/**
 *
 * @name TeamGrid Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { Cta } from "../components/Cta";
import { Body, Caption, Headline, Subheadline } from "../components/TextItems";
import {
  SectionTheme,
  SectionAccent,
  SectionThemeSubtle,
} from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";
import {
  Image,
  ImageAltText,
  ImageAltTextReq,
  ImageReq,
} from "../components/ImageItems";
import { string } from "prop-types";

// __________________________________________________________________________________________

export const TeamGridRegistry = {
  title: "Image: Team Grid",
  name: "teamGrid",
  type: "object",
};

export const TeamGrid = {
  ...TeamGridRegistry,
  fields: [
    ...SectionName,
    {
      name: "items",
      title: "Team Grid Items",
      description:
        "Displayed in rows of three on desktop, rows of two on tablet and rows of one on mobile. You can use the 'Blank Space' item to influence how the layout is displayed on desktop and tablet/mobile by using the 'Blank Space' in spaces on desktop, but hiding them on tablet/mobile.",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          name: "gridImageItem",
          title: "Image",
          type: "object",
          fields: [...ImageReq, ...ImageAltTextReq],
        },
        {
          name: "gridLabelItem",
          title: "Label",
          type: "object",
          fields: [
            {
              validation: (validate) => validate.required(),
              name: "label",
              title: "Label",
              type: "string",
            },
          ],
        },
        {
          name: "gridBlankItem",
          title: "Blank Space",
          type: "object",
          fields: [
            {
              name: "tabletVisibility",
              title:
                "Hide this on tablet? By default, this will be hidden on mobile.",
              type: "boolean",
            },
            {
              name: "desktopVisibility",
              title: "Hide this on desktop?",
              type: "boolean",
            },
          ],
          preview: {
            prepare: () => {
              return {
                title: "Blank Space",
              };
            },
          },
        },
        {
          name: "gridContentItem",
          title: "Content",
          type: "object",
          fields: [
            ...Headline,
            ...Subheadline,
            ...SectionAccent,
            ...BlockBasic(false, undefined, "Body", "body"),
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionThemeSubtle,
  ],
};
