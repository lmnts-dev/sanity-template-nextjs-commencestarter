/**
 *
 * @name ColumnContent Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { Cta } from "../components/Cta";
import { Body, Caption, Headline } from "../components/TextItems";
import { SectionTheme } from "../components/SectionTheme";
import { BlockStandard } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const ColumnContentRegistry = {
  title: "Text: Column Content",
  name: "columnContent",
  type: "object",
};

export const ColumnContent = {
  ...ColumnContentRegistry,
  fields: [
    ...SectionName,
    ...Caption,
    ...Headline,
    {
      name: "content",
      title: "Content Columns",
      description: "Columns of content.",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          name: "contentColumn",
          title: "Content Column",
          type: "object",
          fields: [
            ...Headline,
            ...BlockStandard(false, undefined, "Body", "body"),
            ...Cta(),
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
