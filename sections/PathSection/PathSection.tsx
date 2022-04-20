/**
 *
 * quiz.tsx
 * @author Jose Rios
 * @description Case Study Path.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Constants

// Components
import { sectionSpacing } from "../../utils/sectionSpacing";
import { PathSectionClassName, PathSectionStyle } from "./styles.scss";
import {
  CMNC_Path,
  CMNC_PathSimple,
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
} from "../../constants/Types";
import { PortableText } from "../../utils/sanity";

//@ts-ignore
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_PathSection_Schema = CMNC_SectionSpacingObject & {
  path: CMNC_Path | CMNC_PathSimple;
  body?: string;
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
  headline?: string;
};

type CMNC_PathSection = {
  schema: CMNC_PathSection_Schema;
  addClass?: any;
};

export const PathSection: React.FunctionComponent<CMNC_PathSection> = ({
  schema,
  children,
  addClass,
}) => {
  let { path, body, spacing, headline, sectionThemeSubtle } = schema;

  return (
    <PathSectionStyle
      className={`${PathSectionClassName} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      } ${sectionSpacing(spacing)} ${addClass ? addClass : ""}`}
    >
      <div
        className={`${PathSectionClassName}__info ${
          path.pathTheme ? `__theme-${path.pathTheme}` : ""
        }`}
      >
        {headline && <p className="h3">{headline}</p>}
        <div className={`${PathSectionClassName}__info__text`}>
          {path.image && (
            <div className={`${PathSectionClassName}__info__text__icon`}>
              <Image src={path.image.url} layout="fill" objectFit="contain" />
            </div>
          )}
          <div className={`${PathSectionClassName}__info__text__container`}>
            <h2 className={`h3`}>{`${path.title}`}</h2>
            <p>{path.shortDescription}</p>
          </div>
        </div>
        {path.services && (
          <ul
            className={`${PathSectionClassName}__info__services __checkmark-list`}
          >
            {path.services.map((service, idx) => {
              return (
                //@ts-ignore
                <li key={idx}>{service.title ? service.title : service}</li>
              );
            })}
          </ul>
        )}
        {children}
      </div>
      {body && (
        <div className={`${PathSectionClassName}__details`}>
          <PortableText blocks={body} />
        </div>
      )}
    </PathSectionStyle>
  );
};

PathSection.displayName = "PathSection";

// End Component
// __________________________________________________________________________________________
