/**
 *
 * @name SectionName
 * @author Alisha Garric
 * @description Scaffold for section
 *
 */

// Core
import React from "react";
import {
  CMNC_SectionSpacingObject,
  CMNC_SectionTheme,
} from "../../constants/Types";
import { sectionSpacing } from "../../utils/sectionSpacing";

// Types

// Styles
import { SectionNameClassName, SectionNameStyle } from "./styles.scss";

/*
 * To use this scaffold section, start by replacing SectionName with your section
 * name in capitalize camel case. Make sure to do this for the folder name, this file
 * name and within all files in the folder. Replace the className variable in the .scss
 * with a class name for your section.
 *
 * Now you can delete this description and start to add schema for your section.
 * Add the schema types to the type below and output data/html in the component. Don't
 * forget to use BEM naming, which includes utilizing the ClassName variable on each tag.
 */

// Begin Component
// __________________________________________________________________________________________

export type CMNC_SectionName_Schema = CMNC_SectionSpacingObject & {
  sectionTheme?: CMNC_SectionTheme;
};

export type CMNC_Section_SectionName = {
  schema: CMNC_SectionName_Schema;
  addClass?: string;
};

export const SectionName: React.FunctionComponent<CMNC_Section_SectionName> = ({
  schema,
  addClass,
}) => {
  let { sectionTheme } = schema;

  return (
    <SectionNameStyle
      className={`${SectionNameClassName} ${sectionSpacing} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } ${addClass}`}
    >
      {/* Add html here */}
    </SectionNameStyle>
  );
};

SectionName.displayName = "SectionName";

// End Component
// __________________________________________________________________________________________
