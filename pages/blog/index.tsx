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

// -- Library
import { SiteHead } from "../../components/core/SiteHead";
import { Queries } from "../../constants/Queries";
import { ArticleListings } from "../../sections/ArticleListings/ArticleListings";
import { getClient } from "../../utils/sanity";
import RenderSections from "../../components/RenderSections";
import { Settings } from "../../constants/site/Settings";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_AllArticleListings = {
  allArticles: CMNC_Article[];
  allCategories: CMNC_Category[];
  blogSettings: CMNC_BlogSettings;
};

const AllArticleListings: NextPage<CMNC_AllArticleListings> = ({
  allArticles,
  allCategories,
  blogSettings,
}) => {
  return (
    <>
      <SiteHead
        title={Settings.siteTitle}
        description={Settings.siteDescription}
      />
      <ArticleListings
        allCategories={allCategories}
        articles={allArticles}
        postsPerPage={blogSettings.postsPerPage}
        currentCategoryLabel={blogSettings.title}
      />

      {blogSettings.content && (
        <RenderSections sections={blogSettings.content} />
      )}
    </>
  );
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allArticles: await getClient().fetch(Queries.AllArticles()),
      allCategories: await getClient().fetch(Queries.AllArticleCategories()),
      blogSettings: await getClient().fetch(Queries.BlogSettings()),
    },
  };
};

export default AllArticleListings;
