// __________________________________________________________________________________________

import { Settings } from "../../../constants/site/Settings";

/**
 *
 * @name PageSEO
 * @author Alisha Garric
 *
 */

export const PageSEO = [
  {
    name: "seo",
    title: "SEO",
    type: "seo-tools",
    options: {
      baseUrl: Settings.siteUrl,
      baseUrl(doc) {
        return Settings.siteUrl;
      },
      slug(doc) {
        // (REQUIRED) a function to return the slug of the current page, which will be appended to the baseUrl
        return doc.slug.current;
      },
      fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
      content(doc) {
        return "simple html representation of your doc"; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
      },
      title(doc) {
        return "page title"; // (OPTIONAL) return page title otherwise inferred from scrape
      },
      description(doc) {
        return "page description"; // (OPTIONAL) return page description otherwise inferred from scrape
      },
      locale(doc) {
        return "page locale"; // (OPTIONAL) return page locale otherwise inferred from scrape
      },
      contentSelector: "body", // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
    },
  },
];

export const OtherPageSEO = [
  {
    name: "description",
    type: "text",
    title: "Description",
    description: "This description populates meta-tags on the webpage",
    fieldset: "metadata",
  },
  {
    name: "openGraphImage",
    type: "image",
    title: "Open Graph Image",
    description: "Image for sharing previews on Facebook, Twitter etc.",
    fieldset: "metadata",
    options: { hotspot: true },
  },
  {
    name: "includeInSitemap",
    type: "boolean",
    title: "Include page in sitemap",
    description: "For search engines. Will be added to /sitemap.xml",
  },
  {
    name: "disallowRobots",
    type: "boolean",
    title: "Disallow in robots.txt",
    description: "Hide this route for search engines",
  },
];
