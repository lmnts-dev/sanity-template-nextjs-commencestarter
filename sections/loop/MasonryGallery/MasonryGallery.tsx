/**
 *
 * @name MasonryGallery
 * @author Alisha Garric
 * @description Scaffold for section
 *
 */

// Core
import React from "react";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import Image from "next/image";
import Masonry from "react-masonry-css";

// Types

// Styles
import { MasonryGalleryClassName, MasonryGalleryStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_MasonryGallery_Schema = CMNC_SectionSpacingObject & {
  sectionTheme?: CMNC_SectionTheme;
  items: {
    image: CMNC_Image;
    alt: string;
  }[];
};

export type CMNC_Section_MasonryGallery = {
  schema: CMNC_MasonryGallery_Schema;
  addClass?: string;
};

export const MasonryGallery: React.FunctionComponent<CMNC_Section_MasonryGallery> =
  ({ schema, addClass }) => {
    let { sectionTheme, items, spacing } = schema;

    const breakpointColumns = {
      default: 3,
      676: 2,
    };

    return (
      <MasonryGalleryStyle
        className={`${MasonryGalleryClassName} ${sectionSpacing(spacing)} ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        } ${addClass}`}
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className={`${MasonryGalleryClassName}__grid`}
          columnClassName={`${MasonryGalleryClassName}__grid__column`}
        >
          {items &&
            items.length > 0 &&
            items.map((item, idx) => {
              return (
                <Image
                  className={`${MasonryGalleryClassName}__grid__column__image`}
                  src={item.image.url}
                  height={item.image.height}
                  width={item.image.width}
                  key={idx}
                />
              );
            })}
        </Masonry>
      </MasonryGalleryStyle>
    );
  };

MasonryGallery.displayName = "MasonryGallery";

// End Component
// __________________________________________________________________________________________
