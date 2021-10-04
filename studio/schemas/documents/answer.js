/**
 *
 * @name Answers Sanity.io Schema
 * @author Alisha
 * @description To be used with quiz data type
 *
 */


// __________________________________________________________________________________________

export default {
  name: "answer",
  title: "Answer",
  type: "document",
  fields: [
    {
      name: "answer",
      title: "Answer",
      type: "string",
      validation: (validate) => validate.required(),
      description: "Add a quiz answer to your answer library. Some examples are: Sometimes, Always or No",
    },
  ],
};

// __________________________________________________________________________________________
