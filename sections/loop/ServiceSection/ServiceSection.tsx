/**
 *
 * quiz.tsx
 * @author Alisha Garric
 * @description The website quiz page.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Constants

// Components
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { ServiceSectionClassName, ServiceSectionStyle } from "./styles.scss";
import {
  CMNC_Cta,
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
  CMNC_Service,
} from "../../../constants/Types";

//@ts-ignore
import Image from "next/image";
import { Cta } from "../../../components/Cta";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ServiceSection_Schema = CMNC_SectionSpacingObject & {
  service: CMNC_Service;
  useAsHero?: boolean;
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
  layout?: "image-left" | "image-right";
  cta?: CMNC_Cta;
};

type CMNC_ServiceSection = {
  schema: CMNC_ServiceSection_Schema;
};

export const ServiceSection: React.FunctionComponent<CMNC_ServiceSection> = ({
  schema,
}) => {
  let { service, useAsHero, sectionThemeSubtle, layout, spacing, cta } = schema;
  let { title, shortDescription, regDescription, features, image } = service;

  return (
    <ServiceSectionStyle
      className={`${ServiceSectionClassName} ${sectionSpacing(spacing)} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      } ${useAsHero ? "__extended-image" : ""} ${
        layout ? `__layout-${layout}` : ""
      }`}
    >
      <div className={`${ServiceSectionClassName}__image`}>
        <Image src={image.url} layout="fill" objectFit="cover" />
      </div>
      <div className={`${ServiceSectionClassName}__text`}>
        {useAsHero ? (
          <h1 className={`add-doodad __fnt-med`}>{title}</h1>
        ) : (
          <h2 className={`add-doodad __fnt-med h3`}>{title}</h2>
        )}
        {shortDescription && !useAsHero && <p>{shortDescription}</p>}
        {(shortDescription || regDescription) && useAsHero && (
          <p className={`h5`}>
            {regDescription ? regDescription : shortDescription}
          </p>
        )}
        {features && features.length > 0 && (
          <ul
            className={`${ServiceSectionClassName}__text__features __checkmark-list`}
          >
            {features.map((feature, idx) => {
              return <li key={idx}>{feature}</li>;
            })}
          </ul>
        )}
        <Cta
          cta={cta}
          addClass={`${ServiceSectionClassName}__text__btn btn __btn-underline __theme-accent-light-blue`}
        />
      </div>
    </ServiceSectionStyle>
  );
};

ServiceSection.displayName = "ServiceSection";

// End Component
// __________________________________________________________________________________________
