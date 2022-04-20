/**
 *
 * quiz.tsx
 * @author Alisha Garric
 * @description The website quiz page.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Constants

// Components
import { sectionSpacing } from "../../utils/sectionSpacing";
import { PathIntroClassName, PathIntroStyle } from "./styles.scss";
import {
  CMNC_Path,
  CMNC_PathsIntro,
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../constants/Types";
import { Cta } from "../../components/Cta";
import { PortableText } from "../../utils/sanity";
//@ts-ignore
import Link from "next/link";
import { generatePath } from "../../utils/generatePath";
//@ts-ignore
import Image from "next/image";
import ButtonArrow from "../../components/Icon/SVG/Custom/ButtonArrow";
import { slugify } from "../../utils/slugify";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_PathIntro_Schema = CMNC_SectionSpacingObject & {
  pathsIntro: CMNC_PathsIntro;
  currentPath?: CMNC_Path;
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_PathIntro = {
  schema: CMNC_PathIntro_Schema;
};

export const PathIntro: React.FunctionComponent<CMNC_PathIntro> = ({
  schema,
}) => {
  let { currentPath, pathsIntro, sectionTheme } = schema;
  let { intro, pathsOrder } = pathsIntro;
  let { headline, blockBasic, cta } = intro;

  console.log(pathsOrder);

  return (
    <PathIntroStyle
      className={`${PathIntroClassName} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } ${sectionSpacing({
        top: "none",
        bottom: "none",
      })}`}
    >
      {currentPath && (
        <div className={`${PathIntroClassName}__path-intro`}>
          <div className={`${PathIntroClassName}__path-intro__header`}>
            <p
              className={`${PathIntroClassName}__path-intro__header__subheadline add-doodad __theme-accent-${currentPath.pathTheme}`}
            >
              {currentPath.description.subheadline}
            </p>
            <h1 className="h2">{currentPath.description.headline}</h1>
          </div>
          <PortableText blocks={currentPath.description.blockBasic} />
        </div>
      )}
      <div className={`${PathIntroClassName}__hero`}>
        <h2 className={`${PathIntroClassName}__headline h2`}>{headline}</h2>
        <div className={`${PathIntroClassName}__details`}>
          <PortableText blocks={blockBasic} />
          <Cta
            cta={cta}
            addClass={`btn ${
              sectionTheme != "mustard" ? "__btn-theme-mustard" : ""
            } __with-arrow`}
          >
            <ButtonArrow />
          </Cta>
        </div>

        {pathsOrder && pathsOrder.length > 0 && (
          <nav
            className={`${PathIntroClassName}__tabs-nav __theme-accent-${
              currentPath ? currentPath.pathTheme : "light-gray"
            }`}
          >
            <ul
              className={`${PathIntroClassName}__tabs`}
              id={
                slugify(currentPath ? currentPath.title : "all") +
                "-tabs-anchor"
              }
            >
              {pathsOrder.map((path, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${PathIntroClassName}__tabs__item ${
                      path.slug.current ==
                      (currentPath && currentPath.slug.current)
                        ? "__active"
                        : ""
                    } __theme-accent-${path.pathTheme}`}
                  >
                    <Link
                      href={
                        generatePath({ _type: "path", slug: path.slug }) +
                        "#" +
                        slugify(path.title) +
                        "-tabs-anchor"
                      }
                    >
                      <a className={`${PathIntroClassName}__tabs__item__link`}>
                        <Image
                          src={path.image.url}
                          height={path.image.height}
                          width={path.image.width}
                        />
                        <h3
                          className={`${PathIntroClassName}__tabs__item__link__label`}
                        >
                          {path.title}
                        </h3>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </PathIntroStyle>
  );
};

PathIntro.displayName = "PathIntro";
// End Component
// __________________________________________________________________________________________
