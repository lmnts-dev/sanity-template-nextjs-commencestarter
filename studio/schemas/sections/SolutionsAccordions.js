/**
 *
 * @name SolutionsAccordions Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const SolutionsAccordionsRegistry = {
  title: "Solutions: Accordion Listings",
  name: "solutionsAccordions",
  type: "object",
};

export const SolutionsAccordions = {
  ...SolutionsAccordionsRegistry,
  fields: [
    ...SectionName,
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
