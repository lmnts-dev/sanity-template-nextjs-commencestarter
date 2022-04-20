// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name FaqListingsStyle
 *
 */

export const FaqListingsClassname = "faq-listings";

export const FaqListingsStyle = styled.section`
  display: flex;
  align-items: flex-start;

  .${FaqListingsClassname} {

    &__nav {
      position: sticky;
      position: -webkit-sticky;
      top: calc(${Root.Nav.Size} * 2);

      button {
        &:active, &:focus {
          border: none;
          outline: none;
        }
      }
    }

    &__faqs-container {
      padding-left: ${Root.Grid.Gutter.Left};
      flex: 1;

      &__section {
        width: 100%;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction: column;

    .${FaqListingsClassname} {

      &__faqs-container {
        padding-left: 0;
      }
      
      &__nav{
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom:${Root.Size};
        position:relative;
        top:auto;
      }
    }  
  }
`;
