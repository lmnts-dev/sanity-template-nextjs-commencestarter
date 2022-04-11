// __________________________________________________________________________________________

/**
 *
 * @name SectionTheme
 * @author Alisha Garric
 *
 */

export const SectionTheme = [
  {
    name: "sectionTheme",
    type: "string",
    title: "Section Theme",
    descrription:
      "If none is chosen, your section theme will fall back to your general website theme.",
    options: {
      list: [
        { title: "Default", value: "default" },
        { title: "Tan", value: "tan" },
        { title: "Black", value: "dark" },
        { title: "White", value: "light" },
        { title: "Light Gray", value: "light-gray" },
        { title: "Yellow", value: "yellow" },
        { title: "Mustard", value: "mustard" },
        { title: "Beige", value: "beige" },
        { title: "Light Blue", value: "light-blue" },
      ],
      layout: "dropdown",
    },
  },
];

export const SectionThemeSubtle = [
  {
    name: "sectionThemeSubtle",
    type: "string",
    title: "Section Theme",
    description:
      "If none is chosen, your section theme will fall back to your default website theme.",
    options: {
      list: [
        { title: "White (default)", value: "default" },
        { title: "Light Gray", value: "light-gray" },
      ],
      layout: "dropdown",
    },
  },
];

export const SectionAccent = [
  {
    name: "sectionAccent",
    type: "string",
    title: "Section Accent",
    description:
      "If none is chosen, your section theme will fall back to your default website accent color.",
    options: {
      list: [
        { title: "Mustard (default)", value: "mustard" },
        { title: "Yellow", value: "yellow" },
        { title: "Light Blue", value: "light-blue" },
      ],
      layout: "dropdown",
    },
  },
];

export const Color = [
  {
    name: "color",
    type: "string",
    title: "Color",
    validation: (Rule) => Rule.required(),
    options: {
      list: [
        { title: "White", value: "white" },
        { title: "Light Gray", value: "light-gray" },
        { title: "Yellow", value: "yellow" },
        { title: "Mustard", value: "mustard" },
        { title: "Black", value: "black" },
        { title: "Beige", value: "beige" },
        { title: "Light Blue", value: "light-blue" },
      ],
      layout: "dropdown",
    },
  },
];
