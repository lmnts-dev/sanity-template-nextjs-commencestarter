// __________________________________________________________________________________________

/**
 *
 * @name TextItems
 * @author Alisha Garric
 *
 */

export const Headline = [
  {
    name: "headline",
    title: "Headline",
    type: "string",
  },
];

export const HeadlineReq = [
  {
    name: "headline",
    title: "Headline",
    type: "string",
    validation: (validate) => validate.required(),
  },
];

export const Subheadline = [
  {
    name: "subheadline",
    title: "Subheadline",
    type: "string",
  },
];

export const SubheadlineReq = [
  {
    name: "subheadline",
    title: "Headline",
    type: "string",
    validation: (validate) => validate.required(),
  },
];

export const Caption = [
  {
    name: "caption",
    title: "Caption",
    type: "string",
  },
];

export const CaptionReq = [
  {
    name: "caption",
    title: "Caption",
    type: "string",
    validation: (validate) => validate.required(),
  },
];

export const Body = [
  {
    name: "body",
    title: "Body",
    type: "text",
    rows: 4,
  },
];

export const BodyReq = [
  {
    name: "body",
    title: "Body",
    type: "text",
    rows: 4,
    validation: (validate) => validate.required(),
  },
];

export const Author = [
  {
    name: "author",
    title: "Author",
    type: "object",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "company",
        type: "string",
        title: "Company / Title",
      },
    ],
  },
];
