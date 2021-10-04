/**
 *
 * @author Alisha Garric
 * @description Column content section
 *
 */

// Core
import React from "react";

// Styles
import { ColumnContentClassName, ColumnContentStyle } from "./styles.scss";
import { CMNC_Cta, CMNC_SectionSpacingObject } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { Cta } from "../../../components/Cta";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ColumnContent_Schema = CMNC_SectionSpacingObject & {
  caption?: string;
  headline?: string;
  content: {
    headline?: string;
    body?: string;
    cta?: CMNC_Cta;
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_ColumnContent = {
  schema: CMNC_ColumnContent_Schema;
  addClass?: string;
};

export const ColumnContent: React.FunctionComponent<CMNC_ColumnContent> = ({
  schema,
  addClass,
}) => {
  let { caption, headline, content, spacing, sectionTheme } = schema;

  return (
    <ColumnContentStyle
      className={`${ColumnContentClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      {(caption || headline) && (
        <div className={`${ColumnContentClassName}__top`}>
          {caption && (
            <span
              className={`${ColumnContentClassName}__top__caption txt-caption`}
            >
              {caption}
            </span>
          )}
          {headline && <h2>{headline}</h2>}
        </div>
      )}

      <div className={`${ColumnContentClassName}__bottom`}>
        {content.map((col, idx: number) => {
          let { headline, body, cta } = col;

          return (
            <div className={`${ColumnContentClassName}__bottom__col`} key={idx}>
              {headline && (
                <h3 className={`add-doodad add-doodad-indent h4`}>
                  {headline}
                </h3>
              )}
              {body && <PortableText blocks={body} />}

              <Cta cta={cta} addClass={`btn add-knotch add-knotch-indent`} />
            </div>
          );
        })}
      </div>
    </ColumnContentStyle>
  );
};

ColumnContent.displayName = "ColumnContent";

// End Component
//////////////////////////////////////////////////////////////////////
