/**
 *
 * @name Cta
 * @author Alisha Garric
 *
 */

export const Label = [
  {
    title: "Label",
    name: "label",
    type: "string",
    validation: (validate) => validate.required(),
  },
];

export const ExternalLink = (
  required = false,
  description = undefined,
  title = "External Link",
  name = "externalLink"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "object",
      fields: [
        ...Label,
        {
          title: "External link",
          name: "link",
          type: "url",
          validation: (validate) => validate.required(),
        },
        {
          title: "Link opening behavior",
          name: "target",
          type: "string",
          description: "By default, external links open in new tabs.",
          options: {
            list: [
              { title: "Open in new tab", value: "_blank" },
              { title: "Open in same tab ", value: "_self" },
              { title: "Download file", value: "download" },
            ],
            layout: "radio",
          },
        },
      ],
    },
  ];
};

//TODO: What about generated pages like home and blog?
export const InternalLink = (
  required = false,
  description = undefined,
  title = "Internal Link",
  name = "internalLink"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "object",
      fields: [
        ...Label,
        {
          title: "Internal link",
          description: "Use this to link between pages on the website",
          name: "internalLink",
          type: "reference",
          to: [
            //If you add more page types here make sure you add that possibility to generatePath.tsx
            { type: "page" },
            { type: "article" },
            { type: "articleCategory" },
          ],
          validation: (validate) => validate.required(),
        },
      ],
    },
  ];
};

export const PhoneLink = (
  required = false,
  description = undefined,
  title = "Phone Link",
  name = "phoneLink"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "object",
      fields: [
        ...Label,
        {
          title: "Phone link",
          name: "link",
          type: "string",
          validation: (validate) => validate.required().max(10).min(10),
          description:
            "Enter the 10 digit phone number, without dashes or spaces.",
        },
      ],
    },
  ];
};

export const EmailLink = (
  required = false,
  description = undefined,
  title = "Email Link",
  name = "emailLink"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "object",
      fields: [
        ...Label,
        {
          title: "Email",
          name: "link",
          type: "email",
          validation: (validate) => validate.required(),
          description: "Enter the email address.",
        },
      ],
    },
  ];
};

export const Ctas = (
  required = false,
  description = undefined,
  title = "Call to actions",
  name = "ctas"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) =>
        required ? validate.required().min(1) : validate,
      type: "array",
      of: [
        ...InternalLink(),
        ...ExternalLink(),
        ...PhoneLink(),
        ...EmailLink(),
      ],
    },
  ];
};

export const Cta = (
  required = false,
  description = undefined,
  title = "Call to action",
  name = "cta"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) =>
        required ? validate.required().min(1).max(1) : validate.max(1),

      type: "array",
      of: [
        ...InternalLink(),
        ...ExternalLink(),
        ...PhoneLink(),
        ...EmailLink(),
      ],
    },
  ];
};

export const LabeledLinks = [
  {
    title: "Label",
    name: "label",
    type: "string",
    validation: (validate) => validate.required(),
  },
  {
    title: "Links",
    name: "links",
    type: "array",
    of: [...InternalLink(), ...ExternalLink(), ...PhoneLink(), ...EmailLink()],
    validation: (validate) => validate.required().min(1),
  },
];
