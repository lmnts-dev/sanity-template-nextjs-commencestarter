/**
 *
 * @author Alisha Garric
 * @description The website article page
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useEffect, useState } from "react";

// Types
import { CMNC_Article, CMNC_Slug } from "../../constants/Types";

// Constants
import { Queries } from "../../constants/Queries";

// Components
import Error from "next/error";
import { SiteHead } from "../../components/core/SiteHead";
import { ArticleClassName, ArticleStyle } from "./styles.scss";
import { getFormattedDate } from "../../utils/getFormattedDate";
import ReactPlayer from "react-player";
import { ArticleAuthor } from "../../components/Author/Author";
import RenderSections from "../../components/RenderSections";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { Settings } from "../../constants/site/Settings";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

// Inline Types
//////////////////////////////////////////////////////////////////////

type ArticlePage = {
  pageData: CMNC_Article & {
    allArticles: CMNC_Article[];
  };
  preview: boolean;
  slug: string;
};

// Begin Component
//////////////////////////////////////////////////////////////////////

const Article: NextPage<ArticlePage> = ({ pageData, preview, slug }) => {
  const router = useRouter();

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  } else {
    const { data: page } = usePreviewSubscription(Queries.CurrentArticle(), {
      params: { article: slug },
      initialData: pageData,
      enabled: preview || router.query.preview !== null,
    });

    if (page) {
      let {
        title,
        image,
        content,
        publishedAt,
        tags,
        author,
        slug,
        video,
        // allArticles,
      } = page;

      {
        /*let currentIdx = allArticles
      .map(function (article) {
        return article.slug.current;
      })
      .indexOf(slug.current);

    let nextArticle = allArticles[currentIdx + 1]
      ? allArticles[currentIdx + 1]
      : allArticles[0];
    let prevArticle = allArticles[currentIdx - 1]
      ? allArticles[currentIdx - 1]
    : allArticles[allArticles.length - 1];*/
      }

      let date = publishedAt ? getFormattedDate(publishedAt) : null;

      const [scrollTop, setScrollTop] = useState(0);

      useEffect(() => {
        const onScroll = (e: any) => {
          if (e) {
            setScrollTop(
              e && e.target && e.target.documentElement
                ? e.target.documentElement.scrollTop
                : 0
            );
          }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

      return (
        <>
          <SiteHead
            title={Settings.siteTitle}
            description={Settings.siteDescription}
          />
          <ArticleStyle className={`${ArticleClassName}`}>
            <div
              className={`${ArticleClassName}__cover`}
              style={{
                transform:
                  scrollTop > 0 ? `translateY( ${scrollTop * -2}px )` : "none",
              }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={image.url}
                alt={title}
                key={slug.current}
              />
              {video && (
                <ReactPlayer
                  url={video}
                  playing={true}
                  loop={true}
                  volume={0}
                  width={"100%"}
                  height={"100%"}
                  className={`${ArticleClassName}__cover__video`}
                />
              )}
            </div>

            <div className={`${ArticleClassName}__content`}>
              {date && (
                <p
                  className={`${ArticleClassName}__content__date txt-caption add-knotch-small add-knotch-indent`}
                >
                  {date}
                </p>
              )}
              <h1 className={`${ArticleClassName}__content__title h2 alt`}>
                {title}
              </h1>

              <ArticleAuthor name={author.name} image={author.image} />
              {content && <RenderSections sections={content} />}

              {tags && tags.length && (
                <ul className={`${ArticleClassName}__content__tags`}>
                  {tags.map((tag, idx) => {
                    if (idx < 3) {
                      return (
                        <li key={idx}>
                          {tag}
                          {idx != 2 && tags && tags.length > 3 ? `,` : ""}
                        </li>
                      );
                    } else if (idx == 3) {
                      return (
                        <li key={idx}>
                          &nbsp;+ {tags ? `${tags.length - 3} more` : "more"}
                        </li>
                      );
                    } else return <></>;
                  })}
                </ul>
              )}
            </div>
          </ArticleStyle>

          {/* TODO: Readd the guide */}
          {/*allArticles.length > 1 && (
          <ProjectGuide
            schema={{
              prev: prevArticle,
              next: nextArticle,
            }}
          />
          )*/}
        </>
      );
    } else {
      return <Error statusCode={404} />;
    }
  }
};

/**
 *
 * @name getStaticPaths
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get available data
  let allArticles = await getClient().fetch(Queries.AllArticleSlugsForPaths());

  // Get the paths we want to pre-render based on available data
  let paths = allArticles.map((article: { slug: CMNC_Slug }) => ({
    params: { article: article.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

/**
 *
 * @name getStaticProps
 * @description
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do
 * direct database queries. See the "Technical details" section.
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 *
 */

export const getStaticProps: GetStaticProps = async ({
  params = {},
  preview = false,
}) => {
  const article = params ? params["article"] : "";

  return {
    props: {
      pageData: await getClient().fetch(Queries.CurrentArticle(), { article }),
      slug: article,
      preview,
    },
  };
};

export default Article;
