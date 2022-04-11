/**
 *
 * @author Alisha Garric
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const LineGraphClassName = "line-graph";

export const LineGraphStyle = styled.section`

  .${LineGraphClassName} {
    &__inner {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__text {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 30%;
      text-align: center;
      z-index:10;

      &__headline {
        padding-bottom: calc(${Root.Size} / 8);
      }

      &__body {
        padding-bottom: 0;
      }

      &.__position {
        &-top-left, &-bottom-left {
          right: auto;
          left: 0;
        }

        &-top-right, &-top-left {
          bottom: auto;
          top: 0;
        }

        &-below, &-above {
          margin: 0 auto;
          position: relative;
          width: 100%;
          max-width: ${Theme.Base.Grid.SiteWidth};
        }

        &-below {
          order: 2;
          padding-bottom: calc(${Root.Size} / 4);
        }

        &-above {
          padding-top: calc(${Root.Size} / 4);
        }
      }
    }

  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${LineGraphClassName} {
      &__text {
        &__headline {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${LineGraphClassName} {
      &__text {
        &:not(.__position-above) {
          position: relative;
          order: 2;
          width: 100%;
          padding-top: calc(${Root.Size} / 4);
        }
      }
    }
  }
`;
