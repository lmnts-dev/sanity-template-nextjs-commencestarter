/**
 *
 * @name GridRow Section
 * @author Alisha Garric
 *
 */
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const GridRowRegistry = {
  title: "Image: Image Grid", //Used to be called Grid Row
  name: "gridRow",
  type: "object",
};

export const GridRow = {
  ...GridRowRegistry,
  fields: [
    ...SectionName,
    {
      name: "items",
      title: "Grid Items",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          title: "Grid Item",
          type: "object",
          fields: [
            {
              name: "width",
              title: "Width",
              type: "string",
              options: {
                list: [
                  { title: "25%", value: "25" },
                  { title: "33%", value: "33" },
                  { title: "50%", value: "50" },
                  { title: "66%", value: "66" },
                  { title: "75%", value: "75" },
                  { title: "100%", value: "100" },
                ],
                layout: "dropdown",
              },
            },
            {
              name: "orientation",
              title: "Orientation",
              type: "string",
              options: {
                list: [
                  { title: "Cover", value: "cover" },
                  { title: "Contain", value: "contain" },
                ],
                layout: "radio",
              },
            },
            {
              title: "Image",
              name: "image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "meta",
              title: "Metadata",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
