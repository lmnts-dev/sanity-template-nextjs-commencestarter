/**
 *
 * @name Blog Sanity.io Schema
 * @author Alisha Garric
 * @description lmnts-6 Site Blog Data Model
 *
 */

import { SectionRegistry } from "../sections/_SectionRegistry";

// __________________________________________________________________________________________

export default {
  name: "blog",
  title: "Blog Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Keep it short",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "description",
      title: "Description",
      validation: (validate) => validate.required(),
      type: "text",
      rows: 2,
    },
    {
      name: "postsPerPage",
      title: "Posts Per Page",
      type: "number",
      validation: (validate) => validate.required(),
    },
    {
      name: "allCategoriesLabel",
      title: "All Categories Label",
      description:
        "Keep it short. Shown on sticky links on category pages to navigate back to main blog page.",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "content",
      type: "array",
      title: "Blog Page Sections",
      description: "Sections shown beneath all blog listings.",
      of: SectionRegistry(),
    },
  ],
};

// __________________________________________________________________________________________
