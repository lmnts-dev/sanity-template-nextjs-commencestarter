/**
 *
 * @author Alisha Garric
 * @description Quote slider section
 *
 */

// Core
import React from "react";
import { QuoteSliderClassname, QuoteSliderStyle } from "./styles.scss";
import {
  CMNC_QuoteAuthor,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_QuoteSlider_Schema = CMNC_SectionSpacingObject & {
  slides: CMNC_QuoteSlider_Slide[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_QuoteSlider_Slide = {
  quote: string;
  author?: CMNC_QuoteAuthor;
};

type CMNC_QuoteSlider = {
  schema: CMNC_QuoteSlider_Schema;
  addClass?: string;
};

export const QuoteSlider: React.FunctionComponent<CMNC_QuoteSlider> = ({
  schema,
  addClass,
}) => {
  let { slides, spacing, sectionTheme } = schema;

  return (
    <QuoteSliderStyle
      className={`${QuoteSliderClassname} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      <Flickity
        className={`${QuoteSliderClassname}__slide-container`}
        options={{ autoPlay: 5000, wrapAround: true }}
        reloadOnUpdate
        static
      >
        {slides.map((slide: CMNC_QuoteSlider_Slide, idx: number) => {
          return (
            <div className={`${QuoteSliderClassname}__slide`} key={idx}>
              <h2 className={`${QuoteSliderClassname}__slide__quote h4`}>
                {slide.quote}
              </h2>
              {slide.author && (
                <div className={`${QuoteSliderClassname}__slide__details`}>
                  {slide.author.name && (
                    <p
                      className={`${QuoteSliderClassname}__slide__details__author p-lg`}
                    >
                      {slide.author.name}
                    </p>
                  )}
                  {slide.author.company && (
                    <p
                      className={`${QuoteSliderClassname}__slide__details__author-title p-lg`}
                    >
                      {slide.author.company}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </Flickity>
    </QuoteSliderStyle>
  );
};

QuoteSlider.displayName = "QuoteSlider";

// End Component
//////////////////////////////////////////////////////////////////////
