/**
 *
 * @author Alisha Garric
 * @description Headline section
 *
 */

// Core
import React from "react";

// Styles
import { HeadlineClassName, HeadlineStyle } from "./styles.scss";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_Headline_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  subheadline?: string;
  body?: string;
  layout?: "split" | "left" | "right";
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_Headline = {
  schema: CMNC_Headline_Schema;
  addClass?: string;
};

export const Headline: React.FunctionComponent<CMNC_Headline> = ({
  schema,
  addClass,
}) => {
  let { headline, subheadline, body, layout, spacing, sectionTheme } = schema;

  return (
    <HeadlineStyle
      className={`${HeadlineClassName} ${
        layout ? `__layout-${layout}` : ""
      } ${sectionSpacing(spacing)} ${addClass} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      {(headline || subheadline) && (
        <div className={`${HeadlineClassName}__header`}>
          {headline && <h3>{headline}</h3>}
          {subheadline && (
            <h3 className={`${HeadlineClassName}__header__subheadline`}>
              {subheadline}
            </h3>
          )}
        </div>
      )}
      {body && (
        <div className={`${HeadlineClassName}__body`}>
          <PortableText blocks={body} />
        </div>
      )}
    </HeadlineStyle>
  );
};

Headline.displayName = "Headline";

// End Component
//////////////////////////////////////////////////////////////////////
