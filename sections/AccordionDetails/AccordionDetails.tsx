/**
 *
 * @author Alisha Garric
 * @description Text accordion section
 *
 */

// Core
import React, { useState } from "react";

// Styles
import {
  AccordionDetailsClassName,
  AccordionDetailsStyle,
} from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../constants/Types";
import { CursorLinkActivatorClass } from "../../components/core/Cursor/styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_AccordionDetails_Schema = {
  description: string;
  details: {
    label: string;
    items: {}[];
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_AccordionDetails = {
  schema: CMNC_AccordionDetails_Schema;
  addClass?: string;
};

export const AccordionDetails: React.FunctionComponent<CMNC_AccordionDetails> =
  ({ schema, addClass }) => {
    let { description, details, sectionTheme } = schema;

    const [opened, setOpened] = useState(false);

    return (
      <AccordionDetailsStyle
        className={`${AccordionDetailsClassName} ${sectionSpacing()} ${addClass}  ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        }`}
      >
        <div className={`${AccordionDetailsClassName}__primary`}>
          {description && <p>{description}</p>}
        </div>

        <div
          className={`${AccordionDetailsClassName}__details ${
            opened ? "__open" : ""
          }`}
        >
          <button
            className={`${AccordionDetailsClassName}__toggle txt-caption ${CursorLinkActivatorClass}`}
            onClick={() => {
              setOpened(!opened);
            }}
          >
            Details
          </button>

          {details &&
            details.length > 0 &&
            details.map((detail, idx) => {
              return (
                <div
                  className={`${AccordionDetailsClassName}__details__row`}
                  key={idx}
                >
                  <p
                    className={`${AccordionDetailsClassName}__details__row__label`}
                  >
                    {detail.label}
                  </p>

                  {detail.items &&
                    detail.items.length &&
                    detail.items.map((item, idxx) => {
                      return (
                        <div
                          key={idxx}
                          className={`${AccordionDetailsClassName}__details__row__value`}
                        >
                          <p>{item}</p>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </AccordionDetailsStyle>
    );
  };

AccordionDetails.displayName = "AccordionDetails";

// End Component
//////////////////////////////////////////////////////////////////////
