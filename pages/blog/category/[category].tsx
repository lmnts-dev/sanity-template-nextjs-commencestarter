/**
 *
 * @author Alisha Garric
 * @description The website article listings page
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Types
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

// Components
//@ts-ignore
import Pagination from "react-sanity-pagination";

// -- Library
import { SiteHead } from "../../../components/core/SiteHead";
import { Queries } from "../../../constants/Queries";
import {
  CMNC_Article,
  CMNC_BlogSettings,
  CMNC_Category,
} from "../../../constants/Types";
import { ArticleListings } from "../../../sections/ArticleListings/ArticleListings";
import { getClient } from "../../../utils/sanity";
import RenderSections from "../../../components/RenderSections";
import { Settings } from "../../../constants/site/Settings";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_CategoryArticleListings = {
  allArticles: CMNC_Article[];
  currentCategory: CMNC_Category;
  allCategories: CMNC_Category[];
  blogSettings: CMNC_BlogSettings;
};

const CategoryArticleListings: NextPage<CMNC_CategoryArticleListings> = ({
  allArticles,
  allCategories,
  currentCategory,
  blogSettings,
}) => {
  return (
    <>
      <SiteHead
        title={`${Settings.siteTitle}`}
        description={blogSettings.description}
      />
      <ArticleListings
        allCategories={allCategories}
        currentCategory={currentCategory}
        articles={allArticles}
        postsPerPage={blogSettings.postsPerPage}
        currentCategoryLabel={currentCategory.title}
      />

      {blogSettings.content && (
        <RenderSections sections={blogSettings.content} />
      )}
    </>
  );
};

export default CategoryArticleListings;

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
  let allCategories: CMNC_Category[] = await getClient().fetch(
    Queries.AllArticleCategories()
  );

  // Get the paths we want to pre-render based on available data
  let paths = allCategories.map((category) => ({
    params: { category: category.slug.current },
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params ? params["category"] : "";

  return {
    props: {
      currentCategory: await getClient().fetch(
        Queries.CurrentArticleCategory(),
        {
          category,
        }
      ),
      allArticles: await getClient().fetch(Queries.CategorizedArticles(), {
        category,
      }),
      allCategories: await getClient().fetch(Queries.AllArticleCategories()),
      blogSettings: await getClient().fetch(Queries.BlogSettings()),
    },
  };
};
