/**
 *
 * @name WysiwygSection Section
 * @author Alisha Garric
 * @description Simple WysiwygSection Schema
 * @requires /web/sections/WysiwygSection
 *
 */

import { BlockArticle } from "../components/DefaultBlocks";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const WysiwygSectionRegistry = {
  title: "Text: Wysiwyg Section",
  name: "wysiwygSection",
  type: "object",
};

export const WysiwygSection = {
  ...WysiwygSectionRegistry,
  fields: [
    ...SectionName,
    ...BlockArticle(true, undefined, "Content"),
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
