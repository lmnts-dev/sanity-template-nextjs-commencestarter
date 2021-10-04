/**
 *
 * CenteredText.js
 * @author Alisha Garric
 * @description Centered Text
 *
 *
 */

// Core
import React from "react";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import {
  CMNC_SectionSpacingObject,
  CMNC_Cta,
  CMNC_SectionTheme,
  CMNC_Image,
} from "../../../constants/Types";
import { Cta } from "../../../components/Cta";
import Image from "next/image";

// Styles
import { CenteredTextStyle, CenteredTextClassName } from "./styles.scss";
import { Settings } from "../../../constants/site/Settings";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_CenteredText_Schema = CMNC_SectionSpacingObject & {
  body?: string;
  headline?: string;
  alt?: string;
  caption?: string;
  cta?: CMNC_Cta;
  image?: CMNC_Image;
  sectionTheme?: CMNC_SectionTheme;
};

type LMNTS_CenteredText = {
  schema: LMNTS_CenteredText_Schema;
};

export const CenteredText: React.FunctionComponent<LMNTS_CenteredText> = ({
  schema,
}) => {
  let { body, headline, spacing, caption, cta, sectionTheme, image, alt } =
    schema;

  return (
    <CenteredTextStyle
      className={`${CenteredTextClassName} ${sectionSpacing(spacing)} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      {image && (
        <div className={`${CenteredTextClassName}__background-image`}>
          <Image
            src={image.url}
            layout="fill"
            objectFit="cover"
            className={`${CenteredTextClassName}__background-image__next-img`}
            alt={
              alt
                ? alt
                : headline
                ? headline
                : caption
                ? caption
                : Settings.siteTitle
            }
          />
        </div>
      )}
      <div className={`${CenteredTextClassName}__text`}>
        {caption && (
          <p className={`${CenteredTextClassName}__text__caption txt-caption`}>
            {caption}
          </p>
        )}
        {headline && (
          <p className={`${CenteredTextClassName}__text__headline h2`}>
            {headline}
          </p>
        )}
        {body && (
          <PortableText
            blocks={body}
            className={`${CenteredTextClassName}__content alt`}
          />
        )}
        <Cta cta={cta} addClass={`btn add-knotch add-knotch-indent`} />
      </div>
    </CenteredTextStyle>
  );
};

CenteredText.displayName = "CenteredText";

// End Component
//////////////////////////////////////////////////////////////////////
