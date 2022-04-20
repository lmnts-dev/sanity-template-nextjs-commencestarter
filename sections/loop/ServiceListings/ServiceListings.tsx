/**
 *
 * @author Alisha Garric
 * @description Full width image section
 *
 */

// Core
import React from "react";

// Styles
import { ServiceListingsClassName, ServiceListingsStyle } from "./styles.scss";

// Helpers
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ServiceListings_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  blockBasic?: string;
  serviceListingsServiceCategories: {
    categories?: { title: string; subservices?: string[] }[];
  };
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_ServiceListings = {
  schema: CMNC_ServiceListings_Schema;
  addClass?: string;
};

export const ServiceListings: React.FunctionComponent<CMNC_ServiceListings> = ({
  schema,
  addClass,
}) => {
  let {
    blockBasic,
    headline,
    serviceListingsServiceCategories,
    sectionTheme,
    spacing,
  } = schema;

  let { categories } = serviceListingsServiceCategories;

  return (
    <ServiceListingsStyle
      className={`${ServiceListingsClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      {headline && (
        <h2 className={`${ServiceListingsClassName}__headline h3-vw`}>
          <span className={`${ServiceListingsClassName}__headline__inner`}>
            {[...Array(10)].map(() => (
              <span>{headline}</span>
            ))}
          </span>
        </h2>
      )}
      <div className={`${ServiceListingsClassName}__image`}></div>

      {blockBasic && (
        <div
          className={`${ServiceListingsClassName}__body p-sm __article-text`}
        >
          <PortableText blocks={blockBasic} />
        </div>
      )}

      {categories && categories.length > 0 && (
        <div className={`${ServiceListingsClassName}__services`}>
          {categories.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`${ServiceListingsClassName}__services__category`}
              >
                <h3
                  className={`${ServiceListingsClassName}__services__category__title txt-caption-sm`}
                >
                  <span>{item.title}</span>
                </h3>
                {item.subservices && item.subservices.length > 0 && (
                  <ul
                    className={`${ServiceListingsClassName}__services__category__items`}
                  >
                    {item.subservices.map((service, idxx) => {
                      return (
                        <li key={idxx} className={`p-sm`}>
                          {service}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </ServiceListingsStyle>
  );
};

ServiceListings.displayName = "ServiceListings";

// End Component
//////////////////////////////////////////////////////////////////////
