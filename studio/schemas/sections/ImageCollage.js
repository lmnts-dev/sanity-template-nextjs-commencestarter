/**
 *
 * @name ImageCollage Section
 * @author Alisha Garric
 * @description Simple ImageCollage Schema
 * @requires /web/sections/ImageCollage
 *
 */

// __________________________________________________________________________________________
import { ImageReq } from "../components/ImageItems";
import { Headline, HeadlineReq } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";

export const ImageCollageRegistry = {
  title: "Image: Collage",
  name: "imageCollage",
  type: "object",
};

export const ImageCollage = {
  ...ImageCollageRegistry,
  fields: [
    ...SectionName,
    ...HeadlineReq,
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (validate) => validate.required().min(1).max(8),
      of: [...ImageReq],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
