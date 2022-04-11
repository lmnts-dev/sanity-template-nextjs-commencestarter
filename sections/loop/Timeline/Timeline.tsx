/**
 *
 * @name Timeline
 * @author Alisha Garric
 * @description Scaffold for section
 *
 */

// Core
import React, { useEffect, useState } from "react";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { TimelineStyle, TimelineClassName } from "./styles.scss";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { isMobile } from "react-device-detect";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_Timeline_Schema = CMNC_SectionSpacingObject & {
  items: {
    year: number;
    headline?: string;
    logo?: CMNC_Image;
    blockBasic?: string;
    image: CMNC_Image;
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

export type CMNC_Section_Timeline = {
  schema: CMNC_Timeline_Schema;
  addClass?: string;
};

export const Timeline: React.FunctionComponent<CMNC_Section_Timeline> = ({
  schema,
  addClass,
}) => {
  let { items, spacing, sectionTheme } = schema;

  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredOn, setHoveredOn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [keyIndex, setKeyIndex] = useState(1);
  let max = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredOn && visible) {
        setActiveSlide((activeSlide) =>
          activeSlide + 1 >= max ? 0 : activeSlide + 1
        );
        setKeyIndex(keyIndex + 1);
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [hoveredOn, activeSlide, keyIndex]);

  if (items && items.length > 0) {
    const yearPlacementPercentage = (yearTo: number) => {
      let yearFrom = items[0].year;
      let lastYear = items[items.length - 1].year;
      let distanceBetween =
        lastYear > yearFrom ? lastYear - yearFrom : yearFrom - lastYear;

      return ((yearTo - yearFrom) / distanceBetween) * 100 + "%";
    };

    const onChange = (isVisible: boolean) => {
      setVisible(isVisible);
    };

    const panTriggeredSlideChange = (panInfo: PanInfo) => {
      console.log(panInfo);
      if (Math.abs(panInfo.velocity.x) > 0 && Math.abs(panInfo.offset.x) > 0) {
        if (panInfo.offset.x > 0) {
          setActiveSlide((activeSlide) =>
            activeSlide + 1 >= max ? 0 : activeSlide + 1
          );
        } else {
          setActiveSlide((activeSlide) =>
            activeSlide - 1 == -1 ? max - 1 : activeSlide - 1
          );
        }
        setKeyIndex(keyIndex + 1);
      }
    };

    return (
      <VisibilitySensor partialVisibility onChange={onChange}>
        <TimelineStyle
          className={`${TimelineClassName} ${sectionSpacing(spacing)} ${
            sectionTheme ? `__theme-${sectionTheme}` : ""
          } ${addClass}`}
          key={keyIndex}
        >
          <div
            className={`${TimelineClassName}__years`}
            onMouseEnter={() => setHoveredOn(true)}
            onMouseLeave={() => setHoveredOn(false)}
          >
            {items.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`${TimelineClassName}__years__year ${
                    activeSlide >= idx ? "__active" : ""
                  }`}
                  style={{ left: yearPlacementPercentage(item.year) }}
                  onClick={() => {
                    setKeyIndex(keyIndex + 1);
                    setActiveSlide(idx);
                  }}
                >
                  <span className={`${TimelineClassName}__years__year__label`}>
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
          <motion.div
            className={`${TimelineClassName}__slides`}
            drag={isMobile ? "x" : false}
            //@ts-ignore
            dragSnapToOrigin={true}
            onDragEnd={(_e, panInfo) => {
              panTriggeredSlideChange(panInfo);
            }}
            onMouseEnter={() => setHoveredOn(true)}
            onMouseLeave={() => setHoveredOn(false)}
          >
            <div className={`${TimelineClassName}__text-slides`}>
              {items.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`${TimelineClassName}__text-slides__slide ${
                      activeSlide == idx ? "__active" : ""
                    }`}
                  >
                    <span
                      className={`${TimelineClassName}__text-slides__slide__year h4-vw`}
                    >
                      {item.year}
                    </span>
                    {item.headline && (
                      <h3 className={`h5-vw`}>{item.headline}</h3>
                    )}
                    {item.logo && (
                      <div
                        className={`${TimelineClassName}__text-slides__slide__logo`}
                      >
                        <Image
                          src={item.logo.url}
                          layout="responsive"
                          height={item.logo.height}
                          width={item.logo.width}
                          alt={item.headline ? item.headline : "Logo"}
                        />
                      </div>
                    )}

                    {item.blockBasic && (
                      <div className={`__article-text`}>
                        <PortableText blocks={item.blockBasic} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className={`${TimelineClassName}__model-slides`}>
              {items.map((item, idx) => {
                return (
                  <div
                    className={`${TimelineClassName}__model-slides__image ${
                      activeSlide == idx ? "__active" : ""
                    }`}
                  >
                    <Image
                      key={idx}
                      src={item.image.url}
                      alt={item.headline ? item.headline : item.year.toString()}
                      layout="responsive"
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </TimelineStyle>
      </VisibilitySensor>
    );
  } else return <></>;
};

Timeline.displayName = "Timeline";

// End Component
// __________________________________________________________________________________________
