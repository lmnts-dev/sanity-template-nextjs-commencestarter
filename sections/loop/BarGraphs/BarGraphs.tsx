/**
 *
 * BarGraphs.js
 * @author Alisha Garric
 * @description Centered Text
 *
 *
 */

// Core
import React from "react";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import {
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
} from "../../../constants/Types";
//@ts-ignore
import Image from "next/image";

// Styles
import { BarGraphsStyle, BarGraphsClassName } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_BarGraphs_Schema = CMNC_SectionSpacingObject & {
  graphs?: {
    headline?: string;
    body?: string;
    bars?: {
      percentage: number;
      color: string;
    }[];
  }[];
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

type LMNTS_BarGraphs = {
  schema: LMNTS_BarGraphs_Schema;
};

export const BarGraphs: React.FunctionComponent<LMNTS_BarGraphs> = ({
  schema,
}) => {
  let { spacing, graphs, sectionThemeSubtle } = schema;

  return (
    <BarGraphsStyle
      className={`${BarGraphsClassName} ${sectionSpacing(spacing)} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      {graphs &&
        graphs.length > 0 &&
        graphs.map((graph, idx) => {
          return (
            <div className={`${BarGraphsClassName}__graph`} key={idx}>
              {graph.bars && graph.bars.length > 0 && (
                <div className={`${BarGraphsClassName}__graph__bars`}>
                  {graph.bars.map((graph, idxx) => {
                    return (
                      <div
                        key={idxx}
                        className={`${BarGraphsClassName}__graph__bars__bar __theme-accent-${graph.color}`}
                        style={{ height: `${graph.percentage}%` }}
                      />
                    );
                  })}
                </div>
              )}
              {graph.headline && (
                <h2
                  className={`${BarGraphsClassName}__graph__headline __fnt-med`}
                >
                  {graph.headline}
                </h2>
              )}
              {graph.body && (
                <p className={`${BarGraphsClassName}__graph__body`}>
                  {graph.body}
                </p>
              )}
            </div>
          );
        })}
    </BarGraphsStyle>
  );
};

BarGraphs.displayName = "BarGraphs";

// End Component
//////////////////////////////////////////////////////////////////////
