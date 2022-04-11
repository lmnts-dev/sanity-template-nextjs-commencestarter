/**
 *
 * @author Alisha Garric
 * @description Simple
 *
 */

// Core
import React from "react";
import { Sensor } from "../../../components/Sensor";
import { animationVisibilityClass } from "../../../constants/styles/Global";
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

  return (
    <Sensor partialVisibility={true} offset={{ top: 0 }}>
      {({ isVisible }: { isVisible: boolean }) => (
        <AnimatedStatsStyle
          className={`${AnimatedStatsClassName} ${sectionSpacing(
            spacing
          )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""} ${
            sectionAccent ? `__theme-accent-${sectionAccent}` : ""
          } ${isVisible ? animationVisibilityClass : ""}`}
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
                      <span className={`h1 __fnt-emphasize`}>
                        {stat.number}
                      </span>
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
      )}
    </Sensor>
  );
};

AnimatedStats.displayName = "AnimatedStats";

// End Component
//////////////////////////////////////////////////////////////////////
