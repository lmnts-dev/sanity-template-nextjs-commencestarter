/**
 *
 * @name CenteredText Section
 * @author Alisha Garric
 *
 */

import { SectionName } from "../components/SectionName";
import { SectionSpacing } from "../components/Spacing";
import { SectionTheme } from "../components/SectionTheme";
import { Cta } from "../components/Cta";
import { Image, ImageAltText } from "../components/ImageItems";
import { Body, Caption, Headline } from "../components/TextItems";
import { BlockStandard } from "../components/DefaultBlocks";

// __________________________________________________________________________________________

export const CenteredTextRegistry = {
  title: "Text: Centered Text",
  name: "centeredText",
  type: "object",
};

export const CenteredText = {
  ...CenteredTextRegistry,
  fields: [
    ...SectionName,
    ...Caption,
    ...Headline,
    ...BlockStandard(false, undefined, "Body", "body"),
    ...Cta(),
    ...Image,
    ...ImageAltText,
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
