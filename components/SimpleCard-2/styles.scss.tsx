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
  --simpleCardSquareSize: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;

  .${SimpleCardClassName} {
    &__link {
      ${CssUtils.Cover()}
      z-index: 2;
      pointer-events: all;

      &:hover {
        ~ .${SimpleCardClassName} {
          &__image-container {
            &:after {
              transform: scale(1.5);
            }
          }
        }
      }
    }

    &__image-container {
      background: ${Theme.Color.Placeholder};
      width: 100%;
      position: relative;
      padding-top: 60%;

      &:after {
        content: "";
        position: absolute;
        height: var(--simpleCardSquareSize);
        width: var(--simpleCardSquareSize);
        background: ${Color.varAccent()};
        bottom: 0;
        right: 0;
        will-change: transform;
        transform-origin: bottom right;
        transition: transform .25s ease-in;
      }
    }

    &__details {
      background-color: ${Color.varBackground()};
      padding: calc(${Root.Size} / 4) calc(${Root.Size} / 4) calc(${Root.Size} / 1.5) calc(${Root.Size} / 4);

      &__subheadline {
        opacity: .5;
      }

      > *:last-child {
        padding-bottom: 0;
      }
    }
  }


  &.__size-large {
    --simpleCardSquareSize: 25px;

    .${SimpleCardClassName} {
      &__details {
        padding: calc(${Root.Size} / 3) calc(${Root.Size} / 2);
      }
    }
  }

  &.__featured-card {
      flex-direction: row;

    .${SimpleCardClassName} {
      &__image-container {
        flex: 1;
        padding-top: 30%;

        &:after {
          right: calc(var(--simpleCardSquareSize) * -1);
          transform-origin: top left;
          top: 0;
        }
      }

      &__details {
        flex: 1;
        padding: ${Root.Size};
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    &.simple-card:first-of-type{
      grid-column: 1/-1;
    }

    &.__featured-card {
      flex-direction: column;
      .${SimpleCardClassName} {
        &__image-container {
          padding-top:60%;
            &:after {
              bottom: 0;
              right: 0;
              transform-origin: bottom right;
              top:auto;
            }
          }
        &__details {
          flex: 1;
          padding: calc(var(--Size) / 4) calc(var(--Size) / 4) calc(var(--Size) / 1.5) calc(var(--Size) / 4);
        }
      }
    }
  }
`;
