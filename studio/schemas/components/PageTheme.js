// __________________________________________________________________________________________

/**
 *
 * @name PageTheme
 * @author Alisha Garric
 *
 */

export const PageTheme = [
  {
    name: "pageTheme",
    type: "string",
    title: "Page Theme",
    descrription:
      "If none is chosen, your page theme will fall back to your general website theme.",
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
