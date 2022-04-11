/**
 *
 * @author Alisha Garric
 * @description Simple hero styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Base } from "../../../constants/styles/Base";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Constants
import { Theme } from "../../../constants/Theme";

// Utility Functions

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SimpleHeroClassName = "simple-hero";

export const SimpleHeroStyle = styled.section`
  --simpleHeroTextGap: 4vw;
  min-height: 100vh;
  max-height: 2000px;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .${SimpleHeroClassName}{

    &__background {
     ${CssUtils.OverlayPseudos};
     z-index: 0;

     //to deal with safari video mix-blend-mode color bug
     &.__no-mix-blend-mode {
        &:after {
          content: none;
        }
     }
    }

    &__video {
      ${CssUtils.Cover};
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      //special fix for video to act like its object-fit: cover
      height: 100% !important;
      width: 177.77777778vh !important; /* 100 * 16 / 9 */
      min-width: 100%;
      min-height: 56.25vw; /* 100 * 9 / 16 */
    }

    &__headline {
      color: ${Color.varForegroundOverlay};
      display: flex;
      flex-direction: column;
      z-index: 3;
      padding: 0;
      position: relative;
      padding: 0;

      &__top {
        margin-bottom: var(--simpleHeroTextGap);
        animation: reveal .5s ease forwards;
      }

      span {
        padding-bottom: 0;
      }
    }
  }
  
  &:not(.__condensed) {
    animation: adjustMinHeight .5s ease forwards;
  }

  &.__condensed {
    min-height: 1px;
    pointer-events: all;

    .${SimpleHeroClassName}{

      &__background {

        &:after {
          opacity: 0;
        }
      }

      &__headline {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        
        span {
          color: ${Color.varForegroundOverlay};
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${Color.varForegroundOverlay};
        }
      }
    }

    &:hover {
      cursor: pointer;

      &:after {
        opacity: 1;
      }

      .${SimpleHeroClassName}{
        &__headline {
          span {
            -webkit-text-fill-color: ${Color.varForegroundOverlay};
            -webkit-text-stroke-color: transparent;
          }
        }
      }
    }
  }

  @keyframes adjustMinHeight {
    from {
      min-height: 100vh;
    } to {
      min-height: 95vh;
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    --simpleHeroTextGap:  calc( .04 * ${Base.Grid.SiteWidth + "px"});
    left: calc(calc(100vw - ${Theme.Base.Grid.SiteWidth}) / -2);
  }


  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    @keyframes adjustMinHeight {
      from {
        min-height: 100vh;
      } to {
        min-height: 80vh;
      }
    }

    @media (orientation: landscape) {
      @keyframes adjustMinHeight {
        from {
          min-height: 100vh;
        } to {
          min-height: 70vh;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --simpleHeroTextGap:  calc( .04 * ${Base.Media.Width.Sm + "px"});

    &.__condensed {
      .${SimpleHeroClassName}{
        &__headline {
          top: 0;
          transform: none;

          span {
            -webkit-text-stroke-width: 1px;
          }
        }
      }
    }

    @keyframes adjustMinHeight {
      from {
        min-height: 100vh;
      } to {
        min-height: 70vh;
      }
    }
  }
`;
