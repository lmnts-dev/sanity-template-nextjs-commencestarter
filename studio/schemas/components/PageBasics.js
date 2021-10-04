// __________________________________________________________________________________________

/**
 *
 * @name PageBasics
 * @author Alisha Garric
 *
 */

export const PageBasics = [
  {
    name: "title",
    type: "string",
    title: "Title",
    validation: (validate) => validate.required(),
  },
  {
    name: "slug",
    type: "slug",
    title: "Slug",
    options: {
      source: "title",
      maxLength: 96,
    },
    validation: (validate) => validate.required(),
  },
];
