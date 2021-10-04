/**
 *
 * @author Alisha Garric
 * @description Full width image section
 *
 */

// Core
import React from "react";

// Styles
import { FullWidthImageClassName, FullWidthImageStyle } from "./styles.scss";

// Components
import Image from "next/image";

// Helpers
import { CMNC_Image } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_FullWidthImage_Schema = {
  image: CMNC_Image;
  alt: string;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_FullWidthImage = {
  schema: CMNC_FullWidthImage_Schema;
  addClass?: string;
};

export const FullWidthImage: React.FunctionComponent<CMNC_FullWidthImage> = ({
  schema,
  addClass,
}) => {
  let { image, alt, sectionTheme } = schema;

  return (
    <FullWidthImageStyle
      className={`${FullWidthImageClassName} ${sectionSpacing()} ${addClass} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      <div className={`${FullWidthImageClassName}__inner`}>
        <Image
          layout="responsive"
          src={image.url}
          alt={alt}
          height={image.height}
          width={image.width}
        />
      </div>
    </FullWidthImageStyle>
  );
};

FullWidthImage.displayName = "FullWidthImage";

// End Component
//////////////////////////////////////////////////////////////////////
