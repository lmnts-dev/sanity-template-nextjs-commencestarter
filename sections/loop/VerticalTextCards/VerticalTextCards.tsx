/**
 *
 * @name VerticalTextCards
 * @author Alisha Garric
 * @description Scaffold for section
 *
 */

// Core
import React, { useState } from "react";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import Image from "next/image";

// Styles
import {
  VerticalTextCardsClassName,
  VerticalTextCardsStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_VerticalTextCards_Schema = CMNC_SectionSpacingObject & {
  headline: string;
  blockBasic?: string;
  items: {
    headline: string;
    blockBasic?: string;
    image: CMNC_Image;
    overlayText?: string;
  }[];
  sectionTheme?: CMNC_SectionTheme;
};

export type CMNC_Section_VerticalTextCards = {
  schema: CMNC_VerticalTextCards_Schema;
  addClass?: string;
};

export const VerticalTextCards: React.FunctionComponent<CMNC_Section_VerticalTextCards> =
  ({ schema, addClass }) => {
    let { sectionTheme, headline, blockBasic, items } = schema;

    const [activeCard, setActiveCard] = useState(-1);

    return (
      <VerticalTextCardsStyle
        className={`${VerticalTextCardsClassName} ${sectionSpacing()} ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        } ${addClass} ${activeCard != -1 ? "__blur" : ""}`}
        onClick={() => (activeCard != -1 ? setActiveCard(-1) : null)}
      >
        {items &&
          items.length > 0 &&
          items.map((item, idx) => {
            return (
              <div
                className={`${VerticalTextCardsClassName}__card ${
                  idx == activeCard ? "__active" : ""
                }`}
                key={idx}
                onClick={() => setActiveCard(idx)}
              >
                <h3
                  className={`${VerticalTextCardsClassName}__card__headline h6-vw`}
                >
                  <span>{item.headline}</span>
                </h3>
                <div className={`${VerticalTextCardsClassName}__card__image`}>
                  {item.overlayText && (
                    <div
                      className={`${VerticalTextCardsClassName}__card__image__overlay`}
                    >
                      <div
                        className={`${VerticalTextCardsClassName}__card__image__overlay__inner`}
                      >
                        <p className="h4-vw">{item.headline}</p>
                        {item.blockBasic && (
                          <span className="p-sm">
                            <PortableText blocks={item.blockBasic} />
                          </span>
                        )}
                        <p>{item.overlayText}</p>
                      </div>
                    </div>
                  )}
                  <Image src={item.image.url} layout="fill" objectFit="cover" />
                </div>
                <div
                  className={`${VerticalTextCardsClassName}__card__text p-sm __article-text`}
                >
                  {item.blockBasic && <PortableText blocks={item.blockBasic} />}
                </div>
              </div>
            );
          })}
        {headline && (
          <h2 className={`${VerticalTextCardsClassName}__headline h3-vw`}>
            {headline}
          </h2>
        )}
        {blockBasic && (
          <div className={`${VerticalTextCardsClassName}__body`}>
            <PortableText blocks={blockBasic} />
          </div>
        )}
      </VerticalTextCardsStyle>
    );
  };

VerticalTextCards.displayName = "VerticalTextCards";

// End Component
// __________________________________________________________________________________________
