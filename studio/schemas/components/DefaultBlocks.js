// __________________________________________________________________________________________

/**
 *
 * @name DefaultBlocks
 * @author Alisha Garric
 * @description
 * Different WYSIWYG blocks for different use cases
 *
 */

/* For basic functionality like inline linking and bolding, excludes images and headings */

export const BlockBasic = (
  required = false,
  description = undefined,
  title = "Content",
  name = "blockBasic"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "article" },
                      { type: "articleCategory" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ];
};

/* For standard functionality like inline linking and bolding and one headline size, excludes images and other heading sizes */
export const BlockStandard = (
  required = false,
  description = undefined,
  title = "Content",
  name = "blockStandard"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "article" },
                      { type: "articleCategory" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ];
};

/* For standard article functionality like inline linking and bolding and most headline sizes, excludes images and h1 heading size */
export const BlockArticle = (
  required = false,
  description = undefined,
  title = "Contnet",
  name = "blockArticle"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "article" },
                      { type: "articleCategory" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ];
};

/* For standard functionality plus images, like inline linking and bolding and one headline size, excludes other heading sizes */
export const BlockStandardImage = (
  required = false,
  description = undefined,
  title = "Content",
  name = "blockStandardImage"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "article" },
                      { type: "articleCategory" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
        { type: "image" },
      ],
    },
  ];
};

/* For simple functionality only like inline linking and bolding */

export const BlockSimple = (
  required = false,
  description = undefined,
  title = "Content",
  name = "blockSimple"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          lists: [],
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [ {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "article" },
                      { type: "articleCategory" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ];
};

/* For all available functionality plus images */
export const BlockAdvanced = (
  required = false,
  description = undefined,
  title = "Content",
  name = "blockAdvanced"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "article" },
                      { type: "articleCategory" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
        { type: "image" },
      ],
    },
  ];
};
