/**
 *
 * @author Alisha Garric
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Constants

// Components
import { sectionSpacing } from "../../utils/sectionSpacing";
import {
  ResultsLoadingAnimationClassName,
  ResultsLoadingAnimationStyle,
} from "./styles.scss";

//@ts-ignore
import Image from "next/image";
import { LockBody } from "../../constants/styles/Global";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ResultsLoadingAnimation: React.FunctionComponent = ({}) => {
  return (
    <>
      <LockBody />
      <ResultsLoadingAnimationStyle
        className={`${ResultsLoadingAnimationClassName}
      ${sectionSpacing()}`}
      >
        <div />
        <p className="h3">Thank you for sharing</p>
        <p>We’re calculating your results.</p>
      </ResultsLoadingAnimationStyle>
    </>
  );
};

ResultsLoadingAnimation.displayName = "ResultsLoadingAnimation";

// End Component
// __________________________________________________________________________________________
