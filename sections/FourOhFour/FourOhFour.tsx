/**
 *
 * @author Alisha Garric
 * @description Our 404 page
 *
 */

// Core
import React from "react";

// Styles
import { FourOhFourStyle } from "./styles.scss";

// Helpers
import { Routes } from "../../constants/Routes";
import Link from "next/link";
import { sectionSpacing } from "../../utils/sectionSpacing";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const FourOhFour = () => {
  return (
    <FourOhFourStyle className={`${sectionSpacing()}`}>
      <h1 className="headline">"Works on my machine."</h1>
      <p className="h2">Says every developer ever.</p>
      <Link href={Routes.BaseRoute}>
        <a className="btn">Go back home</a>
      </Link>
    </FourOhFourStyle>
  );
};

FourOhFour.displayName = "FourOhFour";

// End Component
//////////////////////////////////////////////////////////////////////
