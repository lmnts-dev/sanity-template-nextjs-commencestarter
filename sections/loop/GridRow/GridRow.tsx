/**
 *
 * @author Alisha Garric
 * @description Grid row section
 *
 */

// Core
import React from "react";

// Styles
import { GridRowClassName, GridRowStyle } from "./styles.scss";
import Image from "next/image";
// Helpers
import { CMNC_Image } from "../../../constants/Types";
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_GridRow_Schema = CMNC_SectionSpacingObject & {
  items?: {
    width?: string;
    orientation?: string;
    image: CMNC_Image;
    alt: string;
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_GridRow = {
  schema: CMNC_GridRow_Schema;
  addClass?: string;
};

export const GridRow: React.FunctionComponent<CMNC_GridRow> = ({
  schema,
  addClass,
}) => {
  let { items, spacing, sectionTheme } = schema;

  if (items && items.length > 0) {
    return (
      <GridRowStyle
        className={`${GridRowClassName} ${sectionSpacing(
          spacing
        )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
      >
        {items.map((item, idx: number) => {
          let { width, orientation, image, alt } = item;

          return (
            <div
              className={`${GridRowClassName}__section-grid-col io ${GridRowClassName}__section-grid-item ${GridRowClassName}__section-grid-item-${width}w ${GridRowClassName}__section-grid-item-orientation-${orientation}`}
              key={idx}
            >
              <div className={`section-grid-img-wrapper`}>
                {item.orientation == "contain" ? (
                  <Image
                    src={image.url}
                    height={image.height}
                    width={image.width}
                    alt={alt}
                  />
                ) : (
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={image.url}
                    alt={alt}
                  />
                )}
              </div>
            </div>
          );
        })}
      </GridRowStyle>
    );
  } else return <></>;
};

GridRow.displayName = "GridRow";

// End Component
//////////////////////////////////////////////////////////////////////
