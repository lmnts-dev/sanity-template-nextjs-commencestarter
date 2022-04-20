/**
 *
 * @author Alisha Garric
 * @description Text accordion section
 *
 */

// Core
import React from "react";

// Styles
import { SubNavHeaderClassName, SubNavHeaderStyle } from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { CMNC_SectionThemeSubtle } from "../../constants/Types";
//@ts-ignore
import Link from "next/link";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SubNavHeader_Schema = {
  headline: string;
  links?: {
    label: string;
    link: string;
    theme?: string;
  }[];
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

type CMNC_SubNavHeader = {
  schema: CMNC_SubNavHeader_Schema;
  addClass?: string;
};

export const SubNavHeader: React.FunctionComponent<CMNC_SubNavHeader> = ({
  schema,
  addClass,
}) => {
  let { headline, links, sectionThemeSubtle } = schema;

  return (
    <SubNavHeaderStyle
      className={`${SubNavHeaderClassName} ${sectionSpacing({
        bottom: "none",
      })} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      <h1 className={`${SubNavHeaderClassName}__headline h2`}>{headline}</h1>

      {links && links.length > 1 && (
        <div className={`${SubNavHeaderClassName}__links`}>
          <p
            className={`${SubNavHeaderClassName}__links__label p-sm __fnt-med`}
          >
            Sort by
          </p>
          {links.map((item, idx) => {
            return (
              <Link href={item.link} key={idx}>
                <a
                  className={`btn __btn-underline ${
                    item.theme ? `__theme-accent-${item.theme}` : ""
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </SubNavHeaderStyle>
  );
};

SubNavHeader.displayName = "SubNavHeader";

// End Component
//////////////////////////////////////////////////////////////////////
