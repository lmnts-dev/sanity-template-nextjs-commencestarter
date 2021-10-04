/**
 *
 * @name QuizExploration Sanity.io Schema
 * @author Alisha
 *
 */


// __________________________________________________________________________________________

export default {
  name: "quiz",
  title: "Quiz Exploration",
  type: "document",
  fields: [
    {
      name: "quiz_name",
      title: "Quiz Name",
      description: "To build a quiz, first create a library of all the possible quiz results, questions and answers. Create your library in the library tabs found in the leftmost pane. Then add the results, answers and questions from your library to this quiz below, adding conditional logic as you go.",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "results",
      title: "Results",
      description: "You must add all possible quiz results to the results library (located in the leftmost pane) before adding those results here.",
      type: "array",
      of: [
        {
          title: "Result",
          name: "result",
          type: "reference",
          to: [{type: "result"}]
        }
      ],
      validation: (validate) => validate.required().min(1),
    },
    {
      name: "questions",
      title: "Questions",
      description: "You must add all possible quiz questions to the questions library (located in the leftmost pane) before adding those questions here.",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        {
          title: "Question and Logic",
          name: "question_and_logic",
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "reference",
              to: [{type: "question"}],
              validation: (validate) => validate.required(),
            },
            {
              name: "conditional_logic",
              title: "Conditional Logic",
              description: "Do you only want to show this question conditionally? If so, choose which question(s) must have which answer in order to display this question.",
              type: "array",
              of: [
                {
                  name: "logic_item",
                  title: "If (question) chose (answer)",
                  type: "object",
                  fields: [
                    {
                      name: "question",
                      title: "Question",
                      type: "reference",
                      to: [{type: "question"}],
                      validation: (validate) => validate.required(),
                    },
                    {
                      name: "answer",
                      title: "Answer",
                      type: "reference",
                      to: [{type: "answer"}],
                      validation: (validate) => validate.required(),
                    }
                  ]
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