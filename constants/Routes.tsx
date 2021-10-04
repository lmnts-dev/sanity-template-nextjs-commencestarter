/**
 *
 * @author Alisha Garric
 * @description
 * This file is primarily used to create URL structure
 * for our various routes.
 *
 */

// Top Level Interfaces
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Slugs
 * @example Our site slugs.
 *
 */

export const Slugs = {
  SiteUrl: "commencestater.com",
  BaseSlug: "/",
  Blog: {
    Slug: "/blog",
    Categories: {
      Slug: "/category",
      Query: {
        Project: "/[category]",
      },
    },
    Query: {
      Project: "/[article]",
    },
  },
};

/**
 *
 * @name CategoryRoute
 *
 */

const CategoryRoute = {
  Route: Slugs.Blog.Slug,
  SubRoute: {
    Category: {
      Route: Slugs.Blog.Categories.Slug,
    },
  },
};

/**
 *
 * @name Routes
 * @description Our Site URL Structure.
 *
 */

export const Routes = {
  BaseRoute: Slugs.BaseSlug,
  SiteUrl: Slugs.SiteUrl,
  Pages: {
    Blog: {
      Route: Slugs.Blog.Slug,
      SubRoute: {
        Category: CategoryRoute,
      },
    },
  },
};
