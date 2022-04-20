// Core
import React, { useState } from "react";
// Types
import { CMNC_PathSimple, CMNC_QuizResultsPage } from "../../constants/Types";

// Styles
import { QuizMainResultsClassName, QuizMainResultsStyle } from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
//@ts-ignore
import { AnimateSharedLayout, motion } from "framer-motion";
import { Cta } from "../../components/Cta";
import { ContactForm } from "../loop/ContactForm-2";
import { PathSection } from "../PathSection";

// Begin Component
// __________________________________________________________________________________________

type CMNC_QuizMainResultSection = {
  result: CMNC_PathSimple;
  resultsPage: CMNC_QuizResultsPage;
  subResults?: string;
  companyName?: string;
};

export const QuizMainResultSection: React.FunctionComponent<CMNC_QuizMainResultSection> =
  ({ result, resultsPage, subResults, companyName }) => {
    const [ctaFormVisible, setCtaFormVisible] = useState(false);
    let { mainResultSectionIntro, summary, ctaForm } = resultsPage;

    let namePrefix = summary && summary.namePrefix ? summary.namePrefix : "";
    let nameSuffix = summary && summary.nameSuffix ? summary.nameSuffix : "";
    let mainResultPrefix =
      summary && summary.mainResultPrefix ? summary.mainResultPrefix : "";
    let mainResultSuffix =
      summary && summary.mainResultSuffix ? summary.mainResultSuffix : "";
    let subResultsPrefix =
      summary && summary.subResultsPrefix ? summary.subResultsPrefix : "";
    let subResultsSuffix =
      summary && summary.subResultsSuffix ? summary.subResultsSuffix : "";
    let buttonLabelPrefix =
      summary && summary.buttonLabelPrefix ? summary.buttonLabelPrefix : "";
    let buttonLabelSuffix =
      summary && summary.buttonLabelSuffix ? summary.buttonLabelSuffix : "";

    return (
      <QuizMainResultsStyle
        className={`${QuizMainResultsClassName} ${sectionSpacing()}`}
      >
        <AnimateSharedLayout>
          {!ctaFormVisible && (
            <div className={`${QuizMainResultsClassName}__results-summary`}>
              {companyName && (
                <h1 className={`h3`}>
                  {namePrefix}
                  {companyName}
                  {nameSuffix}
                </h1>
              )}
              <p className="p-lg">
                {mainResultPrefix}
                <b>{result.title}</b>
                {mainResultSuffix}
                {subResults && (
                  <>
                    {subResultsPrefix}
                    <b>{subResults}</b>
                    {subResultsSuffix}
                  </>
                )}
              </p>

              <Cta
                addClass="btn __btn-underline"
                cta={[
                  {
                    _type: "internalLink",
                    label: `${buttonLabelPrefix} ${result.title} ${buttonLabelSuffix}`,
                    internalLink: { _type: "path", slug: result.slug },
                  },
                ]}
              />
            </div>
          )}

          <motion.div
            className={`${QuizMainResultsClassName}__result-path__container`}
          >
            <PathSection
              schema={{
                path: result,
                spacing: { top: "none", bottom: "none" },
                headline: mainResultSectionIntro,
              }}
              addClass={`${QuizMainResultsClassName}__result-path ${
                ctaFormVisible ? "__align-left" : ""
              }`}
            >
              {ctaForm && ctaForm.form && !ctaFormVisible && (
                <button
                  className={`${QuizMainResultsClassName}__result-path__btn btn`}
                  onClick={() => {
                    setCtaFormVisible(true);
                  }}
                >
                  Get Started
                </button>
              )}
            </PathSection>
          </motion.div>

          {ctaForm && ctaForm.form && ctaFormVisible && (
            <div className={`${QuizMainResultsClassName}__cta-form`}>
              <div className={`${QuizMainResultsClassName}__cta-form__header`}>
                {ctaForm.headline && <h2>{ctaForm.headline}</h2>}
                {ctaForm.body && <p>{ctaForm.body}</p>}
              </div>
              
              <ContactForm
                schema={{
                  spacing: { top: "none", bottom: "none" },
                  form: ctaForm.form,
                }}
              />
            </div>
          )}
        </AnimateSharedLayout>
      </QuizMainResultsStyle>
    );
  };

QuizMainResultSection.displayName = "QuizMainResults";

// End Component
// __________________________________________________________________________________________
