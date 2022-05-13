/**
 *
 * @author Alisha Garric
 * @description Simple
 *
 */

// Core
import React from "react";
import { Cta } from "../../../components/Cta";
import GraphBar from "../../../components/Icon/SVG/Custom/GraphBar";
import { CMNC_Cta, CMNC_SectionTheme } from "../../../constants/Types";
import {
  h1WithLinksSerializers,
  h2WithLinksSerializers,
  PortableText,
} from "../../../utils/sanity";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Styles
import { HomepageHeroClassName, HomepageHeroStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_HomepageHero_Schema = {
  blockH1: string;
  blockBasic?: string;
  cta?: CMNC_Cta;
  blockH2: string;
  sectionTheme?: CMNC_SectionTheme;
  alternateSectionTheme?: CMNC_SectionTheme;
};

type CMNC_HomepageHero = {
  schema: CMNC_HomepageHero_Schema;
  addClass?: string;
};

export const HomepageHero: React.FunctionComponent<CMNC_HomepageHero> = ({
  schema,
  addClass,
}) => {
  let {
    blockH1,
    blockBasic,
    blockH2,
    cta,
    sectionTheme,
    alternateSectionTheme,
  } = schema;

  return (
    <>
      <HomepageHeroStyle
        className={`${HomepageHeroClassName} ${sectionSpacing({
          bottom: "none",
        })} ${addClass} ${
          sectionTheme ? `__theme-${alternateSectionTheme}` : ""
        }`}
      >
        <div className={`${HomepageHeroClassName}__first-section`}>
          <PortableText blocks={blockH1} serializers={h1WithLinksSerializers} />
          {blockBasic && (
            <div
              className={`${HomepageHeroClassName}__first-section__body h5 ${
                !cta ? "__last-item" : ""
              }`}
            >
              <PortableText blocks={blockBasic} />
            </div>
          )}
          {cta && (
            <div
              className={`${HomepageHeroClassName}__first-section__btn __last-item`}
            >
              <Cta cta={cta} addClass={`btn __btn-underline`} />
            </div>
          )}
          <div className={`${HomepageHeroClassName}__first-section__svg`}>
            <GraphBar type="man-25" />
            <GraphBar type="bar-40" />
            <GraphBar type="man-55" />
            <GraphBar type="bar-70" />
            <GraphBar type="bar-85" />
            <GraphBar type="man-100" />
          </div>
        </div>
      </HomepageHeroStyle>
      <HomepageHeroStyle
        className={`${HomepageHeroClassName} ${sectionSpacing({
          top: "none",
        })} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
      >
        <div className={`${HomepageHeroClassName}__second-section`}>
          <div
            className={`${HomepageHeroClassName}__second-section__headline `}
          >
            <PortableText
              blocks={blockH2}
              serializers={h2WithLinksSerializers}
            />
          </div>

          <div className={`${HomepageHeroClassName}__second-section__svg`}>
            <GraphBar />
            <GraphBar />
            <GraphBar />
            <GraphBar />
            <GraphBar />
            <GraphBar />
          </div>
        </div>
      </HomepageHeroStyle>
    </>
  );
};

HomepageHero.displayName = "HomepageHero";

// End Component
//////////////////////////////////////////////////////////////////////
