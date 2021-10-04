/**
 *
 * @author Alisha Garric
 * @description Sitewide settings
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Begin Interface
//////////////////////////////////////////////////////////////////////

type CMNC_Settings = {
  siteTitle: string;
  siteTitleShort: string;
  siteDescription: string;
  siteBaseKeywords: string;
  siteUrl: string;
  gtmId: string;
  fullwidthSectionBackgrounds: boolean;
};

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Settings: CMNC_Settings = {
  siteTitle: "Website",
  siteTitleShort: "Website",
  gtmId: "GTM-XXXXXXX",
  siteDescription: "Website description",
  fullwidthSectionBackgrounds: true,
  siteBaseKeywords: "keyword, keyword",
  siteUrl: "https://commence-starter.vercel.app/",
};
