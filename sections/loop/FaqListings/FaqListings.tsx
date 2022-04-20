/**
 *
 * @author Alisha Garric
 * @description Accordion listings
 *
 */

// Core
import React, { useState } from "react";
import {
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Styles
import { FaqListingsClassname, FaqListingsStyle } from "./styles.scss";
import { Accordion, CMNC_Accordion } from "../../../components/Accordion";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_Section_FaqListings_Schema = CMNC_SectionSpacingObject & {
  faqSections: {
    label: string;
    faqs: CMNC_Accordion[];
  }[];
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

export type CMNC_FaqListings = {
  schema: CMNC_Section_FaqListings_Schema;
  addClass?: string;
};

export const FaqListings: React.FunctionComponent<CMNC_FaqListings> = ({
  schema,
  addClass,
}) => {
  let { faqSections, spacing, sectionThemeSubtle } = schema;

  const [activeIdx, setActiveIdx] = useState(-1);

  if (faqSections && faqSections.length > 0) {
    return (
      <FaqListingsStyle
        className={`${FaqListingsClassname} ${sectionSpacing(
          spacing
        )} ${addClass} ${
          sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
        }`}
      >
        {faqSections.length > 1 && (
          <ul className={`${FaqListingsClassname}__nav __highlight-list`}>
            <li key={-1} className={`${activeIdx == -1 ? "__active" : ""}`}>
              <button
                onClick={() => {
                  setActiveIdx(-1);
                }}
              >
                All
              </button>
            </li>
            {faqSections.map((section, idx) => {
              return (
                <li
                  key={idx}
                  className={`${activeIdx == idx ? "__active" : ""}`}
                >
                  <button
                    onClick={() => {
                      setActiveIdx(idx);
                    }}
                  >
                    {section.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <div className={`${FaqListingsClassname}__faqs-container`}>
          {faqSections.map((section, idx) => {
            return (
              <>
                {(activeIdx == idx || activeIdx == -1) && (
                  <div
                    key={idx}
                    className={`${FaqListingsClassname}__faqs-container__section`}
                  >
                    {faqSections.length == 1 && (
                      <p className="h4">{section.label}</p>
                    )}
                    {section.faqs && section.faqs.length > 0 && (
                      <ul className={`${FaqListingsClassname}__list`}>
                        {section.faqs.map((accordion, idxx) => {
                          return (
                            <Accordion
                              key={idxx}
                              headline={accordion.headline}
                              body={accordion.body} index={0} blurbs={[]}                            />
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </FaqListingsStyle>
    );
  } else return <></>;
};

FaqListings.displayName = "FaqListings";

// End Component
// __________________________________________________________________________________________
