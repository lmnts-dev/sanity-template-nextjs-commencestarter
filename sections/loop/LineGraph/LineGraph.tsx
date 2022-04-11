/**
 *
 * LineGraph.js
 * @author Alisha Garric
 *
 *
 */

// Core
import React from "react";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
} from "../../../constants/Types";
//@ts-ignore
import Image from "next/image";

// Styles
import { LineGraphStyle, LineGraphClassName } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_LineGraph_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  body?: string;
  position?: string;
  image: CMNC_Image;
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

type LMNTS_LineGraph = {
  schema: LMNTS_LineGraph_Schema;
};

export const LineGraph: React.FunctionComponent<LMNTS_LineGraph> = ({
  schema,
}) => {
  let { spacing, headline, body, image, position, sectionThemeSubtle } = schema;

  return (
    <LineGraphStyle
      className={`${LineGraphClassName} ${sectionSpacing(spacing)} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      <div className={`${LineGraphClassName}__inner`}>
        {(headline || body) && (
          <div
            className={`${LineGraphClassName}__text ${
              position ? `__position-${position}` : ""
            }`}
          >
            {headline && (
              <h2 className={`${LineGraphClassName}__text__headline __fnt-med`}>
                {headline}
              </h2>
            )}
            {body && (
              <p className={`${LineGraphClassName}__text__body`}>{body}</p>
            )}
          </div>
        )}
        <Image
          src={image.url}
          height={image.height}
          width={image.width}
          layout="responsive"
          alt={headline ? headline : "graph"}
        />
      </div>
    </LineGraphStyle>
  );
};

LineGraph.displayName = "LineGraph";

// End Component
//////////////////////////////////////////////////////////////////////
