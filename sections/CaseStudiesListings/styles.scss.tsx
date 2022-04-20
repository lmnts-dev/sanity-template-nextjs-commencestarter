// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { SplitSectionClassName } from "../loop/SplitSection/styles.scss";
// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name CaseStudiesListingsStyle
 *
 */

export const CaseStudiesListingsClassName = "case-studies-listings";
export const PaginationClassName = "case-studies-listings-pagination";

//CaseStudiesListings listings
export const CaseStudiesListingsStyle = styled.section`

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${SplitSectionClassName} {
      flex-direction: column;

      &__text {
        padding-top: 0;
        padding-bottom: calc(${Root.Size} / 2);
       
      }
    }
  }

`;
