/**
 *
 * /blog/index.tsx
 * @author Alisha Garric
 * @description The website article listings page.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Types
import { GetStaticProps, NextPage } from "next";
import {
  CMNC_Article,
  CMNC_BlogSettings,
  CMNC_Category,
} from "../../constants/Types";

// Constants
//@ts-ignore
import Pagination from "react-sanity-pagination";
import Error from "next/error";

// -- Library
import { SiteHead } from "../../components/core/SiteHead";
import { Queries } from "../../constants/Queries";
import { ArticleListings } from "../../sections/ArticleListings/ArticleListings";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import RenderSections from "../../components/RenderSections";
import { Settings } from "../../constants/site/Settings";
import { useRouter } from "next/router";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_AllArticleListings = {
  pageData?: CMNC_BlogSettings & {
    allArticles: CMNC_Article[];
    allCategories: CMNC_Category[];
  };
  preview: boolean;
};

const AllArticleListings: NextPage<CMNC_AllArticleListings> = ({
  pageData,
  preview,
}) => {
  const router = useRouter();
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  } else {
    const { data: page } = usePreviewSubscription(Queries.BlogPage(), {
      params: {},
      initialData: pageData,
      enabled: preview || router.query.preview !== null,
    });

    if (page) {
      let { allArticles, allCategories } = page;
      return (
        <>
          <SiteHead
            title={Settings.siteTitle}
            description={Settings.siteDescription}
          />
          <ArticleListings
            allCategories={allCategories}
            articles={allArticles}
            postsPerPage={page.postsPerPage}
            currentCategoryLabel={page.title}
          />

          {page.content && <RenderSections sections={page.content} />}
        </>
      );
    } else {
      return <Error statusCode={404} />;
    }
  }
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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  return {
    props: {
      pageData: await getClient().fetch(Queries.BlogPage()),
      preview,
    },
  };
};

export default AllArticleListings;
