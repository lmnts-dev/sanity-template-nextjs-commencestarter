/**
 *
 * /client.ts
 * @author Peter Laxalt
 * @description The website Sanity Configuration.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////


import { ReactNode } from "react";
import sanityClient from "@sanity/client";
//import airtableClient from "airtable";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Sanity.io Settings
 * @description Our global Sanity.io settings.
 * @see https://www.sanity.io/
 *
 */



/**
 *
 * @name External Links
 * @returns External Links
 * serializers prop needed to make external links in WYSIWYGs
 *
 */
 interface IProps {
  children: ReactNode;
  mark: {
    blank: boolean;
    href: string;
  };
}

export const serializers = {
  marks: {
    link: ({mark, children}: IProps) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ? `<a href=${href} target="_blank" rel="noopener">${children}</a>` : `<a href=${href}>${children}</a>`
    }
  }
}

// General Settings

export const Sanity = sanityClient({
  projectId: "w2xt1cyc",
  dataset: "production",
  useCdn: false // `false` if you want to ensure fresh data
});

export const SanityOptions = {
  projectId: "npgy430l",
  dataset: "production",
  useCdn: false,
  serializers: serializers,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false to require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

// We have to pass a token to Sanity to authenticate us in retrieving
// draft data from Sanity for preview mode.
export const SanityPreview = sanityClient({
  ...SanityOptions,
  withCredentials: true,
  token: "skdikd9084MFCPUsi7lMHaHzADKlI443ViOoCOHa6m07Vz9c7asUitOelTNA2qwCcB7JqzKkP8jXREdU5WUZyEXOPfPDhS7ebj2MvlThLTFffT1dE98jm2hW0zzBvj0a0wmbBrfz8FVXIvskBkmWZaoaqWwhpczHakuSzyaEe3HzBkLyzXzj",
});

export const clientForPreview = sanityClient({
  ...SanityOptions,
  withCredentials: true,
  token: "skdikd9084MFCPUsi7lMHaHzADKlI443ViOoCOHa6m07Vz9c7asUitOelTNA2qwCcB7JqzKkP8jXREdU5WUZyEXOPfPDhS7ebj2MvlThLTFffT1dE98jm2hW0zzBvj0a0wmbBrfz8FVXIvskBkmWZaoaqWwhpczHakuSzyaEe3HzBkLyzXzj",

})


