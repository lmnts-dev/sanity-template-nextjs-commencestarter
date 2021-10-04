/**
 *
 * @name TextOverImage Section
 * @author Alisha Garric
 * @description Simple TextOverImage Schema
 * @requires /web/sections/TextOverImage
 *
 */
import { ImageReq } from "../components/ImageItems";
import { Body, Caption, Headline, Subheadline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const TextOverImageRegistry = {
  title: "Image: Text Over Image",
  name: "textOverImage",
  type: "object",
};

export const TextOverImage = {
  ...TextOverImageRegistry,
  fields: [
    ...SectionName,
    ...Caption,
    ...Headline,
    ...Subheadline,
    ...BlockBasic(),
    ...ImageReq,
    {
      name: "video",
      title: "Vimeo Video Link",
      description:
        "If you want to include a play button to video that will replace the image upon play.",
      type: "string",
    },
    {
      name: "textAlignment",
      title: "Text Alignment",
      description:
        "The text is half as wide as the image it lays over. Choose where you want to place that text on the image.",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "default" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
    },
    ...SectionTheme,
  ],
};
