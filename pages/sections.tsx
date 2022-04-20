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
import { CaseStudiesListings } from "../sections/CaseStudiesListings";
import { SolutionHero } from "../sections/loop/SolutionHero";
import { SolutionsLinkListings } from "../sections/loop/SolutionsLinkListings";
import { SolutionsAccordions } from "../sections/loop/SolutionsAccordions";

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

        <CaseStudiesListings />
        
        <SolutionHero
          schema={{
            solution: {
              title: "Solution Hero",
              slug: {
                current: "/contact",
              },
              image: {
                hasAlpha: false,
                height: 300,
                width: 300,
                url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
              },
              shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              publishedAt: "05/04/20",
              content: "",
              blockStandard: "",
              _updatedAt: "05/10/22",
              _createdAt: "09/04/2019",
              _id: "Solution",
              _rev: "",
              _type: "solution"
            }
          }}
        />

        <SolutionsLinkListings
          schema={{
            headline: "Solutions Link Listings",
            solutions: [
              {
                title: "Solution Link",
                slug: {
                  current: "/contact"
                },
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                },
              _updatedAt: "05/10/22",
              _createdAt: "09/04/2019",
              _id: "Solution",
              _rev: "",
                _type: "solution",
                blockStandard: "",
                content: "",
                publishedAt: "09/03/24",
              }
            ]
          }}
        />

        <SolutionsAccordions
          schema={{
            solutions: [
              {
                title: "Solution Link",
                slug: {
                  current: "/contact"
                },
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                },
              _updatedAt: "05/10/22",
              _createdAt: "09/04/2019",
              _id: "Solution",
              _rev: "",
                _type: "solution",
                blockStandard: "",
                content: "",
                publishedAt: "09/03/24",
              },
              {
                title: "Solution Link",
                slug: {
                  current: "/contact"
                },
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                },
              _updatedAt: "05/10/22",
              _createdAt: "09/04/2019",
              _id: "Solution",
              _rev: "",
                _type: "solution",
                blockStandard: "",
                content: "",
                publishedAt: "09/03/24",
              }
            ]
          }}
        />

      </InnerGrid>
    );
  }
}



export default Sections;
