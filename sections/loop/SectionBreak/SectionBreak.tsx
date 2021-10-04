/**
 *
 * @author Alisha Garric
 * @description Simple section break
 */

// Core
import React from "react";
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";

// Styles
import { SectionBreakStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SectionBreak_Schema = CMNC_SectionSpacingObject & {
  style?: "subtle" | "bold";
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_SectionBreak = {
  schema: CMNC_SectionBreak_Schema;
  addClass?: string;
};

export const SectionBreak: React.FunctionComponent<CMNC_SectionBreak> = ({
  schema,
  addClass,
}) => {
  let { style, spacing, sectionTheme } = schema;

  return (
    <SectionBreakStyle
      className={`__style-${style ? style : ""} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    />
  );
};

SectionBreak.displayName = "SectionBreak";

// End Component
//////////////////////////////////////////////////////////////////////
