/**
 *
 * navPosition.tsx
 * @author Alisha Garric
 *
 */

import { CMNC_ScrollDirection } from "../constants/Types";

export const navPosition = (scrollDirection: CMNC_ScrollDirection) => {
  return scrollDirection == "top"
    ? "__nav-large"
    : scrollDirection == "up"
    ? "__nav-default"
    : scrollDirection == "down"
    ? "__nav-hidden"
    : "";
};
