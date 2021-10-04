/**
 *
 * @author Alisha Garric
 * @description Grid card listings section
 *
 */

// Core
import React from "react";

// Styles
import {
  GridCardListingsClassName,
  GridCardListingsStyle,
} from "./styles.scss";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { SimpleCard } from "../../../components/SimpleCard";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_GridCardListings_Schema = CMNC_SectionSpacingObject & {
  caption?: string;
  headline?: string;
  cards: {
    image: CMNC_Image;
    headline: string;
    subheadline?: string;
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_GridCardListings = {
  schema: CMNC_GridCardListings_Schema;
  addClass?: string;
};

export const GridCardListings: React.FunctionComponent<CMNC_GridCardListings> =
  ({ schema, addClass }) => {
    let { cards, caption, headline, spacing, sectionTheme } = schema;

    return (
      <GridCardListingsStyle
        className={`${GridCardListingsClassName} ${sectionSpacing(
          spacing
        )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
      >
        {caption && (
          <div className={`${GridCardListingsClassName}__caption txt-caption`}>
            {caption}
          </div>
        )}
        {headline && (
          <h2 className={`${GridCardListingsClassName}__header h1`}>
            {headline}
          </h2>
        )}

        {cards && cards.length > 0 && (
          <div className={`${GridCardListingsClassName}__cards-container`}>
            {cards.map((card, idx) => {
              return (
                <SimpleCard
                  key={idx}
                  image={card.image}
                  headline={card.headline}
                  subheadline={card.subheadline}
                />
              );
            })}
          </div>
        )}
      </GridCardListingsStyle>
    );
  };

GridCardListings.displayName = "GridCardListings";
// End Component
//////////////////////////////////////////////////////////////////////
