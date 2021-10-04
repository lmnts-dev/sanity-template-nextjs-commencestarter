/**
 *
 * contact.tsx
 * @author Alisha Garric
 * @description The website quiz page.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Types
import { GetStaticProps } from "next";

// Constants
import { Strings } from "../constants/Strings";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";
//import { SanityOptions } from "../../../clients";
import groq from "groq";
import { Component } from "react";
import { getClient } from "../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_Quiz = {
  __quiz: any;
};

type LMNTS_Quiz_State = {
  results: {
    title: string;
    score: number;
  }[];
  questions: {
    title: string;
    hasBeenClicked: boolean;
  }[];
};

export class Quiz extends Component<LMNTS_Quiz, LMNTS_Quiz_State> {
  constructor(props: LMNTS_Quiz) {
    super(props);

    this.state = {
      results: [],
      questions: [],
    };
  }

  componentDidMount() {
    let { __quiz } = this.props;
    let { results, questions } = __quiz;

    let resultsData = results.map((result: any) => {
      return {
        title: result.title,
        score: 0,
      };
    });

    let questionsData = questions.map((question: any) => {
      return {
        title: question.question,
        hasBeenClicked: false,
      };
    });

    this.setState({
      results: resultsData,
      questions: questionsData,
    });
  }

  render() {
    let { __quiz } = this.props;
    let { quiz_name, questions } = __quiz;

    return (
      <InnerGrid startBelowNav>
        <SiteHead
          title={`${Quiz} | ${Strings.baseTitle}`}
          description="Quiz Exploration"
        />
        <h1>Quiz Exploration: {quiz_name}</h1>

        <br />
        <br />

        {questions.map((question: any, idx: number) => {
          return (
            <>
              <div
                key={idx}
                style={{
                  opacity: `${
                    this.state.questions[idx] &&
                    this.state.questions[idx].hasBeenClicked == true
                      ? ".3"
                      : "1"
                  }`,
                }}
              >
                <h3>{question.question.question}</h3>
                {question.question.answers.map((answer: any, idxx: number) => {
                  return (
                    <p
                      onClick={() => {
                        let currentResultsState = this.state.results.slice();
                        this.state.results.map((result, idxxx: number) => {
                          answer.results.map((result_for_answer: any) => {
                            if (result.title == result_for_answer.title) {
                              currentResultsState[idxxx].score =
                                currentResultsState[idxxx].score + 1;
                            }
                          });
                        });

                        let currentQuestionsState =
                          this.state.questions.slice();
                        currentQuestionsState[idx].hasBeenClicked = true;

                        this.setState({
                          results: currentResultsState,
                          questions: currentQuestionsState,
                        });
                      }}
                      key={idx + "" + idxx}
                    >
                      {answer.answer}
                    </p>
                  );
                })}
              </div>
              <br />
            </>
          );
        })}

        <br />
        <br />

        {this.state.results.map((result: any, idx: number) => {
          return (
            <div key={idx}>
              <h2>{result.title}</h2>
              <p>Score: {result.score}</p>
            </div>
          );
        })}
      </InnerGrid>
    );
  }
}

/**
 *
 * @name getStaticProps
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 *
 */

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      __quiz: await getClient().fetch(
        groq`
        *[_type == 'quiz'][0] {
          "quiz_name": quiz_name,
          "questions": questions[]{
            "question": question ->{
               "question": question,
              "answers": answers[] {
                "results": results[]-> {
              		"link": link,
              		"title": title,
                  
                },
                "answer": answer->answer,
              },
            },
          },
          "results": results[]-> {
            "link": link,
            "title": title,
          }
        }`
      ),
    },
  };
};

export default Quiz;
