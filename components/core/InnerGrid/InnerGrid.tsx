/**
 *
 * @author Alisha Garric
 * @description The website section container that provides the site max width
 *
 */

// Core
import React from "react";

// Animation
// import { motion } from "framer-motion";

// Styles
import { InnerGridStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_InnerGrid = {
  startBelowNav?: boolean;
  addClass?: string;
};

export const InnerGridClassName = "inner-grid";

export const InnerGrid: React.FunctionComponent<CMNC_InnerGrid> = ({
  startBelowNav,
  addClass,
  children,
}) => {
  return (
    <InnerGridStyle
      className={`${InnerGridClassName} ${addClass}`}
      startBelowNav={startBelowNav ? startBelowNav : false}
    >
      {children}
    </InnerGridStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
