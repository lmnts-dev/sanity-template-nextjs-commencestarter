/**
 *
 * @name SplitText Section
 * @author Alisha Garric
 *
 */

import { BlockArticle } from "../components/DefaultBlocks";
import { SectionName } from "../components/SectionName";
import { SectionThemeSubtle } from "../components/SectionTheme";
import { SectionSpacing } from "../components/Spacing";

// __________________________________________________________________________________________

export const SplitTextRegistry = {
  title: "Text: Split Text",
  name: "splitText",
  type: "object",
};

export const SplitText = {
  ...SplitTextRegistry,
  fields: [
    ...SectionName,
    {
      title: "Left Side Text",
      name: "leftSideText",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          title: "Text",
          name: "textContent",
          type: "object",
          fields: [
            ...BlockArticle(true),
            {
              title: "Icon",
              name: "icon",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title: "Right Side Text",
      name: "rightSideText",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          title: "Text",
          name: "textContent",
          type: "object",
          fields: [
            ...BlockArticle(true),
            {
              title: "Icon",
              name: "icon",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title: "Add featured block to the right side?",
      name: "featuredBlock",
      description:
        "Cool block of text displayed under the right side text, offset from the section, with a fun decorative element. Only use this when you really want the text to pop",
      type: "array",
      validation: (validate) => validate.max(1),
      of: [
        {
          title: "Text",
          name: "textContent",
          type: "object",
          fields: [...BlockArticle(true)],
        },
      ],
    },
    {
      title: "Emphasize left side with different background color?",
      name: "leftEmphasis",
      description:
        "If you chose the default theme below, the background color would be gray. If you chose the gray theme below, the background color would be white.",
      type: "boolean",
    },
    {
      title: "Layout",
      name: "layout",
      type: "string",
      options: {
        list: [
          { title: "Left Side Wider (default)", value: "default" },
          { title: "Right Side Wider", value: "right-offset" },
          { title: "Sides Equal Width", value: "no-offset" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Alignment",
      name: "alignment",
      type: "string",
      options: {
        list: [
          { title: "Center (default)", value: "default" },
          { title: "To The Top", value: "top" },
          { title: "To The Bottom", value: "bottom" },
        ],
        layout: "radio",
      },
    },
    ...SectionThemeSubtle,
    ...SectionSpacing,
  ],
};
