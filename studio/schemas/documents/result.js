/**
 *
 * @name Result Sanity.io Schema
 * @author Alisha
 * @description To be used with quiz data type
 *
 */


// __________________________________________________________________________________________

export default {
  name: "result",
  title: "Result",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Result Title",
      description: "Add a quiz result to your result library.",
      type: "string",
      validation: (validate) => validate.required(),
    },
    /*{
      name: "link",
      title: "Link",
      type: "string",
      validation: (validate) => validate.required(),
    }*/
  ],
};

// __________________________________________________________________________________________
