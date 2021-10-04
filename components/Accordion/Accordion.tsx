/**
 *
 * @author Alisha Garric
 * @description Author Component.
 *
 */

// Core
import React from "react";

// Styles
import { AccordionClassName, AccordionStyle } from "./styles.scss";
import { PortableText } from "../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_Accordion = {
  index: number;
  headline: string;
  body?: string;
  blurbs: {
    headline?: string;
    body?: string;
  }[];
};

export const Accordion: React.FunctionComponent<CMNC_Accordion> = ({
  headline,
  body,
  blurbs,
  index,
}) => {
  return (
    <AccordionStyle className={`${AccordionClassName}`}>
      <input
        id={headline + index}
        type="checkbox"
        className={`${AccordionClassName}__listing__input`}
      />

      <label
        className={`${AccordionClassName}__listing__title`}
        htmlFor={headline + index}
      >
        {headline}
      </label>

      {body && (
        <PortableText
          blocks={body}
          className={`${AccordionClassName}__listing__description`}
        />
      )}

      {blurbs && blurbs.length > 0 && (
        <div className={`${AccordionClassName}__listing__content`}>
          {blurbs.map((blurb, idxx: number) => {
            return (
              <div
                className={`${AccordionClassName}__listing__content__col`}
                key={idxx}
              >
                <h5 className="add-doodad add-doodad-indent">
                  {blurb.headline}
                </h5>
                {blurb.body && <p>{blurb.body} </p>}
              </div>
            );
          })}
        </div>
      )}
    </AccordionStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
