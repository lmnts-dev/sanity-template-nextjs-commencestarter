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
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { SlideUpInitialStyles, animationVisibilityClass, SlideUp } from "../../../constants/styles/Global";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AnimatedStatsClassName = "animated-stats";

export const AnimatedStatsStyle = styled.section`
  --animatedStatsStatsWidth: 20%;

  .${AnimatedStatsClassName}{
    &__headline {
      max-width: 700px;
      ${SlideUpInitialStyles}
    }

    &__stats__container {
      position: relative;
      flex: 0 0 var(--animatedStatsStatsWidth);
      overflow: auto;
       -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    &__stats__container::-webkit-scrollbar {
      display: none;
    }

    &__stats {
      ${CssUtils.Cover()}
      animation: marqueeVert 10s linear infinite;

      p {
        span {
          display: block;
          padding-bottom: 0;

          &:first-of-type {
            color: ${Color.varAccent()};
          }
        }
      }

    }

    &__container {
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: ${Root.Size};

      //gradients to scroll behind
      &:after, &:before {
        pointer-events: none;
        content: "";
        position: absolute;
        right: 0;
        height: ${Root.Grid.Section};
        width: var(--animatedStatsStatsWidth);
        z-index: 2;
      }

      &:before {
        bottom: 0;
        background: linear-gradient(to top, ${Color.varBackground()}, ${Color.varBackground("transparent")});
      }

      &:after {
        top: 0;
        background: linear-gradient(to bottom, ${Color.varBackground()}, ${Color.varBackground("transparent")});

      }
    }
  }

  &.${animationVisibilityClass} {
    .${AnimatedStatsClassName}{
      &__headline {
        animation: ${SlideUp} 1s forwards;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --animatedStatsStatsWidth: 30%;
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${AnimatedStatsClassName}{
      &__container {
        display: block;

        &:after, &:before {
          content: none;
        }
      }

      &__stats {
        animation: none;
        position: relative;
      }

      &__stats__container {
        width: 100%;
        height: auto;
      }
    }
  }
`;
