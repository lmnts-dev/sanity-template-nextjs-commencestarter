/**
 *
 * urlFor.js
 * @author Peter Laxalt
 * @description Our url handling for Sanity images.
 * @example
 * Pass the entire image object from Sanity into the function.
 * <LazyImg src={urlFor(image)} />
 *
 * You can use all the Sanity image asset modifications with
 * this function. Read more here:
 * @see https://www.sanity.io/docs/presenting-images
 *
 */

// Core
import { Sanity } from "../utils/clients";
import imageUrlBuilder from "@sanity/image-url";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const urlFor = (source: any) => {
  return imageUrlBuilder(Sanity).image(source);
};
