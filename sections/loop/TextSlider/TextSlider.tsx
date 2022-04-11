/**
 *
 * @author Alisha Garric
 * @description Text slider section
 *
 */

// Core
import React, { useRef } from "react";
import { TextSliderClassname, TextSliderStyle } from "./styles.scss";
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { PortableText } from "../../../utils/sanity";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_TextSlider_Schema = CMNC_SectionSpacingObject & {
  sectionThemeSubtle?: CMNC_SectionTheme;
  textSlides: CMNC_TextSlider_Slide[];
};

type CMNC_TextSlider_Slide = {
  title: string;
  body?: string;
};

type CMNC_TextSlider = {
  schema: CMNC_TextSlider_Schema;
  addClass?: string;
};

export const TextSlider: React.FunctionComponent<CMNC_TextSlider> = ({
  schema,
  addClass,
}) => {
  let { spacing, sectionThemeSubtle, textSlides } = schema;
  const [activeSlideIdx, setActiveSlideIdx] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 10000,
    waitForAnimate: false,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      console.log(current);
      setActiveSlideIdx(next);
    },
    slickGoTo: 3,
  };

  let swiperSlider = useRef(null);

  return (
    <TextSliderStyle
      className={`${TextSliderClassname} ${sectionSpacing(
        spacing
      )} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      <ul className={`${TextSliderClassname}__titles ul`}>
        {textSlides &&
          textSlides.length > 0 &&
          textSlides.map((slide: CMNC_TextSlider_Slide, idx) => {
            return (
              <li
                key={idx}
                className={`${TextSliderClassname}__titles__title ${
                  activeSlideIdx == idx ? "--active" : ""
                } h3`}
              >
                <h3
                  onClick={function () {
                    //@ts-ignore
                    swiperSlider.current.slickGoTo(idx);
                  }}
                >
                  {slide.title}
                </h3>
              </li>
            );
          })}
      </ul>

      <Slider
        className={`${TextSliderClassname}__slide-container`}
        {...settings}
        ref={swiperSlider}
      >
        {textSlides &&
          textSlides.length > 0 &&
          textSlides.map((slide: CMNC_TextSlider_Slide, idx: number) => {
            return (
              <div className={`${TextSliderClassname}__slide`} key={idx}>
                {slide.body && (
                  <div className={`${TextSliderClassname}__body`}>
                    <PortableText blocks={slide.body} />
                  </div>
                )}
              </div>
            );
          })}
      </Slider>
    </TextSliderStyle>
  );
};

TextSlider.displayName = "TextSlider";

// End Component
//////////////////////////////////////////////////////////////////////
