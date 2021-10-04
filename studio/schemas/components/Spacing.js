// __________________________________________________________________________________________

/**
 *
 * @name SectionSpacing
 * @author Alisha Garric
 *
 */

export const SectionSpacing = [
  {
    name: "spacing",
    title: "Section Spacing",
    type: "object",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      {
        title: "Top Spacing",
        name: "top",
        type: "string",
        options: {
          list: [
            { title: "Default", value: "default" },
            { title: "Half", value: "half" },
            { title: "None", value: "none" },
          ],
          layout: "radio",
        },
      },
      {
        title: "Bottom Spacing",
        name: "bottom",
        type: "string",
        options: {
          list: [
            { title: "Default", value: "default" },
            { title: "Half", value: "half" },
            { title: "None", value: "none" },
          ],
          layout: "radio",
        },
      },
    ],
  },
];
