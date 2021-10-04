/**
 *
 * @author Alisha Garric
 * @description Simple
 *
 */

// Core
import React from "react";
import {
  CMNC_Image,
  CMNC_QuoteAuthor,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import Image from "next/image";

// Styles
import { QuoteClassName, QuoteStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_Quote_Schema = CMNC_SectionSpacingObject & {
  quote: string;
  image?: CMNC_Image;
  author?: CMNC_QuoteAuthor;
  layout?: "default" | "split";
  alt?: string;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_Quote = {
  schema: CMNC_Quote_Schema;
  addClass?: string;
};

export const Quote: React.FunctionComponent<CMNC_Quote> = ({
  schema,
  addClass,
}) => {
  let { quote, author, spacing, image, layout, alt, sectionTheme } = schema;

  return (
    <QuoteStyle
      className={`${QuoteClassName} ${sectionSpacing(spacing)} ${addClass} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } ${layout ? `__layout-${layout}` : ""}`}
    >
      <div className={`${QuoteClassName}__container`}>
        {image && (
          <div className={`${QuoteClassName}__image`}>
            <Image
              layout="responsive"
              src={image.url}
              alt={alt}
              height={image.height}
              width={image.width}
            />
          </div>
        )}
        <div className={`${QuoteClassName}__text`}>
          <h3 className={`${QuoteClassName}__text__quote h2 alt`}>{quote}</h3>
          <div className={`${QuoteClassName}__text__author`}>
            {author && author.name && (
              <span className={`${QuoteClassName}__text__author__name h5`}>
                {author.name}
              </span>
            )}
            {author && author.company && (
              <span className={`${QuoteClassName}__text__author__company h6`}>
                {author.company}
              </span>
            )}
          </div>
        </div>
      </div>
    </QuoteStyle>
  );
};

Quote.displayName = "Quote";

// End Component
//////////////////////////////////////////////////////////////////////
