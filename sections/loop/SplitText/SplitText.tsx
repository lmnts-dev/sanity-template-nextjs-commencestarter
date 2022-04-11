/**
 *
 * @name SplitText
 * @author Alisha Garric
 * @description Split Text
 *
 */

// Core
import React from "react";
import {
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
import { sectionSpacing } from "../../../utils/sectionSpacing";
//@ts-ignore
import Image from "next/image";
import Sensor from "../../../components/Sensor/Sensor";

// Types

// Styles
import { SplitTextClassName, SplitTextStyle } from "./styles.scss";
import { animationVisibilityClass } from "../../../constants/styles/Global";
import { Parallax } from "react-scroll-parallax";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_SplitText_Schema = CMNC_SectionSpacingObject & {
  leftSideText: (
    | {
        _type: "textContent";
        blockArticle: string;
      }
    | {
        _type: "headline";
        headline: string;
      }
  )[];
  rightSideText: (
    | {
        _type: "textContent";
        blockArticle: string;
      }
    | {
        _type: "simpleText";
        simpleText: string;
      }
  )[];
  useAsHero?: boolean;
  linePosition?: "default" | "horizontal" | "vertical";
  layout?: "default" | "right-offset" | "no-offset";
  alignment?: "default" | "top" | "bottom";
  addDoodad?: boolean;
  sectionTheme?: CMNC_SectionTheme;
};

export type CMNC_Section_SplitText = {
  schema: CMNC_SplitText_Schema;
  addClass?: string;
};

export const SplitText: React.FunctionComponent<CMNC_Section_SplitText> = ({
  schema,
  addClass,
}) => {
  let {
    sectionTheme,
    spacing,
    useAsHero,
    linePosition,
    leftSideText,
    rightSideText,
    layout,
    addDoodad,
    alignment,
  } = schema;

  let parallaxSpeed = 40;

  let headlineInLeftSide =
    leftSideText && leftSideText[0] && leftSideText[0]._type != "textContent";

  return (
    <Sensor partialVisibility={true} offset={{ top: 0 }}>
      {({ isVisible }: { isVisible: boolean }) => (
        <SplitTextStyle
          className={`${SplitTextClassName} ${sectionSpacing(spacing)} ${
            sectionTheme ? `__theme-${sectionTheme}` : ""
          } ${layout ? `__layout-${layout}` : ""} ${
            layout ? `__alignment-${alignment}` : ""
          } ${isVisible ? animationVisibilityClass : ""} ${addClass}`}
        >
          {addDoodad && (
            <Parallax
              translateY={[parallaxSpeed * -1, parallaxSpeed]}
              className={`${SplitTextClassName}__doodad`}
            ></Parallax>
          )}
          <div
            className={`${SplitTextClassName}__left __wysiwyg-text ${
              linePosition && headlineInLeftSide ? `__line-${linePosition}` : ""
            }`}
          >
            {leftSideText &&
              leftSideText.length > 0 &&
              leftSideText.map((block, idx) => {
                let splitHeadline =
                  block._type == "headline"
                    ? block.headline.split(" ").map((word, idxx) => {
                        return <span key={idxx}>{word + " "}</span>;
                      })
                    : undefined;
                return (
                  <div className={`${SplitTextClassName}__block`} key={idx}>
                    {block._type == "headline" ? (
                      <>
                        {useAsHero ? (
                          <h1 className={`__fnt-upper`}>{splitHeadline}</h1>
                        ) : (
                          <h2 className={`h1 __fnt-upper`}>{splitHeadline}</h2>
                        )}
                      </>
                    ) : (
                      <PortableText blocks={block.blockArticle} />
                    )}
                  </div>
                );
              })}
          </div>
          <div className={`${SplitTextClassName}__right __wysiwyg-text`}>
            {rightSideText &&
              rightSideText.length > 0 &&
              rightSideText.map((block, idx) => {
                return (
                  <div className={`${SplitTextClassName}__block`} key={idx}>
                    {block._type == "textContent" ? (
                      <PortableText blocks={block.blockArticle} />
                    ) : (
                      <p>{block.simpleText}</p>
                    )}
                  </div>
                );
              })}
          </div>
        </SplitTextStyle>
      )}
    </Sensor>
  );
};

SplitText.displayName = "SplitText";

// End Component
// __________________________________________________________________________________________
