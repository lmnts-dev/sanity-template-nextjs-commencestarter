/**
 *
 * @author Alisha Garric
 * @description Text over image section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Font } from "../../../constants/styles/Font";

// Constants
import { Theme } from "../../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TextOverImageClassName = "text-over-image";

export const TextOverImageStyle = styled.section`
  position: relative;

  &.__with-video {
    .${TextOverImageClassName}__video {
      ${CssUtils.Cover};
      z-index: 3;
    }

    .${TextOverImageClassName}__text-container-toggle {
      opacity: 0;
    }
  }

  .${TextOverImageClassName}__image {
    background: ${Theme.Color.Placeholder};
    ${CssUtils.Cover};
  }

  .${TextOverImageClassName}__text-container {
    width: 50%;
    padding: 20% 0;
    z-index: 2;
    position: relative;
    mix-blend-mode: exclusion;
    color: white;

    &__toggle {
      display: block;
      border-radius: 50%;
      margin-top: calc(${Theme.Base.Size.Sm} / 2);
      color: white;
      background: transparent;
      height: calc(${Root.Size} * 1.5);
      width: calc(${Root.Size} * 1.5);
      border: 1px solid white;
      font-size: 3rem;
      will-change: opacity;
      transition: opacity 0.25 ease;

      &:focus,
      &:hover {
        opacity: 0.8;
      }
    }

    &__sub-header {
      font-family: ${Font.Body};
    }

    &__header {
      font-size: 4rem;
      padding-bottom: ${Root.Size};
    }

    &.__alignment {
      &-center {
        margin-left: 25%;
        text-align: center;
      }

      &-right {
        margin-left: 50%;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${TextOverImageClassName}__text-container {
      &__sub-header {
        font-size: 1.5rem;
      }

      &__header {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${TextOverImageClassName}__text-container {
      width: 60%;

      &.__alignment {
        &-center {
          margin-left: 20%;
        }

        &-right {
          margin-left: 40%;
        }
      }
    }
  }
`;
