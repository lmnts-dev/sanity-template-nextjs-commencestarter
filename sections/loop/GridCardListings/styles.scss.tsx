/**
 *
 * @author Alisha Garric
 * @description Grid card listings style
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GridCardListingsClassName = "grid-card-listings";

export const GridCardListingsStyle = styled.section`
  .${GridCardListingsClassName} {
    &__cards-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${Root.Size};
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${GridCardListingsClassName} {
      &__cards-container {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${GridCardListingsClassName} {
      &__cards-container {
        grid-template-columns: 1fr;
      }
    }
  }
 
`;
