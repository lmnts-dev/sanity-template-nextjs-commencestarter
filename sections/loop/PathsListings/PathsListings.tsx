/**
 *
 * @author Alisha Garric
 * @description PathsListing
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";
import { Cta } from "../../../components/Cta";

// Constants

// Components
import {
  CMNC_Path,
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { PathsListingsStyle, PathsListingsClassName } from "./styles.scss";
//@ts-ignore
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_PathsListings_Schema = CMNC_SectionSpacingObject & {
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
  paths: CMNC_Path[];
};

type CMNC_PathsListings = {
  schema: CMNC_PathsListings_Schema;
};

export const PathsListings: React.FunctionComponent<CMNC_PathsListings> = ({
  schema,
}) => {
  let { paths, sectionThemeSubtle, spacing } = schema;

  return (
    <PathsListingsStyle
      className={`${PathsListingsClassName} ${sectionSpacing(spacing)} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      {paths &&
        paths.length > 0 &&
        paths.map((path, idx) => {
          return (
            <div key={idx} className={`${PathsListingsClassName}__path`}>
              <div className={`${PathsListingsClassName}__path__header`}>
                <div
                  className={`${PathsListingsClassName}__path__header__image __theme-accent-${path.pathTheme}`}
                >
                  <Image src={path.image.url} layout="fill" objectFit="cover" />
                </div>
                <h2
                  className={`${PathsListingsClassName}__path__header__title`}
                >
                  {path.title}
                </h2>
              </div>
              {path.shortDescription && <p>{path.shortDescription}</p>}
              <Cta
                addClass={`btn __btn-underline __theme-accent-${path.pathTheme}`}
                cta={[
                  {
                    _type: "internalLink",
                    label: `Learn more on ${path.title}`,
                    internalLink: {
                      _type: "path",
                      slug: path.slug,
                    },
                  },
                ]}
              />
            </div>
          );
        })}
    </PathsListingsStyle>
  );
};

PathsListings.displayName = "PathsListings";

// End Component
// __________________________________________________________________________________________
