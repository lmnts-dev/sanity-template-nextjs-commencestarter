/**
 *
 * @author Alisha Garric
 * @description Marquee row section
 *
 */

// Core
import React from "react";
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";

// Styles
import { MarqueeClassName, MarqueeRowStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_MarqueeRow_Schema = CMNC_SectionSpacingObject & {
  words: string[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_MarqueeRow = {
  schema: CMNC_MarqueeRow_Schema;
  addClass?: string;
};

export const MarqueeRow: React.FunctionComponent<CMNC_MarqueeRow> = ({
  schema,
  addClass,
}) => {
  let { words, spacing, sectionTheme } = schema;

  return (
    <MarqueeRowStyle
      className={`${MarqueeClassName} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } ${sectionSpacing(spacing)} ${addClass}`}
    >
      <div className={`${MarqueeClassName}__inner`}>
        <ul>
          {words.map((word: string, idx: number) => {
            return (
              <li key={idx} className={`item-${idx} headline`}>
                <span>{word}</span>
              </li>
            );
          })}
        </ul>
        <ul>
          {words.map((word: string, idx: number) => {
            return (
              <li key={idx} className={`item-${idx} headline`}>
                <span>{word}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </MarqueeRowStyle>
  );
};

MarqueeRow.displayName = "MarqueeRow";

// End Component
//////////////////////////////////////////////////////////////////////
