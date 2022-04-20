// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name SolutionHeroStyle
 *
 */

export const SolutionHeroClassName = "solution-hero";

export const SolutionHeroStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 0 ${Root.Size};

  .${SolutionHeroClassName} {
    &__image {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      position: relative;
      padding-top: 75%;
    }

    &__description {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      align-self: center;
    }

    &__features {
      --featureCircleSize: calc(${Root.Size} / 2);
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      padding-top: ${Root.Size};
      justify-content: center;
    }
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    grid-template-columns: 1fr;

    .${SolutionHeroClassName} {
      &__image {
        margin-bottom: calc(${Root.Size} / 2);
      }

      &__description, &__features {
        grid-column: 1 / 2;
        grid-row: auto;
      }

      &__features {
        flex-direction: column;
      }
    }
  }
`;
