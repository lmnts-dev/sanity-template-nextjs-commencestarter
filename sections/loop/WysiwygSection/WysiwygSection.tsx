/**
 *
 * @author Alisha Garric
 * @description Wysiwyg section
 *
 */

// Core
import React from "react";

// Styles
import { WysiwygSectionClassName, WysiwygSectionStyle } from "./styles.scss";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_WysiwygSection_Schema = CMNC_SectionSpacingObject & {
  blockArticle: string;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_WysiwygSection = {
  schema: CMNC_WysiwygSection_Schema;
  addClass?: string;
};

export const WysiwygSection: React.FunctionComponent<CMNC_WysiwygSection> = ({
  schema,
  addClass,
}) => {
  let { blockArticle, spacing, sectionTheme } = schema;

  return (
    <WysiwygSectionStyle
      className={`${WysiwygSectionClassName} __article-text ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      <div className={`${WysiwygSectionClassName}__container`}>
        <PortableText blocks={blockArticle} />
      </div>
    </WysiwygSectionStyle>
  );
};

WysiwygSection.displayName = "WysiwygSection";

// End Component
//////////////////////////////////////////////////////////////////////
