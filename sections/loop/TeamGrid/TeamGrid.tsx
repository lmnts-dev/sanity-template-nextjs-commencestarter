/**
 *
 * @author Alisha Garric
 * @description Team Grid section
 *
 */

// Core
import { TeamGridClassname, TeamGridStyle } from "./styles.scss";
import {
  CMNC_Image,
  CMNC_SectionAccent,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
//@ts-ignore
import Image from "next/image";
import { PortableText } from "../../../utils/sanity";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_TeamGrid_Schema = CMNC_SectionSpacingObject & {
  sectionThemeSubtle?: CMNC_SectionTheme;
  items: (
    | CMNC_GridImageItem
    | CMNC_GridLabelItem
    | CMNC_GridContentItem
    | CMNC_GridBlankItem
  )[];
};

type CMNC_GridImageItem = {
  _type: "gridImageItem";
  image: CMNC_Image;
  alt: string;
};
type CMNC_GridLabelItem = {
  _type: "gridLabelItem";
  label: string;
};

type CMNC_GridBlankItem = {
  _type: "gridBlankItem";
  tabletVisibility?: boolean;
  desktopVisibility?: boolean;
};

type CMNC_GridContentItem = {
  _type: "gridContentItem";
  body?: string;
  headline?: string;
  subheadline?: string;
  sectionAccent?: CMNC_SectionAccent;
};

type CMNC_TeamGrid = {
  schema: CMNC_TeamGrid_Schema;
  addClass?: string;
};

export const TeamGrid: React.FunctionComponent<CMNC_TeamGrid> = ({
  schema,
  addClass,
}) => {
  let { spacing, sectionThemeSubtle, items } = schema;

  return (
    <TeamGridStyle
      className={`${TeamGridClassname} ${sectionSpacing(spacing)} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      {items.map(
        (
          gridItem:
            | CMNC_GridImageItem
            | CMNC_GridLabelItem
            | CMNC_GridContentItem
            | CMNC_GridBlankItem
        ) => {
          return (
            <div
              className={`${TeamGridClassname}__grid-item ${
                gridItem._type == "gridImageItem" ? "__image-container" : ""
              } ${
                gridItem._type == "gridBlankItem"
                  ? gridItem.tabletVisibility == true
                    ? "__hide-tablet"
                    : gridItem.desktopVisibility == true
                    ? "__hide-desktop"
                    : ""
                  : ""
              }`}
            >
              {gridItem._type == "gridLabelItem" && (
                <h3 className={"h4"}>{gridItem.label}</h3>
              )}
              {gridItem._type == "gridBlankItem" && (
                <div className={`${TeamGridClassname}__grid-item__blank`} />
              )}
              {gridItem._type == "gridImageItem" && (
                <div className={`${TeamGridClassname}__grid-item__image`}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={gridItem.image.url}
                    alt={gridItem.alt}
                  />
                </div>
              )}
              {gridItem._type == "gridContentItem" && (
                <div
                  className={`${TeamGridClassname}__content ${
                    gridItem.sectionAccent
                      ? `__theme-accent-${gridItem.sectionAccent}`
                      : ""
                  }`}
                >
                  {gridItem.headline && (
                    <p
                      className={`${TeamGridClassname}__headline __fnt-med h6`}
                    >
                      {gridItem.headline}
                    </p>
                  )}
                  {gridItem.subheadline && (
                    <p
                      className={`${TeamGridClassname}__subheadline --${
                        gridItem.sectionAccent ? gridItem.sectionAccent : ""
                      }`}
                    >
                      {gridItem.subheadline}
                    </p>
                  )}
                  {gridItem.body && <PortableText blocks={gridItem.body} />}
                </div>
              )}
            </div>
          );
        }
      )}
    </TeamGridStyle>
  );
};

TeamGrid.displayName = "TeamGrid";

// End Component
//////////////////////////////////////////////////////////////////////
