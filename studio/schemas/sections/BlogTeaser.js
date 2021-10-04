/**
 *
 * @name BlogTeaser Section
 * @author Alisha Garric
 * @description Simple BlogTeaser Schema
 * @requires /web/sections/BlogTeaser
 *
 */

import { Headline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const BlogTeaserRegistry = {
  title: "Blog: Teaser",
  name: "blogTeaser",
  type: "object",
};

export const BlogTeaser = {
  ...BlogTeaserRegistry,
  fields: [
    ...SectionName,
    ...Headline,
    {
      name: "blog_teaser_featured_articles",
      title: "Featured Articles",
      description:
        "Add a max of 10. Add only if you'd like to display featured articles.",
      type: "array",
      validation: (Rule) => Rule.min(1).max(10),
      of: [
        {
          type: "reference",
          name: "article",
          to: [{ type: "article" }],
        },
      ],
    },
    {
      name: "blog_teaser_recent_articles",
      title: "How many recent articles would you like to display?",
      description:
        "Max 10. Choose only if you'd like to display recent articles.",
      type: "number",
      validation: (Rule) => Rule.min(1).max(10),
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
