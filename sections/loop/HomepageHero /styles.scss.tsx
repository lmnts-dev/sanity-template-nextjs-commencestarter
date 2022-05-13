/**
 *
 * @author Alisha Garric
 * @description Quote styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Palette } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HomepageHeroClassName = "homepage-hero";

export const HomepageHeroStyle = styled.section`
  .${HomepageHeroClassName}{
    &__first-section, &__second-section {
      overflow: hidden;
      position: relative;
      display: grid;
      grid-template-columns: 10fr 11fr;
      ${CssUtils.Fullwidth};

      &__svg {
        grid-column: 2 / 3;
        grid-row: 1 / -1;
        display: flex;

        svg {
          width: calc(100% / 6);
          flex: 0 0 calc(100% / 6);
          min-width: calc(100% / 6);
          max-width: calc(100% / 6);
          height: auto;
        }
      }
    }

    &__first-section {
      grid-template-rows: auto auto 1fr;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: calc(${Root.Size} / 2);
        background: ${Palette.Rust};
      }

      &__svg {
        align-items: flex-end;
      }

      &__body, &__btn {
        &.__last-item {
          padding-bottom: calc(${Root.Grid.Section} + calc(${Root.Size} / 2));
        }
      }

      &__btn {
        align-self: start;
      }
    }

    &__second-section {
      &__headline {
        padding: ${Root.Grid.Section} 0;
      }

      &__svg {
        position: relative;
        align-items: flex-start;

        svg:nth-of-type(odd) {
          opacity: 0;
        }

        svg:nth-of-type(4) {
          z-index: 0;
        }

        svg {
          z-index: 2;
        //  transform: skew(0deg) scaleY(0);
          transform-origin: top left;
          transition: all 2s ease;
          transform: skew(20deg) scaleY(1);
        }

        &:after, &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            transparent,
            transparent calc(100% / 6),
            ${Theme.Color.varBackground()} calc(100% / 6),
            ${Theme.Color.varBackground()} calc(100% / 3)
          );
          left: 20%;
          top: 0;
          z-index: 1;
          transform: skew(20deg);
          animation: roadLines 10s linear infinite;
        }

        &:before {
         top: -100%;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
        &__second-section {
        &__headline {
          h2 {
            font-size: 2rem;
          }
        }
      }
    }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${HomepageHeroClassName}{
      &__first-section, &__second-section {
        display: block;
      }

      &__first-section {
        &__btn, &__body {
          &.__last-item {
            padding-bottom: 0;
          }
        }
      }

      &__second-section {
        &__headline {
          padding-bottom: 0;
        }
        
        &__svg {
          display: none;
        }
      }
    }
  }
`;
