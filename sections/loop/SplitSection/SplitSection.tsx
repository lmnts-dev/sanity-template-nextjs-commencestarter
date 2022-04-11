/**
 *
 * @author Alisha Garric
 * @description Split section
 *
 */

// Core
import React from "react";

// Styles
import { SplitSectionClassName, SplitSectionStyle } from "./styles.scss";
//@ts-ignore
import Image from "next/image";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_Cta,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
import { Cta } from "../../../components/Cta";

//import { parseBody } from "next/dist/next-server/server/api-utils";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SplitSection_Schema = CMNC_SectionSpacingObject & {
  layout?: "left" | "default";
  body?: string;
  image: CMNC_Image;
  sectionTheme?: CMNC_SectionTheme;
  cta?: CMNC_Cta;
  icon?: CMNC_Image;
  offsetLogo?: CMNC_Image;
  headline: string;
  subheadline?: string;
};

type CMNC_SplitSection = {
  schema: CMNC_SplitSection_Schema;
  addClass?: string;
};

export const SplitSection: React.FunctionComponent<CMNC_SplitSection> = ({
  schema,
  addClass,
}) => {
  let {
    body,
    headline,
    subheadline,
    image,
    layout,
    spacing,
    sectionTheme,
    cta,
    icon,
    offsetLogo,
  } = schema;

  return (
    <SplitSectionStyle
      className={`${SplitSectionClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${layout ? `__layout-${layout}` : ""} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      <div className={`${SplitSectionClassName}__text`}>
        {icon && (
          <div className={`${SplitSectionClassName}__text__icon`}>
            <Image src={icon.url} height={icon.height} width={icon.width} />
          </div>
        )}
        {subheadline && (
          <h3 className={`${SplitSectionClassName}__text__subheadline p-sm`}>
            {subheadline}
          </h3>
        )}
        <h2 className={"h3 __fnt-med"}>{headline}</h2>
        {body && <PortableText blocks={body} />}
        <Cta cta={cta} addClass={`btn `} />
      </div>

      {image &&
        <div className={`${SplitSectionClassName}__images`}>
          <div className={`${SplitSectionClassName}__images__image`}>
            <Image
              layout="responsive"
              src={image.url}
              alt={headline}
              height={image.height}
              width={image.width}
            />
          </div>
          {offsetLogo && (
            <div className={`${SplitSectionClassName}__images__offset-image`}>
              <Image
                src={offsetLogo.url}
                height={offsetLogo.height}
                width={offsetLogo.width}
              />
            </div>
          )}
        </div>
      }
    </SplitSectionStyle>
  );
};

SplitSection.displayName = "SplitSection";

// End Component
//////////////////////////////////////////////////////////////////////
