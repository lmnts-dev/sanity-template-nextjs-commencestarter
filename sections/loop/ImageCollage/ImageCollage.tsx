/**
 *
 * @author Alisha Garric
 * @description Image collage section
 *
 */

// Core
import React from "react";

// Styles
import { ImageCollageClassName, ImageCollageStyle } from "./styles.scss";
import { CursorDraggerActivatorClass } from "../../../components/core/Cursor/styles.scss";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import Draggable from "react-draggable";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ImageCollage_Schema = CMNC_SectionSpacingObject &
  CMNC_SectionTheme & {
    headline: string;
    images: CMNC_Image[];
    sectionTheme: CMNC_SectionTheme;
  };

type CMNC_ImageCollage = {
  schema: CMNC_ImageCollage_Schema;
  addClass?: string;
};

export const ImageCollage: React.FunctionComponent<CMNC_ImageCollage> = ({
  schema,
  addClass,
}) => {
  let { images, headline, spacing, sectionTheme } = schema;

  return (
    <ImageCollageStyle
      className={`${ImageCollageClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      <h2 className={`${ImageCollageClassName}__headline`}>{headline}</h2>

      {images && images.length > 0 && (
        <div className={`${ImageCollageClassName}__images`}>
          {images.map((image, idx) => {
            return (
              <Draggable axis={"both"} key={idx}>
                <div
                  className={`${ImageCollageClassName}__images__image-container ${CursorDraggerActivatorClass}`}
                >
                  <Image
                    key={idx}
                    src={image.url}
                    alt={headline}
                    height={image.height}
                    width={image.width}
                  />
                </div>
              </Draggable>
            );
          })}
        </div>
      )}
    </ImageCollageStyle>
  );
};

ImageCollage.displayName = "ImageCollage";

// End Component
//////////////////////////////////////////////////////////////////////
