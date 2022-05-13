/**
 *
 * @author Alisha Garric
 * @description The website <head>
 *
 */

// Core
import Head from "next/head";
import React from "react";
import { Settings } from "../../../constants/site/Settings";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface SiteHead {
  title: string;
  description: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SiteHead = ({
  title = "Commence Starter",
  description,
}: SiteHead) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Basic page needs */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Fonts */}
      <link rel="stylesheet" href="https://use.typekit.net/vvl1tlf.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={""}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* End Favicon */}

      {/* opengraph */}
      <meta property="og:title" content={Settings.siteTitle} />
      <meta property="og:site_name" content={Settings.siteTitle} />
      <meta property="og:url" content={Settings.siteUrl} />
      <meta property="og:description" content={Settings.siteDescription} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image:url"
        content={`${Settings.siteUrl}/opengraph.jpg`}
      ></meta>
      <meta
        property="og:image:secure_url"
        content={`${Settings.siteUrl}/opengraph.jpg`}
      ></meta>
      {/* end opengraph */}

      {/* schema */}
      {/*
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Commence Studio",
            image: "http://commence.studio/opengraph.jpg",
            "@id": "",
            url: "https://commence.studio/",
            telephone: "(775) 990-8420",
            address: {
              "@type": "PostalAddress",
              streetAddress: "700 E 4th St Suite B",
              addressLocality: "Reno",
              addressRegion: "NV",
              postalCode: "89501",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 39.5315115,
              longitude: -119.80398,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.facebook.com/commence.studio/",
              "https://www.instagram.com/commence.studio/",
              "https://www.linkedin.com/company/commence-studio",
              "https://github.com/lmnts-dev",
              "https://commence.studio/",
            ],
          }),
        }}
      />*/}
      {/* end schema */}
    </Head>
  );
};
