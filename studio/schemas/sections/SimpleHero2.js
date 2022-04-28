/**
 *
 * @name SimpleHero Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";
import { Image2 } from "../components/ImageItems";

// __________________________________________________________________________________________

export const SimpleHero2Registry = {
  title: "Hero: Simple Hero 2",
  name: "simpleHero-2",
  type: "object",
};

export const SimpleHero2 = {
  ...SimpleHero2Registry,
  fields: [
    {
      name: "headlineBeginning",
      title: "Headline Beginning",
      type: "string",
      description: "This part of the headline will be in a smaller font",
    },
    {
      name: "headlineEnding",
      title: "Headline Ending",
      validation: (validate) => validate.required(),
      type: "string",
      description: "This part of the headline will be in a larger font",
    },
    {
      name: "video",
      title: "Video",
      description:
        "Optional. If included it will be autocropped to fit the entire screen.",
      type: "string",
    },
    {
      name: "gif",
      title: "Video GIF Fallback",
      description:
        "Videos cause background music to pause on mobile. To avoid this behavior, upload a GIF of the video to use on mobile. Be careful of giant GIF sizes.",
      type: "image",
    },
    ...Image2(
      true,
      "If excluding a video, this image will always show. If including a video, this image will be used as a fallback when the video hasn't loaded yet. For this reason, we suggest making the image the first frame of the video."
    ),
    ...SectionTheme,
  ],
  preview: {
    select: {
      title: "headlineBeginning",
      subtitle: "headlineEnding",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: (title ? title + " " : "") + subtitle,
      };
    },
  },
};
