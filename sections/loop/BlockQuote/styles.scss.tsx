/**
 *
 * @author Alisha Garric
 * @description BlockQuote styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BlockQuoteClassName = "quote";

export const BlockQuoteStyle = styled.section`

  .${BlockQuoteClassName}{

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align:center;

      &__author {
        display: flex;
        flex-direction: column;

        &__company {
          opacity: .6;
        }

        &__company, &__name {
          padding-bottom: 0;
        }
      }
      
      &__quote {
        text-align: center;
        margin: 0 auto;
        font-style:italic;
      }
    }
  }

  

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${BlockQuoteClassName}{

    }
  }
`;
