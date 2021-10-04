/**
 *
 * @author Alisha Garric
 * @description Blog teaser section
 *
 */

// Core
import React from "react";

// Styles
import { BlogTeaserClassName, BlogTeaserStyle } from "./styles.scss";
import Link from "next/link";
import { MarqueeRow } from "../MarqueeRow";
import {
  CMNC_ArticleSimple,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";

import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CursorDraggerActivatorClass } from "../../../components/core/Cursor/styles.scss";
import { CMNC_SectionTheme } from "../../../constants/Types";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import { SimpleCard } from "../../../components/SimpleCard";
import { generatePath } from "../../../utils/generatePath";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_BlogTeaser_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  blog_teaser_recent_articles?: {
    quantity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    articles: CMNC_ArticleSimple[];
  };
  blog_teaser_featured_articles?: CMNC_ArticleSimple[];
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_BlogTeaser = {
  schema: CMNC_BlogTeaser_Schema;
  addClass?: string;
};

const flickityOptions = {
  cellAlign: "left",
  initialIndex: 0,
  pageDots: false,
};

export const BlogTeaser: React.FunctionComponent<CMNC_BlogTeaser> = ({
  schema,
  addClass,
}) => {
  let {
    headline,
    blog_teaser_recent_articles,
    blog_teaser_featured_articles,
    spacing,
    sectionTheme,
  } = schema;

  console.log(schema);

  //get final set of articles from featured articles and recent articles
  let articles =
    blog_teaser_featured_articles && blog_teaser_recent_articles
      ? blog_teaser_featured_articles.concat(
          blog_teaser_recent_articles.articles.slice(
            0,
            blog_teaser_recent_articles.quantity
          )
        )
      : blog_teaser_featured_articles
      ? blog_teaser_featured_articles
      : blog_teaser_recent_articles
      ? blog_teaser_recent_articles.articles.slice(
          0,
          blog_teaser_recent_articles.quantity
        )
      : undefined;

  return (
    <BlogTeaserStyle
      className={`${BlogTeaserClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      {headline && (
        <MarqueeRow
          schema={{
            words: [headline],
          }}
          addClass="__section-vertical-spacing__top-none"
        />
      )}

      {articles && articles.length > 0 && (
        <Flickity
          className={"carousel"}
          options={flickityOptions}
          reloadOnUpdate
          static
        >
          {articles.map((article, idx) => {
            return (
              <div
                className={`${BlogTeaserClassName}__articles__card-container ${CursorDraggerActivatorClass}`}
                key={idx}
              >
                <SimpleCard
                  image={article.image}
                  headline={article.title}
                  link={generatePath({
                    slug: {
                      current: article.slug.current,
                    },
                    _type: "article",
                  })}
                  key={idx}
                />
              </div>
            );
          })}
        </Flickity>
      )}

      <Link href="/blog">
        <a className={`${BlogTeaserClassName}__link btn`}>View blog</a>
      </Link>
    </BlogTeaserStyle>
  );
};

BlogTeaser.displayName = "BlogTeaser";

// End Component
//////////////////////////////////////////////////////////////////////
