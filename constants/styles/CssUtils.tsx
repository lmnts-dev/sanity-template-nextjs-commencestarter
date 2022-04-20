/**
 *
 * @author Alisha Garric
 * @description
 * This file is basically our mixins to return reusable & sitewide CSS.
 *
 */

// Core
import { css } from "styled-components";

// Constants
import { Theme } from "../Theme";
import { Root } from "../Root";
import { Color } from "./Color";
import { Settings } from "../site/Settings";

// Begin Component
//////////////////////////////////////////////////////////////////////

export class CssUtils {
  static ObjectFit = () => {
    return css`
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: center;
      max-width: 100%;
    `;
  };

  static Cover = () => {
    return css`
      position: absolute;
      display: block;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    `;
  };

  static LargeScreenGradients = () => {
    return css`
      &:after,
      &:before {
        content: "";
        width: ${Root.Grid.Gutter.Left};
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 2;
      }

      &:after {
        right: 0;
        background: linear-gradient(
          to right,
          transparent,
          ${Color.varBackground()}
        );
      }

      &:before {
        left: 0;
        background: linear-gradient(
          to left,
          transparent,
          ${Color.varBackground()}
        );
      }
    `;
  };

  static SlickDots = () => {
    return css`
      display: flex !important;
      height: 5px;
      pointer-events: none;

      li {
        width: 21px;
        height: 100%;

        &:first-child {
          margin-left: 0;
        }

        button {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
          background: ${Color.varForeground()};
          opacity: 0.1;

          &:before {
            content: none;
          }
        }

        &.slick-active {
          button {
            opacity: 0.5;
          }
        }
      }
    `;
  };

  static SectionBackground = () => {
    return css`
      position: relative;
      color: var(--foreground);

      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        background: var(--background);
        z-index: -1;
      }

      //styles to make each section's background color only
      //expand to the maxSiteWidth, or pastmaxSiteWidth (fullwidth)
      ${Settings.fullwidthSectionBackgrounds
        ? `&:after {
            width: 100vw;
            left: calc(calc(100vw - 100%) / -2);
          }`
        : `&:after {
          left: 0;
          width: 100%;
        }
      `}
    `;
  };

 static ImageShow = () => {
    return css`
      img {
        will-change: transform, opacity;
        transition: all 0.75s ease;
        transform: scale(1);
        opacity: 0.9;
      }

      &.__visible {
        img {
          transform: scale(1.05);
          opacity: 1;
        }
      }
    `;
  };

  static OverlayPseudos = () => {
    return css`
      &:after,
      &:before {
        content: "";
        ${CssUtils.Cover};
        z-index: 2;
        pointer-events: none;
      }

      &:after {
        background: ${Color.varBackground()};
        mix-blend-mode: color;
      }

      &:before {
        background: ${Color.varOverlay};
        opacity: 0.2;
      }
    `;
  };

  static NavAwareSubNav = () => {
    return css`
      top: ${Root.Nav.Size};
      transform: none;
      transition: 0.25s transform ease;

      &.__nav-hidden {
        transform: translateY(calc(${Root.Nav.Size} * -1));
      }
    `;
  };

  static Fullwidth = () => {
    return css`
      margin-left: calc(${Root.Grid.Gutter.Left} * -1);
      margin-right: calc(${Root.Grid.Gutter.Right} * -1);
      width: calc(100% + ${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right});
      padding-left: ${Root.Grid.Gutter.Left};
      padding-right: ${Root.Grid.Gutter.Right};
    `;
  };

  static RevokeChildrenPointerEvents = () => {
    return css`
      pointer-events: all;

      * {
        pointer-events: none;
      }
    `;
  };

  static ShowLoadingIndicator = () => {
    return css`
      background: ${Theme.Color.Placeholder};

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%, -50%);
        width: calc(${Root.Size} / 3);
        height: calc(${Root.Size} / 3);
        border-radius: 50%;
        background: ${Color.varForeground()};
        transition: opacity ${Theme.Base.Transition.Duration}
          ${Theme.Base.Transition.CssEase};
        z-index: 10;
      }
    `;
  };
}
