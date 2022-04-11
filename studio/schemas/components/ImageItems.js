// __________________________________________________________________________________________

/**
 *
 * @name ImageItems
 * @author Alisha Garric
 *
 */

export const Image = [
  {
    name: "image",
    title: "Image",
    type: "image",
  },
];

export const ImageReq = [
  {
    name: "image",
    title: "Image",
    type: "image",
    validation: (Rule) => Rule.required(),
  },
];

export const Video = [
  {
    name: "video",
    title: "Video",
    type: "string",
    description: "Use vimeo external links",
  },
];

export const VideoReq = [
  {
    name: "video",
    title: "Video",
    type: "string",
    description: "Use vimeo external links",
    validation: (Rule) => Rule.required(),
  },
];

export const ImageAltText = [
  {
    name: "alt",
    title: "Image Alt Text",
    type: "string",
  },
];

export const ImageAltTextReq = [
  {
    name: "alt",
    title: "Image Alt Text",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
];

export const Image2 = (
  required = false,
  description = undefined,
  title = "Image",
  name = "image"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "image",
    },
  ];
};

export const ImageAltText2 = (
  required = false,
  description = undefined,
  title = "Image Alt Text",
  name = "alt"
) => {
  return [
    {
      title: title,
      name: name,
      description: description,
      validation: (validate) => (required ? validate.required() : validate),
      type: "string",
    },
  ];
};
