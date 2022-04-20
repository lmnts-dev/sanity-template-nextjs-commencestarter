/**
 *
 * @author Alisha Garric
 * @description Blog teaser section
 *
 */

// Core
import React from "react";

// Styles
import { NewsroomTeaserClassName, NewsroomTeaserStyle } from "./styles.scss";
//@ts-ignore
import Link from "next/link";
import {
  CMNC_NewsSimple,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";

import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { generatePath } from "../../../utils/generatePath";
import { NewsroomListing } from "../NewsroomListings";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_NewsroomTeaser_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  newsroom_teaser_recent_news?: {
    quantity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    news: CMNC_NewsSimple[];
  };
  newsroom_teaser_featured_news?: CMNC_NewsSimple[];
  sectionThemeSubtle?: CMNC_SectionTheme;
};

type CMNC_NewsroomTeaser = {
  schema: CMNC_NewsroomTeaser_Schema;
  addClass?: string;
};

export const NewsroomTeaser: React.FunctionComponent<CMNC_NewsroomTeaser> = ({
  schema,
  addClass,
}) => {
  let {
    headline,
    newsroom_teaser_recent_news,
    newsroom_teaser_featured_news,
    spacing,
    sectionThemeSubtle,
  } = schema;

  //get final set of news from featured news and recent news
  let news =
    newsroom_teaser_featured_news && newsroom_teaser_recent_news
      ? newsroom_teaser_featured_news
      : newsroom_teaser_featured_news
      ? newsroom_teaser_featured_news
      : newsroom_teaser_recent_news
      ? newsroom_teaser_recent_news.news
      : undefined;

  return (
    <NewsroomTeaserStyle
      className={`${NewsroomTeaserClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      {headline && (
        <div className={`${NewsroomTeaserClassName}__headline`}>
          <h2>{headline}</h2>
        </div>
      )}
      <div className={`${NewsroomTeaserClassName}__link`}>
        <Link href={generatePath({ _type: "newsroom" })}>
          <a className={`${NewsroomTeaserClassName}__link btn __btn-underline`}>
            Read all news
          </a>
        </Link>
      </div>

      {news && news.length > 0 && (
        <div className={`${NewsroomTeaserClassName}__news`}>
          {news.map((item, idx) => {
            return (
              <NewsroomListing
                image={item.image}
                title={item.title}
                slug={item.slug}
                key={idx}
                //seo={item.seo}
              />
            );
          })}
        </div>
      )}
    </NewsroomTeaserStyle>
  );
};

NewsroomTeaser.displayName = "NewsroomTeaser";

// End Component
//////////////////////////////////////////////////////////////////////
