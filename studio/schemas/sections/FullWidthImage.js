/**
 *
 * @name FullWidthImage Section
 * @author Alisha Garric
 *
 */

import { Image, ImageAltText } from "../components/ImageItems";
import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const FullWidthImageRegistry = {
  title: "Image: Fullwidth Image",
  name: "fullWidthImage",
  type: "object",
};

export const FullWidthImage = {
  ...FullWidthImageRegistry,
  fields: [...SectionName, ...Image, ...ImageAltText, ...SectionTheme],
};
