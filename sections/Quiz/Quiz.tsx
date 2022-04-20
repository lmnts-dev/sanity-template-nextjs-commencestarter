/**
 *
 * quiz.tsx
 * @author Alisha Garric
 * @description The website quiz page.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useRef, useState } from "react";
//@ts-ignore
import Image from "next/image";

// Constants

// Components
import { CMNC_Quiz } from "../../constants/Types";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { QuizClassName, QuizStyle } from "./styles.scss";
import Logo from "../../components/Icon/SVG/Custom/Logo";
//@ts-ignore
import router from "next/router";
import ButtonArrow from "../../components/Icon/SVG/Custom/ButtonArrow";
import { Cta } from "../../components/Cta";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Quiz: React.FunctionComponent<CMNC_Quiz> = ({
  questions,
  title,
  description,
  image,
  slug,
  skipQuizLink,
}) => {
  // Keep track of current question's index and whether it is the last
  // question to know which navigation buttons to display, if we should
  // show the landing screen, and what the progress bar's percentage is
  const lastQuestionidx = questions.length - 1;
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1);
  let showLandingScreen = currentQuestionIdx == -1;
  let progressPercentage = currentQuestionIdx / (questions.length - 1);

  // Create refs to keep to use when tallying up our answers and
  // generating a results url with queries
  const myRefs = useRef<Array<HTMLInputElement | null>>([]);
  const myQuestionRefs = useRef<Array<HTMLInputElement | null>>([]);
  const myTextRef = useRef<HTMLInputElement | null>();

  //Prepare the tally variables for later use
  let mainTally = {} as { [key: string]: number };
  let subTally = {} as { [key: string]: number };

  //Function to add inputs to array of refs
  const addToRefs = (el: any) => {
    //TODO if title doesn't match title
    if (el && !myRefs.current.includes(el)) {
      myRefs.current.push(el);
    }
  };

  //Function to add inputs to array of refs
  const addToQuestionsRefs = (el: any) => {
    //TODO if title doesn't match title
    if (el && !myQuestionRefs.current.includes(el)) {
      myQuestionRefs.current.push(el);
    }
  };

  //Function to tally checked inputs and store result in variables
  const tallySelections = (main: boolean) => {
    myRefs.current.map((item) => {
      if (item && item.checked) {
        let results = main
          ? item.dataset.result && item.dataset.result.split("$$$")
          : item.dataset.subresult && item.dataset.subresult.split("$$$");

        results &&
          results.map((result: string | number) => {
            if (main) {
              if (mainTally[result]) {
                mainTally[result] = mainTally[result] + 1;
              } else {
                mainTally[result] = 1;
              }
            } else {
              if (subTally[result]) {
                subTally[result] = subTally[result] + 1;
              } else {
                subTally[result] = 1;
              }
            }
          });
      }
    });
    console.log(mainTally, subTally);
  };

  //Function to start tallying and generate results url

  const generateResults = () => {
    tallySelections(true);
    tallySelections(false);
    let responses = getMutations();
    let resultsUrl = `${slug.current}/result?`;

    let highestMainResult = Object.keys(mainTally).reduce((a, b) =>
      mainTally[a] > mainTally[b] ? a : b
    );

    resultsUrl =
      subTally && Object.keys(subTally).length > 0
        ? resultsUrl +
          Object.keys(subTally).map((item) => {
            return `&subResult=${item}`;
          })
        : resultsUrl;

    resultsUrl = highestMainResult
      ? resultsUrl + `&mainResult=${highestMainResult}`
      : resultsUrl;

    resultsUrl =
      myTextRef && myTextRef.current && myTextRef.current.value
        ? resultsUrl + `&Company%20Name=${myTextRef.current.value}`
        : resultsUrl;

    router.push(resultsUrl);
    generateJson(highestMainResult, responses);
  };

  //Mutations to be used with API

  const getMutations = () => {
    //@ts-ignore
    let myData = myQuestionRefs.current.map((item, idx) => {
      if (item) {
        let answers = "";
        let question = "";
        question = item.firstChild
          ? item.firstChild.textContent
            ? item.firstChild.textContent
            : ""
          : "";
        if (item.nextSibling) {
          Array.from(item.nextSibling.childNodes).map((child) => {
            const newChild = child as HTMLInputElement;
            if (
              newChild.checked ||
              (newChild.type == "text" && newChild.value)
            ) {
              answers =
                answers == ""
                  ? newChild.value
                  : answers + ", " + newChild.value;
            }
          });
        }
        return {
          _type: "response",
          _key: `Response${idx}`,
          question: question,
          response: answers,
        };
      }
    });
    return myData;
  };

  const generateJson = (highestResult: any, data: any) => {
    const mutations = [
      {
        create: {
          _type: "result",
          result: highestResult,
          responses: data,
        },
      },
    ];
    postResults(mutations);
  };
  //API Call to send quiz results to Sanity

  const postResults = (mutations: any) => {
    fetch(`https://gj2p0zpv.api.sanity.io/v1/data/mutate/production`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer skhwUCBiCRlhAUsxPrbfy45W2vjoNRVEn23b1xbLhyLq2WcIl1GRq3PtZm4la1thtnSKkTzgXMeDXjqXJEkt8bGmQqJgarKvIP0jtGoKGWEeepeSRnNfZxh3n3oZOMAeHyE9AzlLZ6oVoAeIEQnH3DynDhLE1zyTxv8qWy9q2iwOxN8mSHf1`,
      },
      body: JSON.stringify({ mutations }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result, "result"))
      .catch((error) => console.error(error, "error"));
  };

  return (
    <>
      <QuizStyle className={`${QuizClassName} __theme-light-gray `}>
        <div className={`${QuizClassName}__quiz-nav`}>
          <a href="/">
            <Logo />
          </a>
          {!showLandingScreen && (
            <p className={`${QuizClassName}__quiz-nav__score`}>
              {title} {`${currentQuestionIdx + 1}/${questions.length}`}
            </p>
          )}

          <Cta cta={skipQuizLink} /*addSpanWrapper*/ />

          {!showLandingScreen && (
            <div
              className={`${QuizClassName}__quiz-nav__progress-bar`}
              style={
                currentQuestionIdx != 0
                  ? { transform: `scaleX(${progressPercentage})` }
                  : undefined
              }
            />
          )}
        </div>

        <div className={`${QuizClassName}__quiz-content __form-styles`}>
          {showLandingScreen && (
            <div
              className={`${QuizClassName}__quiz-content__question-content ${
                currentQuestionIdx == -1 ? "__active" : ""
              } ${sectionSpacing()}`}
              key={-1}
            >
              <div
                className={`${QuizClassName}__quiz-content__fields-question`}
              >
                <h1
                  className={`${QuizClassName}__quiz-content__fields-question__title h2`}
                >
                  {title}
                </h1>
                {description && (
                  <p
                    className={`${QuizClassName}__quiz-content__fields-question__description`}
                  >
                    {description}
                  </p>
                )}
              </div>

              <div className={`${QuizClassName}__quiz-content__fields`}>
                {image && (
                  <div
                    className={`${QuizClassName}__quiz-content__fields__intro-image`}
                  >
                    <Image src={image.url} layout="fill" objectFit="contain" />
                  </div>
                )}

                <div
                  className={`${QuizClassName}__quiz-content__fields__btn-container`}
                >
                  <button
                    className={`btn __btn-theme-mustard`}
                    onClick={() => {
                      setCurrentQuestionIdx(currentQuestionIdx + 1);
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}

          {questions &&
            questions.length > 0 &&
            questions.map((currentQuestion, idx) => {
              let {
                question,
                explanation,
                fieldLabel,
                questionType,
                answers,
                placeholder,
              } = currentQuestion;

              return (
                <div
                  className={`${QuizClassName}__quiz-content__question-content ${
                    currentQuestionIdx == idx ? "__active" : ""
                  } ${sectionSpacing()}`}
                  key={idx}
                >
                  <div
                    className={`${QuizClassName}__quiz-content__fields-question`}
                    ref={addToQuestionsRefs}
                  >
                    <h2
                      className={`${QuizClassName}__quiz-content__fields-question__title h4`}
                    >
                      {question}
                    </h2>
                    {explanation && (
                      <p
                        className={`${QuizClassName}__quiz-content__fields-question__description`}
                      >
                        {explanation}
                      </p>
                    )}
                  </div>

                  <div className={`${QuizClassName}__quiz-content__fields`}>
                    {questionType == "text" && (
                      <>
                        {fieldLabel && (
                          <label
                            htmlFor={`${idx}Text`}
                            className={`${QuizClassName}__quiz-content__fields__text-label`}
                          >
                            {fieldLabel}
                          </label>
                        )}
                        <input
                          type="text"
                          required
                          className={`${QuizClassName}__quiz-content__fields__text-field`}
                          placeholder={placeholder}
                          name={`${idx}`}
                          id={`${idx}Text`}
                          //@ts-ignore
                          ref={myTextRef}
                        />
                      </>
                    )}
                    {answers &&
                      answers.map((questionWithAnswer, idxx: number) => {
                        return (
                          <>
                            <input
                              onClick={() => {
                                //Change to next question on click, since radio button questions only allow one answer
                                (questionType == "radio" ||
                                  questionType == "image") &&
                                  idx != lastQuestionidx &&
                                  setCurrentQuestionIdx(currentQuestionIdx + 1);
                              }}
                              ref={addToRefs}
                              data-result={questionWithAnswer.results
                                .filter((mainResult) => {
                                  if (mainResult._type == "path") return true;
                                  return false;
                                })
                                .map((mainResult) => {
                                  return mainResult.title;
                                })
                                .join("$$$")}
                              data-subresult={questionWithAnswer.results
                                .filter((subResult) => {
                                  if (subResult._type == "service") return true;
                                  return false;
                                })
                                .map((subResult) => {
                                  return subResult.title;
                                })
                                .join("$$$")}
                              type={
                                questionType == "radio" ||
                                questionType == "image"
                                  ? "radio"
                                  : "checkbox"
                              }
                              value={questionWithAnswer.answer.answer}
                              name={`${idx}`}
                              id={`${idx}${idxx}Feild`}
                              className={`${QuizClassName}__checkbox-or-radio`}
                              key={idxx + "input"}
                            />
                            <label
                              htmlFor={`${idx}${idxx}Feild`}
                              key={idxx + "label"}
                              className={`${QuizClassName}__checkbox-or-radio-label ${
                                questionType == "image" ? "__with-image" : ""
                              }`}
                            >
                              {questionType == "image" &&
                                questionWithAnswer.image && (
                                  <div
                                    className={`${QuizClassName}__checkbox-or-radio-label__image`}
                                  >
                                    <Image
                                      src={questionWithAnswer.image.url}
                                      alt={questionWithAnswer.answer.answer}
                                      layout="fill"
                                      objectFit="contain"
                                    />
                                  </div>
                                )}
                              <p
                                className={`${QuizClassName}__checkbox-or-radio-label__answer-text`}
                              >
                                {questionWithAnswer.answer.answer}
                              </p>
                              {questionWithAnswer.answer.tooltip && (
                                <QuizTooltip
                                  text={questionWithAnswer.answer.tooltip}
                                  addClass={`${QuizClassName}__checkbox-or-radio-label__tooltip`}
                                />
                              )}
                            </label>
                          </>
                        );
                      })}

                    <div
                      className={`${QuizClassName}__quiz-content__fields__btn-container`}
                    >
                      {idx != lastQuestionidx &&
                        (questionType == "text" ||
                          questionType == "checkbox") &&
                        !showLandingScreen && (
                          <button
                            className={`btn __with-arrow __btn-theme-mustard __btn-disabled`}
                            onClick={() => {
                              setCurrentQuestionIdx(idx + 1);
                            }}
                          >
                            Next
                            <ButtonArrow />
                          </button>
                        )}
                      {idx == lastQuestionidx && (
                        <button
                          className={`btn __with-arrow __btn-theme-mustard __btn-disabled`}
                          onClick={() => generateResults()}
                        >
                          Get Results
                          <ButtonArrow />
                        </button>
                      )}
                      {idx != -1 && (
                        <button
                          className={`btn __btn-minor`}
                          onClick={() => {
                            setCurrentQuestionIdx(currentQuestionIdx - 1);
                          }}
                        >
                          Previous
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </QuizStyle>
    </>
  );
};

export const QuizTooltip: React.FunctionComponent<{
  text: string;
  addClass?: string;
}> = ({ text, addClass }) => {
  const [opened, setOpened] = useState(false);

  return (
    <button
      className={`${addClass} ${opened ? "__open" : ""}`}
      onClick={() => {
        setOpened(!opened);
      }}
      aria-label="tooltip"
    >
      <p className={`${addClass}__mark __fnt-med`}>?</p>
      <p className={`${addClass}__text p-sm`}>{text}</p>
    </button>
  );
};

Quiz.displayName = "Quiz";

// End Component
// __________________________________________________________________________________________
