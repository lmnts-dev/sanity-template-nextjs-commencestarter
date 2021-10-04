/**
 *
 * @name Answers Sanity.io Schema
 * @author Alisha
 * @description To be used with quiz data type
 *
 */


// __________________________________________________________________________________________

export default {
  name: "question",
  title: "Question",
  description: "Can you see this?",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      description: "Add a quiz question to your question library. An example is: How much do you sleep?",
      validation: (validate) => validate.required(),
    },
    {
      name: "answers",
      title: "Question's Answers",
      description: "Make sure to add this question's answers to the answers library beforehand, so that you can select them here.",
      type: "array",
      validation: (validate) => validate.required().min(2),
      of: [
        {
          title: "Answer and Results",
          name: "answer_and_results",
          type: "object",
          validation: (validate) => validate.required(),
          fields: [
            {
              name: "answer",
              title: "Answer",
              type: "reference",
              to: [{type: "answer"}],
              validation: (validate) => validate.required(),
            }, 
            {
              name: "results",
              title: "Results this answer corresponds to",
              description: "If the quiz taker selects this answer for this question, which result(s) does that push them towards? Add them here.",
              type: "array",
              validation: (validate) => validate.required().min(1),
              of: [
                {
                  title: "Result",
                  name: "result",
                  type: "reference",
                  to: [{ type: "result"}]
                }
              ]
            }
          ]
        }
      ],
    }
  ],
};

// __________________________________________________________________________________________
