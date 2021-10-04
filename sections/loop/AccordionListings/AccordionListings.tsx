/**
 *
 * @author Alisha Garric
 * @description Accordion listings
 *
 */

// Core
import React from "react";
import { StickyLinks } from "../../../components/StickyLinks";
import {
  CMNC_AddStickyHeader,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";

// Styles
import {
  AccordionListingsClassname,
  AccordionListingsStyle,
} from "./styles.scss";
import { Accordion, CMNC_Accordion } from "../../../components/Accordion";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_Section_AccordionListings_Schema = CMNC_AddStickyHeader &
  CMNC_SectionSpacingObject & {
    accordions: CMNC_Accordion[];
    sectionTheme?: CMNC_SectionTheme;
  };

export type CMNC_AccordionListings = {
  schema: CMNC_Section_AccordionListings_Schema;
  addClass?: string;
};

export const AccordionListings: React.FunctionComponent<CMNC_AccordionListings> =
  ({ schema, addClass }) => {
    let { accordions, sticky_header, spacing, sectionTheme } = schema;

    return (
      <AccordionListingsStyle
        className={`${AccordionListingsClassname} ${sectionSpacing(
          spacing
        )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
      >
        {sticky_header && (
          <StickyLinks
            label={sticky_header.label}
            links={sticky_header.links}
            cta={sticky_header.cta}
          />
        )}

        {accordions && accordions.length > 0 && (
          <ul className={`${AccordionListingsClassname}__list`}>
            {accordions.map((accordion, idx: number) => {
              return (
                <Accordion
                  key={idx}
                  index={idx}
                  headline={accordion.headline}
                  blurbs={accordion.blurbs}
                  body={accordion.body}
                />
              );
            })}
          </ul>
        )}
      </AccordionListingsStyle>
    );
  };

AccordionListings.displayName = "AccordionListings";

// End Component
// __________________________________________________________________________________________
