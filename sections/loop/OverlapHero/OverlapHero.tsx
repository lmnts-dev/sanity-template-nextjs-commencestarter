/**
 *
 * @author Alisha Garric
 * @description Overlap hero section
 *
 */

// Core
import React from "react";

// Styles
import { OverlapHeroClassName, OverlapHeroStyle } from "./styles.scss";

// Components
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_Image, CMNC_SectionTheme } from "../../../constants/Types";
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_OverlapHero_Schema = {
  subheadline?: string;
  headline: string;
  image: CMNC_Image;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_OverlapHero = {
  schema: CMNC_OverlapHero_Schema;
  addClass?: string;
};

export const OverlapHero: React.FunctionComponent<CMNC_OverlapHero> = ({
  schema,
  addClass,
}) => {
  let { headline, image, subheadline, sectionTheme } = schema;

  return (
    <OverlapHeroStyle
      className={`${OverlapHeroClassName} ${sectionSpacing({
        bottom: "none",
      })} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      <div className={`${OverlapHeroClassName}__text`}>
        <h1 className={`h2`}>{headline}</h1>
        {subheadline && <h2 className={`h6`}>{subheadline}</h2>}
      </div>

      <div className={`${OverlapHeroClassName}__image`}>
        <Image layout="fill" objectFit="cover" src={image.url} alt={headline} />
      </div>
    </OverlapHeroStyle>
  );
};

OverlapHero.displayName = "OverlapHero";

// End Component
//////////////////////////////////////////////////////////////////////
