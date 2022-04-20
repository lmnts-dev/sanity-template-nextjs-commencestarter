/**
 *
 * @author Alisha Garric
 * @description Blog teaser section
 *
 */

// Core
import React from "react";

// Styles
import {
  SolutionsLinkListingsClassName,
  SolutionsLinkListingsStyle,
  SolutionsListingsSolution,
} from "./styles.scss";

//@ts-ignore
import Link from "next/link";
import {
  CMNC_SectionSpacingObject,
  CMNC_Cta,
  CMNC_Image,
  CMNC_Slug,
} from "../../../constants/Types";

import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { Cta } from "../../../components/Cta";
import { PortableText } from "../../../utils/sanity";
import { generatePath } from "../../../utils/generatePath";
import LinkArrow from "../../../components/Icon/SVG/Custom/LinkArrow";
import { Sensor } from "../../../components/Sensor";
import { animationVisibilityClass } from "../../../constants/styles/Global";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SolutionsLinkListings_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  blockBasic?: string;
  cta?: CMNC_Cta;
  solutions?: {
    _type: "solution";
    image: CMNC_Image;
    shortDescription: string;
    blockStandard: string;
    slug: CMNC_Slug;
    features?: {
      title: string;
      color: string;
    }[];
    content: any; //Section loop
  }[];
  sectionTheme?: CMNC_SectionTheme;
  fullHeight?: boolean;
};

type CMNC_SolutionsLinkListings = {
  schema: CMNC_SolutionsLinkListings_Schema;
  addClass?: string;
};

export const SolutionsLinkListings: React.FunctionComponent<
  CMNC_SolutionsLinkListings
> = ({ schema, addClass }) => {
  let {
    headline,
    spacing,
    blockBasic,
    sectionTheme,
    solutions,
    cta,
    fullHeight,
  } = schema;

  return (
    <Sensor partialVisibility={true} offset={{ top: 0 }}>
      {({ isVisible }: { isVisible: boolean }) => (
        <SolutionsLinkListingsStyle
          className={`${SolutionsLinkListingsClassName} ${sectionSpacing(
            spacing
          )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""} ${
            fullHeight ? "__full-height" : ""
          } ${isVisible ? animationVisibilityClass : ""}`}
        >
          <div className={`${SolutionsLinkListingsClassName}__container`}>
            {(headline || cta || blockBasic) && (
              <div className={`${SolutionsLinkListingsClassName}__header`}>
                {headline && (
                  <h2
                    className={`${SolutionsLinkListingsClassName}__header__headline __fnt-emphasize`}
                  >
                    {headline}
                  </h2>
                )}
                {blockBasic && (
                  <div
                    className={`${SolutionsLinkListingsClassName}__header__body`}
                  >
                    <PortableText blocks={blockBasic} />
                  </div>
                )}
                <Cta
                  cta={cta}
                  addClass={`${SolutionsLinkListingsClassName}__header__btn btn`}
                />
              </div>
            )}

            {solutions && solutions.length > 0 && (
              <div
                className={`${SolutionsLinkListingsClassName}__solutions__container`}
              >
                <div className={`${SolutionsLinkListingsClassName}__solutions`}>
                  {solutions.map((item, idx) => {
                    return (
                      <Link
                        href={generatePath({
                          _type: "solution",
                          slug: item.slug,
                        })}
                        key={idx}
                      >
                        <a>
                          <SolutionsListingsSolution
                            className={`${SolutionsLinkListingsClassName}__solutions__solution __fnt-upper ${
                              isVisible ? animationVisibilityClass : ""
                            }`}
                          >
                            <LinkArrow />
                            <span>{"Title"}</span>
                          </SolutionsListingsSolution>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </SolutionsLinkListingsStyle>
      )}
    </Sensor>
  );
};

SolutionsLinkListings.displayName = "SolutionsLinkListings";

// End Component
//////////////////////////////////////////////////////////////////////
