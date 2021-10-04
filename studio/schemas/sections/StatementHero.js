/**
 *
 * @name StatementHero Section
 * @author Alisha Garric
 *
 */
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { InternalLink } from "../components/Cta";

// __________________________________________________________________________________________

export const StatementHeroRegistry = {
  title: "Text: Statement Hero",
  name: "statementHero",
  type: "object",
};

export const StatementHeroFields = [
  {
    name: "textContent",
    title: "Text Content",
    description:
      "Use this field to create a sentence. Ideally parts of the sentence should link out to other pages, which is why its broke up into parts. If your sentence doesn't link out, choose plain text and just write the whole sentence.",
    type: "array",
    of: [
      {
        name: "plain_text",
        title: "Plain Text",
        type: "object",
        fields: [
          {
            name: "text",
            title: "Text",
            type: "string",
            validation: (validate) => validate.required(),
          },
        ],
      },
      {
        name: "textLink",
        title: "Text Link",
        type: "object",
        fields: [
          ...InternalLink(true, undefined, "Link", "link"),
          {
            title: "Hover Image",
            name: "image",
            description:
              "Add an image that will display when we hover over the link.",
            type: "image",
            validation: (validate) => validate.required(),
          },
        ],
      },
    ],
  },
  {
    name: "textAlignment",
    title: "Text Alignment",
    type: "string",
    options: {
      list: [
        { title: "Left", value: "left" },
        { title: "Right", value: "right" },
        { title: "Center", value: "center" },
      ],
    },
  },
];

export const StatementHero = {
  ...StatementHeroRegistry,
  fields: [
    ...SectionName,
    ...StatementHeroFields,
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
