/**
 *
 * ProjectCardStyle.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website ProjectCardStyle Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Color } from "../../../constants/styles/Color";

// Utils
// import { hexToRGB } from "../../../utils/hexToRGB";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ProjectCardClassName = "project-card";

export const ProjectCardStyle = styled.div`
  &.${ProjectCardClassName} {
    display: flex;
    flex-direction: column;
    position: relative;

    .${ProjectCardClassName}__absolute-link {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;

      &:hover {
        ~ .${ProjectCardClassName}__details {

          .${ProjectCardClassName}__details__client {
            color: ${Color.varAccent()};
          }
        }
      }
    }

    .${ProjectCardClassName}__image-container {
      background: ${Theme.Color.Placeholder};
      width: 100%;
      position: relative;
      padding-bottom: 125%;
      overflow: hidden;

      img {
        ${CssUtils.ObjectFit()}
        pointer-events: none;
        z-index: 20;
      }
    }

    .${ProjectCardClassName}__details {
      &__client {
        position: relative;
        padding-top: calc(${Root.Size} / 4);
        padding-bottom: calc(${Root.Size} / 8);
      }

      &__services {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        opacity: 0.5;

        li, a {
          color: ${Color.varForeground()};
        }

        a {
          pointer-events: all;

          &:hover {
            text-decoration: underline;
          }
        }

        li {
          opacity: 0.6;
          margin-right: calc(${Root.Size} * 0.15);
        }
      }
    }
  }
`;
