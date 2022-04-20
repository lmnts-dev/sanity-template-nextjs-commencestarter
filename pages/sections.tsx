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
import { GuidesTeaser } from "../sections/loop/GuidesTeaser";
import { NewsroomTeaser } from "../sections/loop/NewsroomTeaser";
import { PathsListings } from "../sections/loop/PathsListings";
import { ServiceSection } from "../sections/loop/ServiceSection";
import { ServicesSlider } from "../sections/loop/ServicesSlider";
import { NewsroomListings } from "../sections/loop/NewsroomListings";
import { PathIntro } from "../sections/PathIntro";
import { PathSection } from "../sections/PathSection";
import { ProjectGuide } from "../sections/ProjectGuide";
import { SubNavHeader } from "../sections/SubNavHeader";
import { QuizMainResultSection } from "../sections/QuizMainResults";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_Sections = {
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
            blockBasic: "",
            servicesFeatures: [{
              features: [
                {
                  title: "Service 1",
                  image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/1d50d7d2f6ad8b7ec8e51db6121fa272cfadf795-3000x2000.jpg?w=850&auto=format",
                  },
                  slug: {
                    current: "/contact"
                  },
                  _createdAt: "05/04/20",
                  _id: "",
                  _rev: "",
                  _type: "service",
                  _updatedAt: "05/04/20",
                  publishedAt: "05/04/20",
                  content: undefined
                },
                {
                  title: "Service 2",
                  image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/1d50d7d2f6ad8b7ec8e51db6121fa272cfadf795-3000x2000.jpg?w=850&auto=format",
                  },
                  slug: {
                    current: "/contact"
                  },
                  _createdAt: "05/04/20",
                  _id: "",
                  _rev: "",
                  _type: "service",
                  _updatedAt: "05/04/20",
                  publishedAt: "05/04/20",
                  content: undefined
                }
              ]
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

        <ServiceSection
          schema={{
            service: {
              title: "Service Section",
              image: {
                hasAlpha: false,
                height: 300,
                width: 300,
                url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
              },
              slug: {
                current: "/contact"
              },
              publishedAt: "09/04/2019",
              _createdAt: "09/04/2019",
              _updatedAt: "09/04/2019",
              _id: "",
              _rev: "",
              _type: "service",
              content: ""
            }
          }}
        />

        <ServicesSlider
          schema={{
            serviceSlides: [
              {
              title: "Service Section Slide 1",
              image: {
                hasAlpha: false,
                height: 300,
                width: 300,
                url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
              },
              slug: {
                current: "/contact"
              },
              publishedAt: "09/04/2019",
              _createdAt: "09/04/2019",
              _updatedAt: "09/04/2019",
              _id: "",
              _rev: "",
              _type: "service",
              content: ""
              },
                         {
              title: "Service Section Slide 2",
              image: {
                hasAlpha: false,
                height: 300,
                width: 300,
                url: "https://cdn.sanity.io/images/w2xt1cyc/production/f5df90d476add38d0c0c8901b6b8097c9e11c5b9-1000x751.png?w=2000&auto=format"
              },
              slug: {
                current: "/contact"
              },
              publishedAt: "09/04/2019",
              _createdAt: "09/04/2019",
              _updatedAt: "09/04/2019",
              _id: "",
              _rev: "",
              _type: "service",
              content: ""
            }
            ]
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

        <GuidesTeaser
          schema={{
            headline: "Guides Teaser",
            formspreeLink: "/",
            guides_teaser_recent_guides: {
              quantity: 2,
              guides: [
                {
                title: "Guide Teaser 1",
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                  },
                  slug: {
                  current: "/"
                  }
                }
              ]
            }
        }}
        />

        <NewsroomTeaser
          schema={{
            headline: "Newsroom Teaser",
            newsroom_teaser_recent_news: {
              quantity: 2,
              news: [
                {
                  image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                    },
                    slug: {
                     current: "/contact"
                    },
                  title: "News Item 1"
                }, 
                {
                  image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                    },
                    slug: {
                    current: "/contact"
                  },
                  title: "News Item 2"
                },
              ]
            }
          }}
        />

        <NewsroomListings
          postsPerPage={2}
          newsItems={[
            {
              title: "News 1",
              slug: {
                current: "/contact"
              },
               image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
              },
              publishedAt: "09/04/2019",
              _updatedAt: "09/04/2019",
              _createdAt: "09/04/2019",
              _id: "",
              _rev: "",
              _type: "news",
              externalLink: {
                target: "_blank",
                link: "/contact",
                label: "Link",
                _type: 'externalLink'
              }
            }, 
            {
              title: "News 2",
              slug: {
                current: "/contact"
              },
               image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/18d3d792a67d54364c56f3552973b96122eaf1b7-1920x1080.jpg"
              },
              publishedAt: "09/04/2019",
              _updatedAt: "09/04/2019",
              _createdAt: "09/04/2019",
              _id: "",
              _rev: "",
              _type: "news",
              externalLink: {
                target: "_blank",
                link: "/contact",
                label: "Link",
                _type: 'externalLink'
              }
            }, 
            {
              title: "News 2",
              slug: {
                current: "/contact"
              },
               image: {
                    hasAlpha: false,
                    height: 300,
                    width: 300,
                    url: "https://cdn.sanity.io/images/w2xt1cyc/production/18d3d792a67d54364c56f3552973b96122eaf1b7-1920x1080.jpg"
              },
              publishedAt: "09/04/2019",
              _updatedAt: "09/04/2019",
              _createdAt: "09/04/2019",
              _id: "",
              _rev: "",
              _type: "news",
              externalLink: {
                target: "_blank",
                link: "/contact",
                label: "Link",
                _type: 'externalLink'
              }
            }
          ]}
        />

        <PathsListings
          schema={{
            paths: [
              {
                title: "Path Listing 1",
                 slug: {
                    current: "/contact"
                },
                publishedAt: "09/03/24",
                pathTheme: "beige",
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                  },
                description: {
                  headline: "Description Here",
                  subheadline: "Subheadline",
                  blockBasic: ""
                },
                _updatedAt: "09/03/24",
                _type: "path",
                _createdAt: "09/03/24",
                _id: "",
                _rev: ""
              },
              {
                title: "Path Listing 2",
                 slug: {
                    current: "/contact"
                },
                publishedAt: "09/03/24",
                pathTheme: "beige",
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                  },
                description: {
                  headline: "Description Here",
                  subheadline: "Subheadline",
                  blockBasic: ""
                },
                _updatedAt: "09/03/24",
                _type: "path",
                _createdAt: "09/03/24",
                _id: "",
                _rev: ""
              },
            ]
          }}
        />

        <PathIntro
          schema={{
            pathsIntro: {
              publishedAt: "09/03/24",
              _createdAt: "09/03/24",
              _id: "",
              _rev: "",
              _type: "path",
              _updatedAt: "09/03/24",
              intro: {
                headline: "Path Intro",
                blockBasic: "",
                cta: [
                  {
                    internalLink: {
                      slug: {
                        current: "/contact"
                      },
                      _type: "internalLink"
                    },
                    _type: "internalLink",
                    label: "CTA Link"
                  }
                ]
              },
              pathsOrder: [{
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                },
                slug: {
                  current: "/contact"
                },
                title: "Path 1",
                pathTheme: "light-blue"
              },
              {
                image: {
                  hasAlpha: false,
                  height: 300,
                  width: 300,
                  url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
                },
                slug: {
                  current: "/contact"
                },
                title: "Path 2",
                pathTheme: "light-blue"
              }
              ]
            }
          }}
        />

        <PathSection
          schema={{
            headline: "Path Section",
            path: {
              title: "Path 1",
              image: {
                hasAlpha: false,
                height: 300,
                width: 300,
                url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
              },
              slug: {
                current: "/contact",
              },
              publishedAt: "09/03/24",
              description: {
                headline: "Path 1",
                subheadline: "Subheadline 2",
                blockBasic: ""
             },
              pathTheme: "mustard",
              _updatedAt: "09/03/24",
              _createdAt: "09/03/24",
              _id: "",
              _rev: "",
              _type: "path"
            },
          }}
        />

        <ProjectGuide
          schema={{
            next: {
              link: "/contact",
              title: "Next"
            },
            prev: {
              link: "/contact",
              title: "Prev"
            }
          }}
        />

        <SubNavHeader
          schema={{
            headline: "Subnav Header",
            links: [
              {
                label: "Link 1",
                link: "/contact",
              },
              {
                label: "Link 2",
                link: "/contact",
              },
              {
                label: "Link 3",
                link: "/contact",
              }
            ]
          }}
        />

        <QuizMainResultSection
          result={{
              title: "Path 1",
              image: {
                hasAlpha: false,
                height: 300,
                width: 300,
                url: "https://cdn.sanity.io/images/w2xt1cyc/production/bdc26899927ac338f673e671144dca715aed609b-2866x1742.jpg"
              },
              slug: {
                current: "/contact",
              },
            services: [
              "Service 1", "Service 2"
            ],
            pathTheme: "beige"
          }}
          resultsPage={
            {
              ctaForm: {
                form: {
                  fieldsSections: [{
                    fields: [{
                      options:[ "Once", "Two"],
                      _type: "checkboxField",
                      required: false
                    }],
                    description: "Description for form",
                    title: "Form Title"
                  }],
                  formspreeSubmissionLink: "/",
                  submitLabel: "Submit"
                }
              },
              formspreeLink: "/",
              summary: {
                buttonLabelPrefix: "Prefix",
                buttonLabelSuffix: "Suffix"
              }
            }
          }
        />
      </InnerGrid>
    );
  }
}



export default Sections;
