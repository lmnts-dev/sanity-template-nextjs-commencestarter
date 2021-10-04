/**
 *
 * @author Alisha Garric
 * @description Image collage section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ImageCollageClassName = "image-collage";

export const ImageCollageStyle = styled.section`
  .${ImageCollageClassName}__headline {
    font-size: 1.5rem;
    padding-bottom: ${Theme.Base.Size.Sm};
    max-width: 320px;
  }

  .${ImageCollageClassName}__images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: calc(${Theme.Base.Size.Sm} / 2);

    img {
      pointer-events: none;
    }

    &__image-container {
      width: 100%;
      cursor: pointer;

      &:nth-of-type(4n - 3) {
        grid-column: 1 / 3;
      }

      &:nth-of-type(4n - 2) {
        grid-column: 4 / 6;
      }

      &:nth-of-type(4n - 1) {
        grid-column: 2 / 4;
      }

      &:nth-of-type(4n) {
        grid-column: 3 / 5;
      }

      &:nth-of-type(1) {
        grid-row: 1 / 5;
      }

      &:nth-of-type(2) {
        grid-row: 2 / 6;
      }

      &:nth-of-type(3) {
        grid-row: 4 / 8;
      }

      &:nth-of-type(4) {
        grid-row: 5 / 9;
      }

      &:nth-of-type(5) {
        grid-row: 6 / 10;
      }

      &:nth-of-type(6) {
        grid-row: 7 / 11;
      }

      &:nth-of-type(7) {
        grid-row: 9 / 13;
      }

      &:nth-of-type(8) {
        grid-row: 10 / 14;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${ImageCollageClassName}__images {
      &__image-container {
        &:nth-of-type(4n - 3) {
          grid-column: 1 / 4;
        }

        &:nth-of-type(4n - 2) {
          grid-column: 2 / 5;
        }

        &:nth-of-type(4n - 1) {
          grid-column: 3 / 6;
        }

        &:nth-of-type(4n) {
          grid-column: 2 / 5;
        }

        &:nth-of-type(1) {
          //no change
        }

        &:nth-of-type(2) {
          grid-row: 3 / 7;
        }

        &:nth-of-type(3) {
          grid-row: 5 / 9;
        }

        &:nth-of-type(4) {
          grid-row: 7 / 11;
        }

        &:nth-of-type(5) {
          grid-row: 8 / 12;
        }

        &:nth-of-type(6) {
          grid-row: 10 / 14;
        }

        &:nth-of-type(7) {
          grid-row: 12 / 16;
        }

        &:nth-of-type(8) {
          grid-row: 14 / 18;
        }
      }
    }
  }
`;
