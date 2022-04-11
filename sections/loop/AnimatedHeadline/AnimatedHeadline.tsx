/**
 *
 * @author Alisha Garric
 * @description Animated headline section
 *
 */

// Core
import React from "react";

// Styles
import {
  AnimatedHeadlineClassName,
  AnimatedHeadlineStyle,
} from "./styles.scss";
import {
  CMNC_Cta,
  CMNC_SectionSpacingObject,
  CMNC_Image,
  CMNC_SectionAccent,
} from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { Cta } from "../../../components/Cta";
import { PortableText } from "../../../utils/sanity";
//@ts-ignore
import Image from "next/image";
import ButtonArrow from "../../../components/Icon/SVG/Custom/ButtonArrow";
import HomeDecoration from "../../../components/HomeDecoration";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import TextLoop from "react-text-loop";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_AnimatedHeadline_Schema = CMNC_SectionSpacingObject & {
  addDecorativeElement: boolean;
  alt?: string;
  image?: CMNC_Image;
  leftColumn: {
    animatedHeadline?: string[];
    unanimatedHeadline?: string;
  };
  rightColumn: {
    body?: string;
    cta?: CMNC_Cta;
  };
  sectionAccent?: CMNC_SectionAccent;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_AnimatedHeadline = {
  schema: CMNC_AnimatedHeadline_Schema;
  addClass?: string;
};

export const AnimatedHeadline: React.FunctionComponent<CMNC_AnimatedHeadline> =
  ({ schema, addClass }) => {
    let {
      leftColumn,
      rightColumn,
      sectionTheme,
      sectionAccent,
      image,
      alt,
      addDecorativeElement,
    } = schema;

    return (
      <AnimatedHeadlineStyle
        className={`${AnimatedHeadlineClassName} ${addClass} ${sectionSpacing()} ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        }`}
      >
        {image && (
          <div className={`${AnimatedHeadlineClassName}__background-image`}>
            <Image
              src={image.url}
              layout="fill"
              objectFit="cover"
              className={`${AnimatedHeadlineClassName}__background-image__next-img`}
              alt={alt}
            />
          </div>
        )}
        <div className={`${AnimatedHeadlineClassName}__text`}>
          <div className={`${AnimatedHeadlineClassName}__col`}>
            <h1>
              {leftColumn.unanimatedHeadline?.trim()}
              {leftColumn?.animatedHeadline && (
                <span style={{ display: "none" }}>
                  {leftColumn?.animatedHeadline[0]}
                </span>
              )}
            </h1>
            <TextLoop>
              {leftColumn.animatedHeadline?.map((word) => (
                <span
                  className={`${AnimatedHeadlineClassName}__animated-word h1 ${
                    sectionAccent ? "__theme-accent-" + sectionAccent : ""
                  }`}
                >
                  {word}.
                </span>
              ))}
            </TextLoop>
          </div>
          <div className={`${AnimatedHeadlineClassName}__col`}>
            {rightColumn.body && <PortableText blocks={rightColumn.body} />}

            <Cta
              cta={rightColumn.cta}
              addClass={`btn __with-arrow ${
                sectionTheme !== "mustard" ? `__btn-theme-mustard` : ""
              }`}
            >
              <ButtonArrow />
            </Cta>
          </div>
        </div>

        {addDecorativeElement ? (
          <div className={`${AnimatedHeadlineClassName}__deco-wrapper`}>
            <HomeDecoration />
          </div>
        ) : (
          ""
        )}
      </AnimatedHeadlineStyle>
    );
  };

AnimatedHeadline.displayName = "AnimatedHeadline";

// End Component
//////////////////////////////////////////////////////////////////////
