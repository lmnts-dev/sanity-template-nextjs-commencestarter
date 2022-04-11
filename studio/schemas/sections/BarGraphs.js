/**
 *
 * @name BarGraphs Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { Color, SectionThemeSubtle } from "../components/SectionTheme";
import { Body, Headline } from "../components/TextItems";

// __________________________________________________________________________________________

export const BarGraphsRegistry = {
  title: "Graph: Bar",
  name: "barGraphs",
  type: "object",
};

export const BarGraphs = {
  ...BarGraphsRegistry,
  fields: [
    ...SectionName,
    {
      name: "graphs",
      title: "Bar Graphs",
      type: "array",
      description:
        "Each bar graph is one third wide, so you can only show 3 bar graphs in one row. If you add more than 3 bar graphs, they will wrap to the next row.",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          title: "Graph",
          name: "graph",
          type: "object",
          fields: [
            ...Headline,
            ...Body,
            {
              name: "bars",
              title: "Bars",
              type: "array",
              of: [
                {
                  name: "bar",
                  title: "Bar",
                  type: "object",
                  validation: (validate) => validate.required(),
                  fields: [
                    {
                      name: "percentage",
                      title: "Percentage of bar to fill in",
                      validation: (validate) => validate.required(),
                      type: "number",
                    },
                    ...Color,
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
