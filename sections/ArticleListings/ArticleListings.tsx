// Core
import Link from "next/link";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { StickyLinks } from "../../components/StickyLinks";
import { Routes, Slugs } from "../../constants/Routes";
import Image from "next/image";

// Types
import {
  CMNC_Article,
  CMNC_Category,
  CMNC_InternalLink,
} from "../../constants/Types";
//@ts-ignore
import Pagination from "react-sanity-pagination";

// Styles
import {
  ArticleListingsClassName,
  ArticleListingsStyle,
  PaginationStyle,
} from "./styles.scss";
import { ArticleAuthor } from "../../components/Author";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { getFormattedMinutes } from "../../utils/getFormattedMinutes";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_ArticleListings = {
  allCategories: CMNC_Category[] | null;
  currentCategory?: CMNC_Category | null;
  articles: CMNC_Article[] | null;
  postsPerPage: number;
  currentCategoryLabel: string;
  addClass?: string;
};

export const ArticleListings: React.FunctionComponent<CMNC_ArticleListings> = ({
  allCategories,
  currentCategory,
  articles,
  postsPerPage,
  currentCategoryLabel,
  addClass,
}) => {
  //Pagination variables
  const itemsToSend = articles;
  const [items, setItems] = useState<any[]>([]);

  //Pagination set up
  const action = (page: any, range: any, items: any) => {
    console.log(page, range);
    // Update State
    setItems(items);
  };

  //reformat categories data to pass to sticky links
  let categoryLinks: CMNC_InternalLink[] | undefined = allCategories
    ? allCategories
        .filter((cat) => {
          if (
            currentCategory != null &&
            cat.slug.current == currentCategory.slug.current
          ) {
            return false; // skip current category link
          }
          return true;
        })
        .map((cat) => {
          return {
            _type: "internalLink",
            internalLink: {
              _type: "articleCategory",
              slug: {
                current: cat.slug.current,
              },
            },
            label: cat.title,
          };
        })
    : undefined;

  //If there's no current category add "all" link
  if (currentCategory != null) {
    let allLink: CMNC_InternalLink = {
      label: "All",
      _type: "internalLink",
      internalLink: {
        _type: "page",
        slug: {
          current: Slugs.Blog.Slug,
        },
      },
    };

    if (categoryLinks == undefined) {
      categoryLinks = [allLink];
    } else {
      categoryLinks.unshift(allLink);
    }
  }

  return (
    <>
      {/* // sticky category links // */}
      <StickyLinks label={currentCategoryLabel} links={categoryLinks} />

      {/* // list of article cards // */}
      <ArticleListingsStyle
        className={`${ArticleListingsClassName} ${sectionSpacing()} ${
          addClass ? addClass : ""
        }`}
        key={currentCategory ? currentCategory.title : "all"}
      >
        {items &&
          items.length > 0 &&
          items.map((article, idx) => {
            {
              /* // get formatted date // */
            }
            let date = article.publishedAt
              ? getFormattedDate(article.publishedAt)
              : null;

            {
              /* // Get reading time // */
            }
            let fullBody: string[] = [];
            article.content &&
              article.content[0] &&
              article.content[0].content &&
              article.content[0].content.map((paragraph: any) => {
                paragraph.children.map((line: any) => fullBody.push(line.text));
              });

            {
              /* // Format reading time // */
            }
            let minutes =
              fullBody == [] ? 0 : getFormattedMinutes(fullBody.toString());

            return (
              <section
                className={`${ArticleListingsClassName}__article`}
                key={idx}
              >
                {/* // featured video // */}
                {article.video && (
                  <ReactPlayer
                    url={article.video}
                    playing={true}
                    loop={true}
                    volume={0}
                    width={"100%"}
                    height={"100%"}
                    className={`${ArticleListingsClassName}__video`}
                  />
                )}

                {/* // featured image // */}
                {
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={article.image.url}
                    alt={article.title}
                  />
                }

                {/* // link/container // */}
                <Link
                  href={`${Routes.Pages.Blog.Route}/${article.slug.current}`}
                >
                  <a className={`${ArticleListingsClassName}__article__inner`}>
                    <div
                      className={`${ArticleListingsClassName}__article__top`}
                    >
                      {/* // date // */}
                      {date && (
                        <p
                          className={`${ArticleListingsClassName}__article__top__date txt-caption add-knotch-small add-knotch-indent`}
                        >
                          {date}
                        </p>
                      )}

                      {/* // title // */}
                      <h2
                        className={`${ArticleListingsClassName}__article__top__header alt`}
                      >
                        {article.title}
                      </h2>

                      {/* // author // */}
                      {article.author && (
                        <ArticleAuthor
                          image={article.author.image}
                          name={article.author.title}
                        />
                      )}
                    </div>

                    <div
                      className={`${ArticleListingsClassName}__article__bottom add-doodad add-doodad-indent`}
                    >
                      {/* // description // */}
                      {article.description && (
                        <p
                          className={`${ArticleListingsClassName}__article__bottom__description`}
                        >
                          {article.description}
                        </p>
                      )}

                      {/* // reading time // */}
                      {minutes && minutes != 0 && (
                        <div
                          className={`${ArticleListingsClassName}__article__bottom__minutes txt-caption`}
                        >
                          {minutes}
                        </div>
                      )}
                    </div>

                    {/* // cta that only shows on featured cards // */}
                    <div
                      className={`${ArticleListingsClassName}__article__cta btn`}
                    >
                      View Article
                    </div>

                    {/* // minutes that only shows on featured cards // */}
                    {minutes && minutes != 0 && (
                      <div
                        className={`${ArticleListingsClassName}__article__featured-minutes txt-caption`}
                      >
                        {minutes}
                      </div>
                    )}
                  </a>
                </Link>
              </section>
            );
          })}
      </ArticleListingsStyle>

      {/* // pagination // */}
      <PaginationStyle>
        <Pagination
          nextButton={true}
          prevButton={true}
          nextButtonLabel={" "}
          prevButtonLabel={" "}
          action={action}
          items={itemsToSend}
          postsPerPage={postsPerPage}
        />
      </PaginationStyle>
    </>
  );
};

ArticleListings.displayName = "ArticleListings";

// End Component
// __________________________________________________________________________________________
