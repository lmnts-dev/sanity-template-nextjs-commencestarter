/**
 *
 * @name VideoRow Section
 * @author Alisha Garric
 * @description Simple VideoRow Schema
 * @requires /web/sections/VideoRow
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const VideoRowRegistry = {
  title: "Image: Video Row",
  name: "videoRow",
  type: "object",
};

export const VideoRow = {
  ...VideoRowRegistry,
  fields: [
    ...SectionName,
    {
      name: "video",
      title: "Vimeo Video Link",
      type: "string",
      validation: (validate) => validate.required(),
    },
    {
      name: "poster",
      title: "Poster Image",
      description:
        "Will show before video is finished loading. Its always a good idea to upload the first frame of the video.",
      type: "image",
      validation: (validate) => validate.required(),
    },
    {
      name: "alt",
      title: "Alt Text",
      description: "For Poster Image",
      type: "string",
      validation: (validate) => validate.required(),
    },
    ...SectionTheme,
  ],
};
