/**
 *
 * @name Article Sanity.io Schema
 * @author Alisha Garric
 * @description lmnts-6 Site Article Data Model
 *
 */

import { ImageReq, Video } from "../components/ImageItems";
import { PageBasics } from "../components/PageBasics";

// __________________________________________________________________________________________

export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    ...PageBasics,
    ...ImageReq,
    ...Video,
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (validate) => validate.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "articleCategory" }] }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (validate) => validate.required(),
      options: {
        dateFormat: "MMM Do, YYYY",
        timeFormat: null,
      },
    },
    {
      name: "description",
      title: "Short Description",
      validation: (validate) => validate.required().max(213),
      description: "Preview of article",
      type: "text",
      rows: 2,
    },
    {
      name: "content",
      title: "Body Content",
      type: "array",
      validation: (validate) => validate.required().min(1),
      of: [
        { type: "wysiwygSection" },
        { type: "sectionBreak" },
        { type: "gridRow" },
        { type: "fullWidthImage" },
        { type: "videoRow" },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
          name: "tag",
          title: "Tag Name",
        },
      ],
    },
  ],
};

// __________________________________________________________________________________________
