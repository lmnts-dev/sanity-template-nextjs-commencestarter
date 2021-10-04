/**
 *
 * @name LogosRow Section
 * @author Alisha Garric
 * @description Simple LogosRow Schema
 * @requires /web/sections/LogosRow
 *
 */
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const LogosRowRegistry = {
  title: "Image: Logos Row",
  name: "logosRow",
  type: "object",
};

export const LogosRow = {
  ...LogosRowRegistry,
  fields: [
    ...SectionName,
    {
      name: "logos",
      title: "Logos",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          name: "logo",
          title: "Logo",
          type: "object",
          fields: [
            {
              name: "logoName",
              title: "Logo Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "logoImage",
              title: "Logo Image",
              validation: (Rule) => Rule.required(),
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "logoHeight",
      title: "Logo Height",
      validation: (Rule) => Rule.required(),
      type: "string",
      options: {
        list: [
          { title: "Large", value: "default" },
          { title: "Medium", value: "medium" },
          { title: "Small", value: "small" },
        ],
        layout: "radio",
      },
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
