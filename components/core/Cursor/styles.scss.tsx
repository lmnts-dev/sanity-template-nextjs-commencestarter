/**
 *
 * @author Alisha Garric
 * @description The website cursor styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Themes } from "../../../constants/styles/Color";

// Constants
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";


// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CustomCursorClassName = "custom-cursor";

export const CursorLinkActivatorClass = "__cursor-link";
export const CursorLinkClass = "__link";

export const CursorDraggerActivatorClass = "__cursor-dragger";
export const CursorDraggerClass = "__dragger";

export const CursorNoneActivatorClass = "__cursor-none";
export const CursorNoneClass = "__none";

export const CursorTextActivatorClass = "__cursor-text";
export const CursorTextClass = "__text";

export const CursorActiveClass = "__active";

export const CursorContainerStyle = styled.div`
  --customCursorPointSize: 10px;
  --customCursorBorderSize: 80px;
  --customCursorLinkArrowLength: 40px;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  mix-blend-mode: exclusion;

  //default cursor
  .${CustomCursorClassName}__pointer {
    z-index: 999;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    mix-blend-mode: exclusion;
    width: var(--customCursorPointSize);
    height: var(--customCursorPointSize);
    transform: translate(-50%, -50%);
    background: ${Themes.TextDark};
    transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};

    &:after {
      content: "";
      position: absolute;
      top: calc(var(--customCursorPointSize) / 2);
      left: calc(var(--customCursorPointSize) / 2);
      animation: blobAnimation 30s ease-in-out infinite both alternate;
      border: 1px solid ${Themes.TextDark};
      width: var(--customCursorBorderSize);
      height: var(--customCursorBorderSize);
      background: ${hexToRGB(Themes.TextDark, 0)};
      transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
      transform: translate(-50%, -50%) scale(1);
    }

    &__arrows {
      opacity: 0;
    }
  }

  //link cursor
  &.${CursorLinkClass} {
    .${CustomCursorClassName}__pointer {
      height: 2px;
      width: var(--customCursorLinkArrowLength);

      &:after {
        left: calc(var(--customCursorLinkArrowLength) / 2);
        top: 1px;
        transform: translate(-50%, -50%) scale(2);
      }

      &:before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top: 2px solid ${Themes.TextDark};
        border-right: 2px solid ${Themes.TextDark};
        top: 50%;
        right: 0;
        transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
        transform: translate(0, -50%) rotate(45deg);
      }
    }
  }

  //no cursor
  &.${CursorNoneClass} {
    .${CustomCursorClassName}__pointer {
      &:after {
        content: none;
      }
    }
  }

  //dragger cursor
  &.${CursorDraggerClass} {
    .${CustomCursorClassName}__pointer {
      &:after {
        transform: translate(-50%, -50%) scale(2);
      }

      &__arrows {
        opacity: 1;

        &:before,
        &:after {
          content: "";
          position: absolute;
          top: calc(var(--customCursorPointSize) / 2);
          left: calc(var(--customCursorPointSize) / 2);
          width: 0;
          height: 0;
          border-top: var(--customCursorPointSize) solid transparent;
          border-bottom: var(--customCursorPointSize) solid transparent;
          border-right: var(--customCursorPointSize) solid ${Themes.TextDark};
          top: 50%;
          transition: all ${Theme.Base.Transition.Duration} ${Theme.Base.Transition.CssEase};
        }

        &:before {
          transform: translate(-400%, -50%);
        }

        &:after {
          transform: translate(300%, -50%) rotate(180deg);
        }
      }
    }
  }

  //active cursor
  &.${CursorActiveClass} {
    .${CustomCursorClassName}__pointer:after {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
      filter: blur(5px);
    }
  }

  //text cursor
  &.${CursorTextClass} {
    .${CustomCursorClassName}__pointer {
      width: 2px;
      height: var(--customCursorLinkArrowLength);

      &:after {
        top: calc(var(--customCursorLinkArrowLength) / 2);
        left: 1px;
      }
    }
  }

  @keyframes blobAnimation {
    0%,
    100% {
      border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
    }
    20% {
      border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
    }
    40% {
      border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
    }
    60% {
      border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
    }
    80% {
      border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    display: none;
  }
`;
