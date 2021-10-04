/**
 *
 * @name Author Sanity.io Schema
 * @author Alisha Garric
 * @description Site Author Data Model
 *
 */

// __________________________________________________________________________________________

export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};

// __________________________________________________________________________________________
