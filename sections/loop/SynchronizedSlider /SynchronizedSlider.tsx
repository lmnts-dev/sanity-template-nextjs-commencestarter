/**
 *
 * SynchronizedSlider.js
 * @author Alisha Garric
 * @description SynchronizedSlider
 *
 *
 */

// Core
import React, { useEffect, useState } from "react";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import {
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
  CMNC_Image,
} from "../../../constants/Types";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";

// Styles
import {
  SynchronizedSliderStyle,
  SynchronizedSliderClassName,
} from "./styles.scss";
import { prevAndactiveSliderClasses } from "../../../utils/prevAndactiveSliderClasses";
import { PortableText } from "../../../utils/sanity";
import { Settings } from "../../../constants/site/Settings";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_SynchronizedSlider_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  images: CMNC_Image[];
  blockBasic: string;
  number?: number;
  numberFrom?: number;
  numberLabel?: string;
  sectionTheme?: CMNC_SectionTheme;
};

type LMNTS_SynchronizedSlider = {
  schema: LMNTS_SynchronizedSlider_Schema;
};

export const SynchronizedSlider: React.FunctionComponent<LMNTS_SynchronizedSlider> =
  ({ schema }) => {
    let {
      headline,
      images,
      blockBasic,
      number,
      numberFrom,
      numberLabel,
      spacing,
      sectionTheme,
    } = schema;

    let numberToDisplay =
      numberFrom && number ? (numberFrom ? numberFrom : number) : undefined;

    const [activeSlide, setActiveSlide] = useState(0);
    const [activeNumber, setActiveNumber] = useState(numberToDisplay);
    const [numberIntervalId, setNumberIntervalId] = useState(0);
    let max = images.length;

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((activeSlide) =>
          activeSlide + 1 >= max ? 0 : activeSlide + 1
        );
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const onChange = (isVisible: boolean) => {
      if (!isVisible) {
        clearInterval(numberIntervalId);
        setActiveNumber(numberToDisplay);
        return;
      }

      const numberInterval = setInterval(() => {
        setActiveNumber((activeNumber) =>
          number && numberFrom && activeNumber
            ? activeNumber - 1 <= number
              ? number
              : activeNumber - 1
            : undefined
        );
      }, 200);

      setNumberIntervalId(numberInterval);

      if (!isVisible) {
        setActiveNumber(numberToDisplay);
      }
    };

    return (
      <SynchronizedSliderStyle
        className={`${SynchronizedSliderClassName} ${sectionSpacing(spacing)} ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        }`}
      >
        {headline && (
          <h2 className={`${SynchronizedSliderClassName}__headline h4 h4-vw`}>
            {headline}
          </h2>
        )}

        <div
          className={`${SynchronizedSliderClassName}__body p-lg __article-text`}
        >
          <PortableText blocks={blockBasic} />
        </div>

        <div className={`${SynchronizedSliderClassName}__images`}>
          {images.map((item, idx) => {
            return (
              <Image
                src={item.url}
                layout="fill"
                key={idx}
                objectFit="cover"
                className={`${SynchronizedSliderClassName}__images__image ${prevAndactiveSliderClasses(
                  max,
                  activeSlide,
                  idx
                )}`}
                alt={headline ? headline : Settings.siteTitle}
              />
            );
          })}
        </div>
        {(number || numberLabel) && (
          <VisibilitySensor partialVisibility onChange={onChange}>
            <p className={`${SynchronizedSliderClassName}__number`}>
              <span
                className={`${SynchronizedSliderClassName}__number__label p-lg`}
              >
                {numberLabel}
              </span>
              <span
                className={`${SynchronizedSliderClassName}__number__num h4-vw`}
              >
                {activeNumber}
              </span>
            </p>
          </VisibilitySensor>
        )}
      </SynchronizedSliderStyle>
    );
  };

SynchronizedSlider.displayName = "SynchronizedSlider";

// End Component
//////////////////////////////////////////////////////////////////////
