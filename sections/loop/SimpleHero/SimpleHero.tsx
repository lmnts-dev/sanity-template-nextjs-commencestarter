/**
 *
 * @author Alisha Garric
 * @description Simple hero section
 *
 */

// Core
import React from "react";

// Styles
import { SimpleHeroClassName, SimpleHeroStyle } from "./styles.scss";
import { CMNC_SectionSpacingObject, CMNC_Cta } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { PortableText } from "../../../utils/sanity";
import { Cta } from "../../../components/Cta";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SimpleHero_Schema = CMNC_SectionSpacingObject & {
  headline: string;
  body?: string;
  cta?: CMNC_Cta;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_SimpleHero = {
  schema: CMNC_SimpleHero_Schema;
  addClass?: string;
};

export const SimpleHero: React.FunctionComponent<CMNC_SimpleHero> = ({
  schema,
  addClass,
}) => {
  let { headline, body, spacing, sectionTheme, cta } = schema;

  return (
    <SimpleHeroStyle
      className={`${SimpleHeroClassName} ${
        !cta && !body ? `__centered` : ""
      }  ${sectionSpacing(spacing)} ${addClass} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } 
      `}
    >
      <div className={`${SimpleHeroClassName}__header`}>
        {headline && <h1 className={"h2"}>{headline}</h1>}
      </div>

      {(cta || body) && (
        <div className={`${SimpleHeroClassName}__body`}>
          <PortableText blocks={body} />
          <Cta cta={cta} addClass={`btn `} />
        </div>
      )}
    </SimpleHeroStyle>
  );
};

SimpleHero.displayName = "SimpleHero";

// End Component
//////////////////////////////////////////////////////////////////////
