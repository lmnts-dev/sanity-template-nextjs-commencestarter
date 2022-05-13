// Core
//@ts-ignore
import Link from "next/link";
import React, { useState } from "react";
//@ts-ignore
import Image from "next/image";

// Types
import { CMNC_CaseStudySimple } from "../../constants/Types";
//@ts-ignore
import Pagination from "react-sanity-pagination";

// Styles
import {
  CaseStudiesListingsClassName,
  CaseStudiesListingsStyle,
} from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import Arrow from "../../components/Icon/SVG/Custom/Arrow";
import { PaginationStyle } from "../ArticleListings/styles.scss";
import { SplitSection } from "../loop/SplitSection";
import { SectionBreak } from "../loop/SectionBreak";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_CaseStudiesListings = {
  studies: CMNC_CaseStudySimple[] | null;
  postsPerPage: number;
  addClass?: string;
};

export const CaseStudiesListings: React.FunctionComponent<
  CMNC_CaseStudiesListings
> = ({ studies, postsPerPage, addClass }) => {
  //Pagination variables
  const itemsToSend = studies;
  const [items, setItems] = useState<any[]>([]);

  //Pagination set up
  const action = (page: any, range: any, items: any) => {
    console.log(page, range);
    // Update State
    setItems(items);
  };

  return (
    <>
      <CaseStudiesListingsStyle
        className={`${CaseStudiesListingsClassName} ${sectionSpacing({
          top: "half",
          bottom: "half",
        })} ${addClass ? addClass : ""}`}
      >
        {items &&
          items.length > 0 &&
          items.map((item: CMNC_CaseStudySimple, idx) => {
            let date = item.publishedAt.substr(0, 4);

            return (
              <>
                <SplitSection
                  schema={{
                    spacing: { top: "half", bottom: "half" },
                    subheadline:
                      (item.location ? item.location + " • " : "") +
                      item.path +
                      " • " +
                      date,
                    headline: item.title,
                    image: item.image,
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
                    style: "subtle",
                    spacing: { top: "none", bottom: "none" },
                  }}
                />
              </>
            );
          })}
      </CaseStudiesListingsStyle>

      {/* // pagination // */}
      <PaginationStyle className={sectionSpacing({ top: "none" })}>
        <Pagination
          nextButton={true}
          prevButton={true}
          nextButtonLabel={<Arrow />}
          prevButtonLabel={<Arrow />}
          action={action}
          items={itemsToSend}
          postsPerPage={postsPerPage}
        />
      </PaginationStyle>
    </>
  );
};

CaseStudiesListings.displayName = "CaseStudiesListings";

// End Component
// __________________________________________________________________________________________
