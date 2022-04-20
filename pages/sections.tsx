/**
 *
 * sections.tsx
 * @author Jose Rios
 * @description Page sections.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Constants
import { Strings } from "../constants/Strings";

// Components
import { InnerGrid } from "../components/core/InnerGrid";
import { SiteHead } from "../components/core/SiteHead";
//import { SanityOptions } from "../../../clients";
import { Component } from "react";
import { CaseStudiesTeaser } from "../sections/loop/CaseStudiesTeaser";
import { FeaturesListings } from "../sections/loop/FeaturesListings";
import { ServiceListings } from "../sections/loop/ServiceListings";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_Sections = {
  __quiz: any;
};


export class Sections extends Component<LMNTS_Sections> {


  render() {

    return (
      <InnerGrid startBelowNav>
        <SiteHead
          title={`${Sections} | ${Strings.baseTitle}`}
          description="Quiz Exploration"
        />
        <h1>Sections</h1>

        <CaseStudiesTeaser
          schema={{
            headline: "Case Studies Teaser",
            case_studies_teaser_featured_studies: [
              {
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/497ca130c4ef3d210a7f26e3c78d99e3150e0d74-2100x1608.jpg?w=850&auto=format",
                },
                title: "Title",
                slug: {
                  current: "www.google.com"
                },
                path: {
                    title: "Teaser",
                },
                location: "Reno",
                publishedAt: "05/04/20"
              },
              {
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/1d50d7d2f6ad8b7ec8e51db6121fa272cfadf795-3000x2000.jpg?w=850&auto=format",
                },
                title: "Title",
                slug: {
                  current: "www.google.com"
                },
                path: {
                    title: "Teaser",
                },
                location: "Reno",
                publishedAt: "05/04/20"
              }
            ]
          }} />
        
        <FeaturesListings
          schema={{
            headline: "Features Listings",
            blockBasic: "Lorem Ipsum",
            servicesFeatures: [{
              features: []
            }]
          }}
        />

        <ServiceListings
          schema={{
            //blockBasic: "Lorem Ipsum",
            headline: "Service Listings",
            serviceListingsServiceCategories: {
              categories: [
                {
                  title: "Service 1",
                  subservices: [
                    "Subservice 1",
                    "Subservice 2"
                  ]
                }
              ]
            }
          }}
        />

      </InnerGrid>
    );
  }
}



export default Sections;
