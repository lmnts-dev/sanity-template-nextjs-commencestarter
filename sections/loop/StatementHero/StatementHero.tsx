/**
 *
 * @author Alisha Garric
 * @description Statement hero section
 *
 */

// Core
import React from "react";

// Styles
import { StatementHeroClassName, StatementHeroStyle } from "./styles.scss";
import Link from "next/link";
import {
  CMNC_Image,
  CMNC_InternalLink,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CursorNoneActivatorClass } from "../../../components/core/Cursor/styles.scss";
import { generatePath } from "../../../utils/generatePath";
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_Schema_StatementHero = CMNC_SectionSpacingObject & {
  textAlignment?: "left" | "right" | "center";
  textContent: (CMNC_StatementHero_TextLink | CMNC_StatementHero_PlainText)[];
  sectionTheme?: CMNC_SectionTheme;
};

export type CMNC_StatementHero = {
  schema: CMNC_Schema_StatementHero;
  addClass?: string;
};

export type CMNC_StatementHero_TextLink = {
  _type: "textLink";
  link: CMNC_InternalLink;
  image: CMNC_Image;
};

export type CMNC_StatementHero_PlainText = {
  text: string;
  _type: "plainText";
};

export const StatementHero: React.FunctionComponent<CMNC_StatementHero> = ({
  schema,
  addClass,
}) => {
  let { textAlignment, textContent, spacing, sectionTheme } = schema;

  return (
    <StatementHeroStyle
      className={`${StatementHeroClassName} __is-aligned-${
        textAlignment ? textAlignment : "center"
      } ${sectionSpacing(spacing)} ${addClass} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      <h1 className={`${StatementHeroClassName}__heading h2 alt`}>
        {textContent &&
          textContent.length > 0 &&
          textContent.map((sentence_part, idx: number) => {
            if (sentence_part._type == "textLink") {
              return (
                <Link
                  key={idx}
                  href={generatePath(sentence_part.link.internalLink)}
                >
                  <a
                    key={idx}
                    className={`${StatementHeroClassName}__heading__link ${CursorNoneActivatorClass}`}
                  >
                    <span
                      className={`${StatementHeroClassName}__heading__link__image`}
                    >
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={sentence_part.image.url}
                        alt={sentence_part.link.label}
                      />
                    </span>
                    <span
                      className={`${StatementHeroClassName}__heading__link__text`}
                    >
                      {sentence_part.link.label.trim()}
                    </span>
                  </a>
                </Link>
              );
            } else {
              return sentence_part.text.split(" ").map((part, idx) => {
                if (part != " " && part != "") {
                  return (
                    <span
                      key={idx + "plain"}
                      className={`${StatementHeroClassName}__heading__plain-text`}
                    >
                      {part}
                    </span>
                  );
                } else return <></>;
              });
            }
          })}
        <div className="blur" />
      </h1>
    </StatementHeroStyle>
  );
};

StatementHero.displayName = "StatementHero";

// End Component
//////////////////////////////////////////////////////////////////////
