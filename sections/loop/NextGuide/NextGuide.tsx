/**
 *
 * @author Alisha Garric
 * @description Next guide section
 *
 */

// Core
import React from "react";

// Styles
import { NextGuideClassName, NextGuideStyle } from "./styles.scss";
import Link from "next/link";
import { CMNC_SectionSpacingObject, CMNC_Slug } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { generatePath } from "../../../utils/generatePath";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_NextGuide_Schema = CMNC_SectionSpacingObject & {
  caption_override?: string;
  headline: string;
  internalLink: {
    _type: string;
    slug: CMNC_Slug;
  };
  sectionTheme: CMNC_SectionTheme;
};

type CMNC_NextGuide = {
  schema: CMNC_NextGuide_Schema;
  addClass?: string;
};

export const NextGuide: React.FunctionComponent<CMNC_NextGuide> = ({
  schema,
  addClass,
}) => {
  let { headline, internalLink, caption_override, spacing, sectionTheme } =
    schema;

  return (
    <NextGuideStyle
      className={`${NextGuideClassName} ${sectionSpacing(spacing)} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } ${addClass}`}
    >
      <Link href={generatePath(internalLink)}>
        <a className={`${NextGuideClassName}__link `}>
          <div
            className={`${NextGuideClassName}__link__caption txt-caption add-knotch-small`}
          >
            {caption_override ? caption_override : "Up Next"}
          </div>
          <h2 className={`${NextGuideClassName}__link__header alt`}>
            {headline}
          </h2>
        </a>
      </Link>
    </NextGuideStyle>
  );
};

NextGuide.displayName = "NextGuide";

// End Component
//////////////////////////////////////////////////////////////////////
