/**
 *
 * @author Alisha Garric
 * @description Simple
 *
 */

// Core
import React from "react";
import {
  CMNC_SectionAccent,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Styles
import { AnimatedStatsClassName, AnimatedStatsStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_AnimatedStats_Schema = CMNC_SectionSpacingObject & {
  sectionTheme?: CMNC_SectionTheme;
  blockStandard?: string;
  stats: {
    number: string;
    label?: string;
  }[];
  sectionAccent?: CMNC_SectionAccent;
};

type CMNC_AnimatedStats = {
  schema: CMNC_AnimatedStats_Schema;
  addClass?: string;
};

export const AnimatedStats: React.FunctionComponent<CMNC_AnimatedStats> = ({
  schema,
  addClass,
}) => {
  let { spacing, blockStandard, stats, sectionTheme, sectionAccent } = schema;

  stats = stats.length > 5 ? stats : stats.concat(stats);

  return (
    <AnimatedStatsStyle
      className={`${AnimatedStatsClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""} ${
        sectionAccent ? `__theme-accent-${sectionAccent}` : ""
      }`}
    >
      <div className={`${AnimatedStatsClassName}__container`}>
        <div className={`${AnimatedStatsClassName}__headline`}>
          <PortableText blocks={blockStandard} />
        </div>
        <div className={`${AnimatedStatsClassName}__stats__container`}>
          <div className={`${AnimatedStatsClassName}__stats`}>
            {stats.map((stat, idx) => {
              return (
                <p key={idx}>
                  <span className={`h1 __fnt-emphasize`}>{stat.number}</span>
                  {stat.label && (
                    <span className={`__fnt-emphasize`}>{stat.label}</span>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedStatsStyle>
  );
};

AnimatedStats.displayName = "AnimatedStats";

// End Component
//////////////////////////////////////////////////////////////////////
