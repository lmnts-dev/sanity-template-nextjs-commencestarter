/**
 *
 * @author Alisha Garric
 * @description Logos row section
 *
 */

// Core
import React from "react";

// Styles
import { LogosRowClassName, LogosRowStyle } from "./styles.scss";
import Image from "next/image";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_LogosRow_Schema = CMNC_SectionSpacingObject & {
  logos: CMNC_LogosRow_Logo[];
  logoHeight: "default" | "medium" | "small";
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_LogosRow_Logo = {
  logoImage: CMNC_Image;
  logoName: string;
};

type CMNC_LogosRow = {
  schema: CMNC_LogosRow_Schema;
  addClass?: string;
};

export const LogosRow: React.FunctionComponent<CMNC_LogosRow> = ({
  schema,
  addClass,
}) => {
  let { logoHeight, logos, spacing, sectionTheme } = schema;

  return (
    <LogosRowStyle
      className={`${LogosRowClassName}--${logoHeight} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      {logos &&
        logos.length > 0 &&
        logos.map((item, idx) => {
          return (
            <div key={idx} className={`${LogosRowClassName}__logo`}>
              <Image
                src={item.logoImage.url}
                height={item.logoImage.height}
                width={item.logoImage.width}
                alt={item.logoName}
              />
            </div>
          );
        })}
    </LogosRowStyle>
  );
};

LogosRow.displayName = "LogosRow";

// End Component
//////////////////////////////////////////////////////////////////////
