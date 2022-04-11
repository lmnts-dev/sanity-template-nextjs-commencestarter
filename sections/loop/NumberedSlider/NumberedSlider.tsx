/**
 *
 * @author Alisha Garric
 * @description Simple
 *
 */

// Core
import React from "react";
import {
  CMNC_Ctas,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
import { NumberedSliderClassName, NumberedSliderStyle } from "./styles.scss";
import Arrow from "../../../components/Icon/SVG/Custom/Arrow";
import { SliderArrow } from "../QuoteSlider/styles.scss";
import { PortableText } from "../../../utils/sanity";
import { Ctas } from "../../../components/Cta";
import { Sensor } from "../../../components/Sensor";
import { animationVisibilityClass } from "../../../constants/styles/Global";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_NumberedSlider_Schema = CMNC_SectionSpacingObject & {
  headline: string;
  items: {
    headline: string;
    subheadline?: string;
    blockBasic?: string;
    ctas?: CMNC_Ctas;
    numberOverride?: string;
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_NumberedSlider = {
  schema: CMNC_NumberedSlider_Schema;
  addClass?: string;
};

export const NumberedSlider: React.FunctionComponent<CMNC_NumberedSlider> = ({
  schema,
  addClass,
}) => {
  let { spacing, headline, items, sectionTheme } = schema;

  const [percentScrolled, setPercentScrolled] = React.useState(0);

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
    infinite: false,
    speed: 500,
    fade: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    waitForAnimate: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => {
      setPercentScrolled((100 / (items.length - 1)) * next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <NumberedSliderStyle
      className={`${NumberedSliderClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
      percentScrolled={percentScrolled}
      scrollBarWidth={items.length > 0 ? 100 / (items.length - 1) : 0}
    >
      <Sensor partialVisibility={true} offset={{ top: 0 }}>
        {({ isVisible }: { isVisible: boolean }) => (
          <div
            className={`${NumberedSliderClassName}__header ${
              isVisible ? animationVisibilityClass : ""
            }`}
          >
            <h2
              className={`${NumberedSliderClassName}__header__headline h3 __fnt-upper`}
            >
              {headline}
            </h2>
            <span className={`${NumberedSliderClassName}__header__scrollbar`} />
          </div>
        )}
      </Sensor>

      <Slider
        {...settings}
        className={`${NumberedSliderClassName}__slides-container`}
      >
        {items.map((item, idx) => {
          return (
            <div className={`${NumberedSliderClassName}__slide  `} key={idx}>
              <div
                className={`${NumberedSliderClassName}__slide__number h1 __fnt-emphasize`}
              >
                {item.numberOverride
                  ? item.numberOverride
                  : idx + 1 < 10
                  ? `0${idx + 1}`
                  : idx + 1}
              </div>
              <h3
                className={`${NumberedSliderClassName}__slide__headline h5 __fnt-emphasize`}
              >
                {item.headline}
              </h3>
              {item.subheadline && (
                <h4
                  className={`${NumberedSliderClassName}__slide__subheadline p __fnt-upper`}
                >
                  {item.subheadline}
                </h4>
              )}
              {item.blockBasic && (
                <div className={`${NumberedSliderClassName}__slide__body`}>
                  <PortableText blocks={item.blockBasic} />
                </div>
              )}
              <Ctas
                ctas={item.ctas}
                addClass={`${NumberedSliderClassName}__slide__ctas__btn btn __theme-button-off-black`}
                addUlClass={`${NumberedSliderClassName}__slide__ctas`}
              />
            </div>
          );
        })}
      </Slider>
    </NumberedSliderStyle>
  );
};

NumberedSlider.displayName = "NumberedSlider";

// End Component
//////////////////////////////////////////////////////////////////////
