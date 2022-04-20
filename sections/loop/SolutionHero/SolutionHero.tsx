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
import { SolutionHeroClassName, SolutionHeroStyle } from "./styles.scss";
import {
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
  CMNC_Solution,
} from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
//@ts-ignore
import Image from "next/image";
import { SolutionFeatures } from "../../loop/SolutionsAccordions/styles.scss";
import { SplitText } from "../../loop/SplitText";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SolutionHero_Schema = CMNC_SectionSpacingObject & {
  solution: CMNC_Solution;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_SolutionHero = {
  schema: CMNC_SolutionHero_Schema;
};

export const SolutionHero: React.FunctionComponent<CMNC_SolutionHero> = ({
  schema,
}) => {
  let { solution, sectionTheme } = schema;
  let { title, shortDescription, blockStandard, image, features } = solution;

  return (
    <>
      <SplitText
        schema={{
          leftSideText: [{ headline: title, _type: "headline" }],
          rightSideText: [
            { simpleText: shortDescription, _type: "simpleText" },
          ],
          alignment: "top",
          linePosition: "horizontal",
          layout: "no-offset",
        }}
      />
      <SolutionHeroStyle
        className={`${SolutionHeroClassName} ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        } ${sectionSpacing({
          top: "none",
          bottom: "none",
        })}`}
      >
        <div className={`${SolutionHeroClassName}__image`}>
          <Image
            src={image.url}
            //@ts-ignore
            layout="fill"
            objectFit="cover"
            alt={title} //@ts-ignore
            lazyBoundary={"700px"}
          />
        </div>
        <div className={`${SolutionHeroClassName}__description`}>
          <PortableText blocks={blockStandard} />
        </div>
        {features && features.length > 0 && (
          <SolutionFeatures className={`${SolutionHeroClassName}__features`}>
            {features.map((feature, idxx) => {
              return (
                <li key={idxx} className={`__theme-accent-${feature.color}`}>
                  <p className={`h5`}>{feature.title}</p>
                </li>
              );
            })}
          </SolutionFeatures>
        )}
      </SolutionHeroStyle>
    </>
  );
};

SolutionHero.displayName = "SolutionHero";
// End Component
// __________________________________________________________________________________________
