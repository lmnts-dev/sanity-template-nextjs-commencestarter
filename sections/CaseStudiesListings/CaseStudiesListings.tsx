// Core
//@ts-ignore
import Link from "next/link";
import React from "react";
//@ts-ignore
import Image from "next/image";

// Types
//import { CMNC_CaseStudySimple } from "../../constants/Types";

// Styles
import {
  CaseStudiesListingsClassName,
  CaseStudiesListingsStyle,
} from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { CenteredText } from "../loop/CenteredText";
import { SectionBreak } from "../loop/SectionBreak";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_CaseStudiesListings = {
  //studies: CMNC_CaseStudySimple[] | null;
  addClass?: string;
};

export const CaseStudiesListings: React.FunctionComponent<
  CMNC_CaseStudiesListings
  > = ({ addClass }) => {
  
    let studies = [{
      solution: "Study 1",
      title: "Case Study 1",
      headline: "Headline 1",
      previewText: "Preview Text 1",
      location: "Reno",
      publishedAt: "06/10/22",
      simpleBody: "Simple Body Content 1",
      slug: {
        current:"/contact"
      }
    },
      {
      solution: "Study 2",
      title: "Case Study 2",
      headline: "Headline 2",
      previewText: "Preview Text 2",
      location: "Sparks",
      publishedAt: "06/10/20",
      simpleBody: "Simple Body Content 2",
      slug: {
        current:"/"
      }
      }]
    
  return (
    <>
      <CaseStudiesListingsStyle
        className={`${CaseStudiesListingsClassName} ${sectionSpacing({
          top: "half",
          bottom: "half",
        })} ${addClass ? addClass : ""}`}
      >
        
        {studies &&
          studies.length > 0 &&
          studies.map((item, idx) => {
            let date = item.publishedAt.substr(0, 4);

            return (
              <>
                <CenteredText
                  schema={{
                    spacing: { top: "half", bottom: "half" },
                    caption:
                      (item.location ? item.location + " • " : "") +
                      item.solution +
                      " • " +
                      date,
                    headline: item.title,
                    //simpleBody: item.previewText,
                    cta: [
                      {
                        _type: "internalLink",
                        label: "Read client story",
                        internalLink: { _type: "caseStudy", slug: item.slug },
                      },
                    ],
                  }}
                  key={idx}
                />
                <SectionBreak
                  schema={{
                    style: "bold",
                  }}
                />
              </>
            )
          })
        }
      </CaseStudiesListingsStyle>
    </>
  );
};

CaseStudiesListings.displayName = "CaseStudiesListings";

// End Component
// __________________________________________________________________________________________
