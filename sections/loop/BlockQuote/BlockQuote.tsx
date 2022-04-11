/**
 *
 * @author Alisha Garric
 * @description BlockQuote
 *
 */

// Core
import React from "react";
import {
  CMNC_QuoteAuthor,
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Styles
import { BlockQuoteClassName, BlockQuoteStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_BlockQuote_Schema = CMNC_SectionSpacingObject & {
  quote: string;
  author?: CMNC_QuoteAuthor;
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

type CMNC_BlockQuote = {
  schema: CMNC_BlockQuote_Schema;
  addClass?: string;
};

export const BlockQuote: React.FunctionComponent<CMNC_BlockQuote> = ({
  schema,
  addClass,
}) => {
  let { quote, author, spacing, sectionThemeSubtle } = schema;

  return (
    <BlockQuoteStyle
      className={`${BlockQuoteClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      <div className={`${BlockQuoteClassName}__container`}>
        <div className={`${BlockQuoteClassName}__text`}>
          <h3 className={`${BlockQuoteClassName}__text__quote h4`}>
            "{quote}"
          </h3>
          <div className={`${BlockQuoteClassName}__text__author`}>
            {author && author.name && (
              <span
                className={`${BlockQuoteClassName}__text__author__name p-sm`}
              >
                {author.name}
              </span>
            )}
            {author && author.company && (
              <span
                className={`${BlockQuoteClassName}__text__author__company h6`}
              >
                {author.company}
              </span>
            )}
          </div>
        </div>
      </div>
    </BlockQuoteStyle>
  );
};

BlockQuote.displayName = "BlockQuote";

// End Component
//////////////////////////////////////////////////////////////////////
