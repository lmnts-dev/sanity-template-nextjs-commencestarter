/**
 *
 * @author Jose Rios
 * @description Case Studies Teaser section
 *
 */

// Core
import React from "react";

// Styles
import {
  CaseStudiesTeaserClassName,
  CaseStudiesTeaserStyle,
} from "./styles.scss";
//@ts-ignore
import Link from "next/link";
import {
  CMNC_SectionSpacingObject,
  CMNC_Category,
  CMNC_CaseStudySimple,
} from "../../../constants/Types";

import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { SimpleCard } from "../../../components/SimpleCard-2";
import { generatePath } from "../../../utils/generatePath";
import { getFormattedDate } from "../../../utils/getFormattedDate";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_CaseStudiesTeaser_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  publishedAt?: string;
  categories?: CMNC_Category[] | null;
  case_studies_teaser_recent_studies?: {
    quantity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    caseStudies: CMNC_CaseStudySimple[];
  };
  case_studies_teaser_featured_studies?: CMNC_CaseStudySimple[];
  sectionThemeSubtle?: CMNC_SectionTheme;
  featureCard?: string;
};

type CMNC_CaseStudiesTeaser = {
  schema: CMNC_CaseStudiesTeaser_Schema;
  addClass?: string;
};

export const CaseStudiesTeaser: React.FunctionComponent<CMNC_CaseStudiesTeaser> =
  ({ schema, addClass }) => {
    let {
      headline,
      case_studies_teaser_recent_studies,
      case_studies_teaser_featured_studies,
      spacing,
      sectionThemeSubtle,
     featureCard,
    } = schema;

    //get final set of articles from featured articles and recent articles
    let caseStudies =
      case_studies_teaser_featured_studies && case_studies_teaser_recent_studies
        ? case_studies_teaser_featured_studies
        : case_studies_teaser_featured_studies
        ? case_studies_teaser_featured_studies
        : case_studies_teaser_recent_studies
        ? case_studies_teaser_recent_studies.caseStudies.slice(
            0,
            case_studies_teaser_recent_studies.quantity
          )
        : undefined;

    console.log(caseStudies);

    return (
      <CaseStudiesTeaserStyle
        className={`${CaseStudiesTeaserClassName} ${sectionSpacing(
          spacing
        )} ${addClass} ${
          sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
        } `}
      >
        {headline && (
          <div className={`${CaseStudiesTeaserClassName}__headline`}>
            <h2>{headline}</h2>
          </div>
        )}
        <div className={`${CaseStudiesTeaserClassName}__link`}>
          <Link href={generatePath({ _type: "caseStudy" })}>
            <a className={`btn __btn-underline`}>See all case studies</a>
          </Link>
        </div>

        {caseStudies && caseStudies.length > 0 && (
          <div className={`${CaseStudiesTeaserClassName}__case-study`}>
            {caseStudies.map((caseStudy: CMNC_CaseStudySimple, idx) => {
              let subheadlineDate = caseStudy.publishedAt;
              let subheadline = subheadlineDate
                ? getFormattedDate(subheadlineDate)
                : "";
              return (
                <SimpleCard
                  image={caseStudy.image}
                  headline={caseStudy.title}
                  subheadline={caseStudy.path.title + " • " + subheadline}
                  largeCard={(featureCard && idx) == 0 ? true : false}
                  theme={caseStudy.path.pathTheme}
                  featuredCard={(featureCard && idx) == 0 ? true : false}
                  link={generatePath({
                    slug: {
                      current: caseStudy.slug.current,
                    },
                    _type: "caseStudy",
                  })}
                  key={idx}
                />
              );
            })}
          </div>
        )}
      </CaseStudiesTeaserStyle>
    );
  };

CaseStudiesTeaser.displayName = "CaseStudiesTeaser";

// End Component
//////////////////////////////////////////////////////////////////////
