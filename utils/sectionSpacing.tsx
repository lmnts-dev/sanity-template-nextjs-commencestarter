/**
 *
 * sectionSpacing.tsx
 * @author Alisha Garric
 *
 */

import { CMNC_SectionSpacing } from "../constants/Types";

export const sectionSpacing = (spacing?: CMNC_SectionSpacing) => {
  if (spacing) {
    return `__section-horizontal-spacing __section-vertical-spacing${
      spacing && spacing.top ? "__top-" + spacing.top : ""
    }${spacing && spacing.bottom ? "__bottom-" + spacing.bottom : ""}`;
  } else {
    return `__section-horizontal-spacing __section-vertical-spacing`;
  }
};
