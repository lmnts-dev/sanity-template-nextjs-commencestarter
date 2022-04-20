/**
 *
 * @author Alisha Garric
 * @description Quote slider section
 *
 */

// Core
import React, { useRef } from "react";
import { ServicesSliderClassname, ServicesSliderStyle } from "./styles.scss";
import {
  CMNC_SectionSpacingObject,
  CMNC_Service,
  CMNC_ServicePageData,
} from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
//@ts-ignore
import Image from "next/image";
//@ts-ignore
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../components/Icon/SVG/Custom/Arrow";
import { SliderArrow } from "../QuoteSlider/styles.scss";
import { Cta } from "../../../components/Cta";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_ServicesSlider_Schema = CMNC_SectionSpacingObject & {
  serviceSlides: CMNC_Service[];
  sectionThemeSubtle?: CMNC_SectionTheme;
  servicePages?: {
    services: CMNC_ServicePageData[];
  };
};

type CMNC_ServicesSlider = {
  schema: CMNC_ServicesSlider_Schema;
  addClass?: string;
};

export const ServicesSlider: React.FunctionComponent<CMNC_ServicesSlider> = ({
  schema,
  addClass,
}) => {
  let { serviceSlides, spacing, sectionThemeSubtle } = schema;

  const [activeSlideIdx, setActiveSlideIdx] = React.useState(0);

  let swiperSlider = useRef(null);

  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <SliderArrow className={className} onClick={onClick}>
        <Arrow />
      </SliderArrow>
    );
  }

  function PrevArrow(props: { className?: string; onClick?: () => void }) {
    const { className, onClick } = props;
    return (
      <SliderArrow className={className} onClick={onClick}>
        <Arrow />
      </SliderArrow>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    beforeChange: (current: number, next: number) => {
      console.log(current);
      setActiveSlideIdx(next);
    },
    responsive: [
      {
        breakpoint: 676,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <ServicesSliderStyle
      className={`${ServicesSliderClassname} ${sectionSpacing(
        spacing
      )} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      <div className={`${ServicesSliderClassname}__inner`}>
        <ul
          className={`${ServicesSliderClassname}__slides-nav __highlight-list`}
        >
          {serviceSlides.map((slide, idx) => {
            return (
              <li
                key={idx}
                onClick={function () {
                  //@ts-ignore
                  swiperSlider.current.slickGoTo(idx);
                }}
                className={`${activeSlideIdx == idx ? "__active" : ""}`}
              >
                <button>{slide.title}</button>
              </li>
            );
          })}
        </ul>

        <Slider
          className={`${ServicesSliderClassname}__slides-container`}
          {...settings}
          ref={swiperSlider}
        >
          {serviceSlides.map((slide, idx) => {
            return (
              <div className={`${ServicesSliderClassname}__slide`} key={idx}>
                <div className={`${ServicesSliderClassname}__slide__image`}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={slide.image.url}
                    alt={slide.title}
                  />
                </div>
                <div className={`${ServicesSliderClassname}__slide__text`}>
                  <h2
                    className={`${ServicesSliderClassname}__title h3 __fnt-med add-doodad`}
                  >
                    {slide.title}
                  </h2>
                  {slide.shortDescription && (
                    <p className={`${ServicesSliderClassname}__slide__body`}>
                      {slide.shortDescription}
                    </p>
                  )}
                  <Cta
                    cta={[
                      {
                        _type: "internalLink",
                        label: `View ${slide.title}`,
                        internalLink: { _type: "service", slug: slide.slug },
                      },
                    ]}
                    addClass={`${ServicesSliderClassname}__slide__btn __theme-accent-light-blue btn __btn-underline`}
                  />

                  {slide.features && slide.features.length > 0 && (
                    <ul
                      className={`${ServicesSliderClassname}__slide__checklist __checkmark-list`}
                    >
                      {slide.features.map((feature) => {
                        return <li>{feature}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </ServicesSliderStyle>
  );
};

ServicesSlider.displayName = "ServicesSlider";

// End Component
//////////////////////////////////////////////////////////////////////
