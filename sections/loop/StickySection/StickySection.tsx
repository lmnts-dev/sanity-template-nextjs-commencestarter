/**
 *
 * @author Alisha Garric
 * @description Sticky section
 *
 */

// Core
import React from "react";

// Styles
import { StickySectionClassName, StickySectionStyle } from "./styles.scss";
import Image from "next/image";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";

//import { parseBody } from "next/dist/next-server/server/api-utils";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_StickySection_Schema = CMNC_SectionSpacingObject & {
  layout?: "left" | "right";
  body: string;
  images: CMNC_Image[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_StickySection = {
  schema: CMNC_StickySection_Schema;
  addClass?: string;
};

export const StickySection: React.FunctionComponent<CMNC_StickySection> = ({
  schema,
  addClass,
}) => {
  let { body, images, layout, spacing, sectionTheme } = schema;

  console.log(schema, "sticky section");
  return (
    <StickySectionStyle
      className={`${StickySectionClassName} ${sectionSpacing(
        spacing
      )} ${addClass} __layout-${layout} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      <div
        className={`${StickySectionClassName}__col ${StickySectionClassName}__col__content`}
      >
        <div
          className={`${StickySectionClassName}__col__inner add-doodad add-doodad-indent`}
        >
          <PortableText blocks={body} />
        </div>
      </div>

      <div className={`${StickySectionClassName}__col__img`}>
        <div className={`${StickySectionClassName}__col__inner`}>
          {images
            ? images.map((image, idx: number) => {
                return (
                  <div
                    className={`${StickySectionClassName}__img-wrapper`}
                    key={idx}
                  >
                    <Image
                      layout="responsive"
                      src={image.url}
                      alt={body}
                      height={image.height}
                      width={image.width}
                    />
                  </div>
                );
              })
            : false}
        </div>
      </div>
    </StickySectionStyle>
  );
};

StickySection.displayName = "StickySection";

// End Component
//////////////////////////////////////////////////////////////////////
