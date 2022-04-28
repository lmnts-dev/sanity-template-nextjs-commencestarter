/**
 *
 * @name TransitionSplitSection Section
 * @author Alisha Garric
 *
 */
//import { Image } from "../components/ImageItems";
import { HeadlineReq, Subheadline } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { BlockBasic } from "../components/DefaultBlocks";
import { Cta, InternalLink } from "../components/Cta";

// __________________________________________________________________________________________

export const TransitionSplitSectionRegistry = {
  title: "Image: Transition Split Section",
  name: "transitionSplitSection",
  type: "object",
};

export const TransitionSplitSection = {
  ...TransitionSplitSectionRegistry,
  fields: [
    ...SectionName,
    ...HeadlineReq,
    ...BlockBasic(false, undefined, "Body", "body"),
    {
      title: "Page to Transition To",
      description: `VERY IMPORTANT: The page you select here must have the "Simple Hero" as the first section on the page. This is because only the styles from that section line up one to one with this section well enough to create a smooth transition. If the page you choose here does not use a "Simple Hero" as the first section, no special transition effect will occur.`,
      name: "destination",
      type: "reference",
      to: [{ type: "page" }],
      validation: (validate) => validate.required(),
    },
    {
      title: "Include logo above text?",
      name: "logo",
      type: "boolean",
    },
   // ...Image(true, undefined, "Background Image"),
    ...SectionSpacing,
  ],
};
