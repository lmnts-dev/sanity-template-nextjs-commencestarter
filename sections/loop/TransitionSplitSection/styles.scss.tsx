/**
 *
 * @author Alisha Garric
 * @description Split section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import { SimpleHeroClassName } from "../SimpleHero/styles.scss";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TransitionSplitSectionClassName = "layered-split-section";

export const TransitionSplitSectionStyle = styled.section`
  --iconHeight: calc(${Root.Size} * 1.5);
  min-height: 100vh;

  .${TransitionSplitSectionClassName} {
    &__text {
      flex: 2;
      position: relative;
      z-index: 2;
      width: 50%;
      padding-right: ${Root.Grid.Gutter.Left};
      padding-bottom: 0;

      &__icon {
        margin-bottom: calc(${Root.Size} / 4);
      }

      &__headline {
        font-weight: 500;

        ~ * {
          max-width: 420px;
        }
      }

      svg {
        height: var(--iconHeight) !important;
        width: auto !important;
        max-width: none !important;
        margin-bottom: calc(${Root.Size} / 2);
      }
    }

    &__image {
      ${CssUtils.OverlayPseudos};
      z-index: 0;
      

      > div, &:before, &:after {
        width: 100vw !important;
      }
    }
  }

  .${SimpleHeroClassName}{
    position: absolute;
    width: 50%;
    left: 50%;
    top: ${Root.Grid.Section};
    bottom: ${Root.Grid.Section};
    z-index: 2;
    will-change: left, top, transform, min-height, width;
    transition: all .25s ease;


    //after clicked styles
    &:not(.__condensed){
      left: 0;
      top: 0;
      bottom: auto;
      transform: translateY(0);
      width: 100%;
      min-height: 100vh;
      animation: none;
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    .${TransitionSplitSectionClassName}{
      &__image {
        > div, &:before, &:after {
          transform: translateX(calc(calc(100vw - ${Theme.Base.Grid.SiteWidth}) / -2));
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    min-height: 1px;

    .${TransitionSplitSectionClassName} {
      &__text {
        margin-bottom: ${Root.Size};
        padding-right: 0;
        width: 100%;
      }
    }

    .${SimpleHeroClassName}{
      width: 100vw;
      margin-left: calc(${Root.Grid.Gutter.Left} * -1);
      left: 0;
      top: 0;
      position: relative;

      //after clicked styles
      &:not(.__condensed){
        width: 100vw;
      }
    }
  }
`;
