/**
 *
 * @author Alisha Garric
 * @description
 * This file is primarily used to manage our site's queries and the
 * manipulation of data that comes with them.
 *
 */

import groq from "groq";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Queries
 * @description Our Site Queries.
 * @returns A plethora of useful GROQ queries to fetch data.
 *
 */

export class Queries {
  /**
   *
   * Section loop query and the specific section queries that go in it
   *
   */

  static internalLinkQuery = `
    "internalLink": internalLink-> {
      _type,
      slug,
    },
  `;

  static imageInnerQuery = `
    url,
    "hasAlpha": metadata.hasAlpha,
    "height": metadata.dimensions.height,
    "width": metadata.dimensions.width,
  `;

  static imageQuery = `
    "image": image.asset-> {
      ${Queries.imageInnerQuery}
    },
  `;

  static imagesQuery = `
    "images": images[].asset-> { 
      ${Queries.imageInnerQuery}
    },
  `;

  static blogTeaserQuery = `
    "blog_teaser_recent_articles" : {
      "quantity" : recent_articles,
      "articles" : *[_type == "article"] | order(_createdAt asc) [0..10] {
        title,
        slug,
        ${Queries.imageQuery}
      },
    },
    "blog_teaser_featured_articles": blog_teaser_featured_articles[]-> {
      title,
      slug,
      ${Queries.imageQuery}
    },
  `;

  static defaultBlocksQuery = `
    body || blockAdvanced => @ {
      ...,
      "markDefs": markDefs[]{
        ...,
        reference-> {
          _type,
          slug,
        } 
      }
    },
  `;

  static loopQuery = `
    "content" : content[] {
      ...,
      ${Queries.defaultBlocksQuery}
      _type == "blogTeaser" => @ {
        ${Queries.blogTeaserQuery}
      },
      ${Queries.imageQuery}
      ${Queries.imagesQuery}
      "cta": cta[] {
        ...,
        ${Queries.internalLinkQuery}
      },
      "ctas": ctas[] {
        ...,
        ${Queries.internalLinkQuery}
      },
      "cover": cover.asset-> {
        ${Queries.imageInnerQuery}
      },
      "category": category->{
        ...,
        "featured": featured[]-> {
          ...,
          "cover" : cover.asset-> {
            ${Queries.imageInnerQuery}
          },
        }
      },
      "content" : content[] {
        ...,
        "cta": cta[] {
          ...,
          ${Queries.internalLinkQuery}
        },
      },
      "poster": poster.asset-> {
        ${Queries.imageInnerQuery}
      },
      "logos": logos[] {
        "logoImage" : logoImage.asset-> {
          ${Queries.imageInnerQuery}
        },
        ...,
      },
      "cards" : cards[] {
        ...,
        ${Queries.imageQuery}
      },
      "backgroundImage": backgroundImage.asset-> {
        ${Queries.imageInnerQuery}
      },
      "items": items[]{ 
        ...,
        ${Queries.imageQuery}
      },
      "textContent": textContent[] {
        ...,
        "link": link {
          ...,
          ${Queries.internalLinkQuery}
        },
        ${Queries.imageQuery}
      },
      "featured_articles": featured_articles[]->{
        "cover" : cover.asset->  {
          ${Queries.imageInnerQuery}
        },
        ...,
      }
    }
  `;

  /**
   *
   * Navigation Bar
   *
   */
  static NavigationData = () => {
    return groq`*[_id == "siteNav"][0]{
      ...,
    }`;
  };

  /**
   *
   * Articles/Blog
   *
   */

  static AllArticleSlugsForPaths = () => {
    return groq`*[_type == "article" && defined(slug.current)]{
      slug
    }`;
  };

  static CurrentArticle = () => {
    return groq`*[_type == "article" && slug.current == $article][0]{
      ...,
      ${Queries.imageQuery}
      "author": author-> {
        "title": title,
        ${Queries.imageQuery}
      },
      ${Queries.loopQuery}
    }`;
  };

  static AllArticles = () => {
    return groq`*[_type=='article'] | order(publishedAt desc) {
      ...,
      ${Queries.imageQuery}
      "author": author-> {
        "title": title,
        ${Queries.imageQuery}
      },
      "description": description,
      ${Queries.loopQuery}
    }`;
  };

  static CategorizedArticles = () => {
    return groq`*[_type == "article" && $category in categories[]->slug.current] {
      ...,
      ${Queries.imageQuery}
      "author": author-> {
        "title": title,
        ${Queries.imageQuery}
      },
      categories[] -> {
        title,
        slug
      },
    }`;
  };

  static CurrentArticleCategory = () => {
    return groq`*[_type == "articleCategory" && slug.current == $category][0]{
      ...,
    }`;
  };

  static AllArticleCategories = () => {
    return groq`*[_type == "articleCategory"]{
      ...,
    }`;
  };

  static BlogSettings = () => {
    return groq`*[_id == "blog"][0]{
      ...,
      ${Queries.loopQuery}
    }`;
  };

  static BlogPage = () => {
    return groq`*[_id == "blog"][0]{
      "allArticles": ${Queries.AllArticles()},
      "allCategories": ${Queries.AllArticleCategories()},
      ...,
    }`;
  };

  /**
   *
   * Home Page
   *
   */

  static HomePage = () => {
    return groq`*[_type == "siteConfig"][0]{
      frontpage-> {
        ...,
        ${Queries.loopQuery}
      }
    }`;
  };

  /**
   *
   * Pages
   *
   */

  static CurrentPage = () => {
    return groq`*[_type == "page" && slug.current == $slug][0]{
      ${Queries.loopQuery}
    }`;
  };

  static AboutPage = () => {
    return groq`*[_type == "page" && slug.current == "about"][0]{
      ...,
      ${Queries.loopQuery}
    }`;
  };

  static AllPagesSlugsForPaths = () => {
    return groq`*[_type == "page" && defined(slug.current) && !(_id in path("drafts.**"))]{
      "params": {"slug": slug.current}
    }`;
  };

  /**
   *
   * Footer and Navigation
   *
   */

  static Footer = () => {
    return groq`*[_type == "footer"][0]{
      ...,
      "secondaryFooterLinks": secondaryFooterLinks[] {
        ...,
        ${Queries.internalLinkQuery}
      },
      "mainFooterLinks": mainFooterLinks[] {
        ...,
        "links": links[] {
          ...,
          ${Queries.internalLinkQuery}
        }
      }
    }`;
  };

  static Navigation = () => {
    return groq`*[_type == "navigation"][0]{
      ...,
      "mainNavigationLinks": mainNavigationLinks[] {
        ...,
        ${Queries.internalLinkQuery}
        "links": links[] {
          ...,
          ${Queries.internalLinkQuery}
        }
      }
    }`;
  };

  /**
   *
   * Site Config
   *
   */

  static SiteConfig = () => {
    return groq`*[_type == "siteConfig"][0]{
      ...,
    }`;
  };
}
