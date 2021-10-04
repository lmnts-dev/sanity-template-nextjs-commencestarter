/**
 *
 * @author Alisha Garric
 * @description The website context to provide global data with useContext()
 *
 */

// Core
import { createContext } from "react";
import { CMNC_ScrollDirection } from "../../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_Context = {
  overlayNavActive: boolean;
  scrollDirection: CMNC_ScrollDirection;
  scrollPosition: number;
};

export const Context = createContext<CMNC_Context>({
  overlayNavActive: false,
  scrollDirection: "top",
  scrollPosition: 0,
});

// End Component
//////////////////////////////////////////////////////////////////////
