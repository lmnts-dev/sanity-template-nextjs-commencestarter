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
      ],
      layout: "dropdown",
    },
  },
];
