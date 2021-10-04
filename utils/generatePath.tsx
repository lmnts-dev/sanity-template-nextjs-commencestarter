/**
 *
 * generatePath.tsx
 * @author Alisha Garric
 * @description Generate website url paths based on the type of link it is. Whenever you add a new document type to the cta internal link references, make sure to add that possibility here
 *
 */

import { CMNC_InternalLinkPathFields } from "../constants/Types";

export const generatePath = (
  pathFields: CMNC_InternalLinkPathFields | undefined
) => {
  let path;

  if (pathFields) {
    path = `/${pathFields.slug ? `${pathFields.slug.current}/` : ""}`;

    if (pathFields._type == "page") {
      //don't alter the path because it is a root page
    } else if (pathFields._type == "articleCategory") {
      path = `/blog/category${path}`;
    } else if (pathFields._type == "article") {
      path = `/blog${path}`;
    }
  } else {
    console.log(
      "Generate Path Failure. Make sure you are extending and passing pathFields correctly."
    );
    path = "/";
  }

  return path;
};
