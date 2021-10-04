// __________________________________________________________________________________________

import { Cta, EmailLink, ExternalLink, InternalLink, PhoneLink } from "./Cta";

/**
 *
 * @name StickyHeader Section
 * @author Alisha Garric
\ *
 */
export const StickyHeader = [
  {
    name: "add_sticky_header",
    title: "Add Sticky Header?",
    type: "boolean",
    description: "If chosen, the fields below will apply.",
  },
  {
    name: "label",
    title: "Label",
    type: "string",
    description: "Shown on the left.",
  },
  {
    name: "links",
    title: "Links",
    description: "Show an array of featured links at the top of the section.",
    type: "array",
    of: [...InternalLink(), ...ExternalLink(), ...PhoneLink(), ...EmailLink()],
  },
  ...Cta(),
];

export const AddStickyHeader = [
  {
    name: "sticky_header",
    title: "Sticky Header",
    type: "object",
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [...StickyHeader],
  },
];
