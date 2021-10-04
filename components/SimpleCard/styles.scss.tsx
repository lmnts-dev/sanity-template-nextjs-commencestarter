/**
 *
 * @author Alisha Garric
 * @description Simple Card
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";


// Constants
import { Theme } from "../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SimpleCardClassName = "simple-card";

export const SimpleCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .${SimpleCardClassName}__link {
    ${CssUtils.Cover()}
    z-index: 2;
    pointer-events: all;

    &:hover {
      ~ .${SimpleCardClassName}__details {

        .${SimpleCardClassName}__details__headline {
          color: ${Color.varAccent()};
        }
      }
    }
  }

  .${SimpleCardClassName}__image-container {
    background: ${Theme.Color.Placeholder};
    width: 100%;
    position: relative;
    padding-bottom: 125%;
    overflow: hidden;

    img {
      ${CssUtils.ObjectFit()}
      pointer-events: none;
    }
  }

  .${SimpleCardClassName}__details {
    &__headline {
      padding-top: calc(${Root.Size} / 4);
      padding-bottom: calc(${Root.Size} / 8);
    }

    &__subheadline {
      opacity: .6;
    }

    &__list {
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
`;
