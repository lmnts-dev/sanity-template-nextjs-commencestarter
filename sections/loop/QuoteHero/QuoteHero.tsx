/**
 *
 * @author Alisha Garric
 * @description Quote hero section
 *
 */

// Core
import React from "react";

// Styles
import { QuoteHeroClassName, QuoteHeroStyle } from "./styles.scss";

// Components
import {
  CMNC_Ctas,
  CMNC_QuoteAuthor,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { Cta } from "../../../components/Cta";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_QuoteHero_Schema = CMNC_SectionSpacingObject & {
  caption?: string;
  quote: string;
  author?: CMNC_QuoteAuthor;
  body?: string;
  cta?: CMNC_Ctas;

  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_QuoteHero = {
  schema: CMNC_QuoteHero_Schema;
  addClass?: string;
};

export const QuoteHero: React.FunctionComponent<CMNC_QuoteHero> = ({
  schema,
  addClass,
}) => {
  let { quote, caption, cta, author, body, spacing, sectionTheme } = schema;

  return (
    <QuoteHeroStyle
      className={`${QuoteHeroClassName} ${sectionSpacing(spacing)} ${
        addClass ? addClass : ""
      } ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      <div className={`${QuoteHeroClassName}__top`}>
        {caption && (
          <div className={`${QuoteHeroClassName}__top__caption txt-caption`}>
            {caption}
          </div>
        )}

        <h1 className={`${QuoteHeroClassName}__top__quote h3`}>"{quote}"</h1>

        {author && author.name && (
          <p className={`${QuoteHeroClassName}__top__author`}>{author.name}</p>
        )}
        {author && author.company && (
          <p className={`${QuoteHeroClassName}__top__company`}>
            {author.company}
          </p>
        )}
      </div>

      <div className={`${QuoteHeroClassName}__bottom`}>
        {body && <PortableText blocks={body} />}
        <Cta cta={cta} addClass={`btn add-knotch add-knotch-indent`} />
      </div>
    </QuoteHeroStyle>
  );
};

QuoteHero.displayName = "QuoteHero";

// End Component
//////////////////////////////////////////////////////////////////////
