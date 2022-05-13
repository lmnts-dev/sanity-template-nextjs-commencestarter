/**
 *
 * SplitStatement.js
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
  CMNC_SectionTheme,
  CMNC_Image,
} from "../../../constants/Types";
import Image from "next/image";

// Styles
import { SplitStatementStyle, SplitStatementClassName } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_SplitStatement_Schema = CMNC_SectionSpacingObject & {
  part1?: string;
  part2?: string;
  image: CMNC_Image;
  imageAltText: string;
  sectionTheme?: CMNC_SectionTheme;
};

type LMNTS_SplitStatement = {
  schema: LMNTS_SplitStatement_Schema;
};

export const SplitStatement: React.FunctionComponent<LMNTS_SplitStatement> = ({
  schema,
}) => {
  let { spacing, sectionTheme, image, imageAltText, part1, part2 } = schema;

  /*const splitWords = (words: string) => {
    let index = 1;
    let characterCount = words.length;
    let splitAtCharacter = ceil(words.length / 2);
    let splitFound = false;

    while (splitFound == false && index < characterCount) {
      if (words[splitAtCharacter] == " ") {
        splitFound = true;
        return (
          <>
            <span>
              <span>{words.substring(0, splitAtCharacter)}</span>
            </span>
            <span>
              <span>{words.substring(splitAtCharacter)}</span>
            </span>
          </>
        );
      } else {
        splitAtCharacter++;
      }
      index++;
    }
    return <span>{words}</span>;
  };*/

  return (
    <SplitStatementStyle
      className={`${SplitStatementClassName} ${sectionSpacing(spacing)} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      <div className={`${SplitStatementClassName}__image`}>
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          alt={imageAltText}
        />
      </div>
      {part1 && (
        <p className={`${SplitStatementClassName}__part1 h3-vw`}>{part1}</p>
      )}
      {part2 && (
        <p className={`${SplitStatementClassName}__part2 h3-vw`}>{part2}</p>
      )}
    </SplitStatementStyle>
  );
};

SplitStatement.displayName = "SplitStatement";

// End Component
//////////////////////////////////////////////////////////////////////
