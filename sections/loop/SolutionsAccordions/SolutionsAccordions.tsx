/**
 *
 * @author Alisha Garric
 * @description Simple
 *
 */

// Core
import React, { useState } from "react";
import Plus from "../../../components/Icon/SVG/Custom/Plus";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
  CMNC_Slug,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { SolutionsListingsSolution } from "../SolutionsLinkListings/styles.scss";
import Image from "next/image";

// Styles
import {
  SolutionFeatures,
  SolutionsAccordionsClassName,
  SolutionsAccordionsStyle,
} from "./styles.scss";
import { PortableText } from "../../../utils/sanity";
import { generatePath } from "../../../utils/generatePath";
import Link from "next/link";
import { Sensor } from "../../../components/Sensor";
import { animationVisibilityClass } from "../../../constants/styles/Global";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SolutionsAccordions_Schema = CMNC_SectionSpacingObject & {
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
};

type CMNC_SolutionsAccordions = {
  schema: CMNC_SolutionsAccordions_Schema;
  addClass?: string;
};

export const SolutionsAccordions: React.FunctionComponent<
  CMNC_SolutionsAccordions
> = ({ schema, addClass }) => {
  let { spacing, solutions, sectionTheme } = schema;

  const [activeSolution, setActiveSolution] = useState(-1);

  const handleClick = (idx: number) => {
    setActiveSolution(idx == activeSolution ? -1 : idx);
  };

  if (solutions && solutions.length > 0) {
    return (
      <Sensor partialVisibility={true} offset={{ top: 0 }}>
        {({ isVisible }: { isVisible: boolean }) => (
          <SolutionsAccordionsStyle
            className={`${SolutionsAccordionsClassName} ${sectionSpacing(
              spacing
            )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""} ${
              isVisible ? animationVisibilityClass : ""
            }`}
          >
            {solutions &&
              solutions.map((item, idx) => {
                return (
                  <SolutionsListingsSolution
                    className={`${SolutionsAccordionsClassName}__solution ${
                      idx == activeSolution ? "__open" : ""
                    }`}
                    as="button"
                    key={idx}
                    onClick={() => handleClick(idx)}
                  >
                    <Plus />
                    <span className={`__fnt-upper`}>Title</span>
                    <div
                      className={`${SolutionsAccordionsClassName}__solution__content`}
                    >
                      <div
                        className={`${SolutionsAccordionsClassName}__solution__content__image`}
                      >
                        <Image
                          src={item.image.url}
                          //@ts-ignore
                          layout="fill"
                          //@ts-ignore
                          lazyBoundary={"700px"}
                          objectFit="cover"
                          alt={"Title"}
                        />
                      </div>
                      <div
                        className={`${SolutionsAccordionsClassName}__solution__content__description`}
                      >
                        <PortableText blocks={item.blockStandard} />
                      </div>
                      {item.features && item.features.length > 0 && (
                        <SolutionFeatures
                          className={`${SolutionsAccordionsClassName}__solution__content__features`}
                        >
                          {item.features.map((feature, idxx) => {
                            return (
                              <li
                                key={idxx}
                                className={`__theme-accent-${feature.color}`}
                              >
                                <p>{feature.title}</p>
                              </li>
                            );
                          })}
                        </SolutionFeatures>
                      )}
                      <div
                        className={`${SolutionsAccordionsClassName}__solution__content__cta`}
                      >
                        <Link
                          href={generatePath({
                            _type: "solution",
                            slug: item.slug,
                          })}
                        >
                          <a className={`btn __btn-underline`}>
                            Explore Title
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SolutionsListingsSolution>
                );
              })}
          </SolutionsAccordionsStyle>
        )}
      </Sensor>
    );
  } else return <></>;
};

SolutionsAccordions.displayName = "SolutionsAccordions";

// End Component
//////////////////////////////////////////////////////////////////////
