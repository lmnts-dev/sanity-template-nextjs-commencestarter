// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { Theme } from "../../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name PathsListingsStyle
 *
 */

export const PathsListingsClassName = "paths-listings";

export const PathsListingsStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Root.Size};

  .${PathsListingsClassName} {
    &__path {
      &__header {
        display: flex;
        align-items: center;
        padding-bottom: calc(${Root.Size} / 2);

        &__image {
          position: relative;
          flex: 0 0 20%;
          padding-top: 20%;
          background-color: ${Color.varAccent()};
          overflow: hidden;

          > *:first-child {
            transform: scale(1.1);
          }
        }

        &__title {
          padding: 0;
          padding-left: calc(${Root.Size} / 4);
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    grid-template-columns: 1fr;
  }
`;
