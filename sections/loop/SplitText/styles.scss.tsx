// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { animationVisibilityClass, RevealDown, RevealDownInitialStyles, SlideUp, SlideUpInitialStyles } from "../../../constants/styles/Global";
import { Theme } from "../../../constants/Theme";


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name SplitTextStyle
 *
 */

export const SplitTextClassName = "split-text";

export const SplitTextStyle = styled.section`
  --splitTextSpace: 5%;
  --splitTextLineDistance: calc(${Root.Size} / 1.25);
  display: flex;
  align-items: center;


  .${SplitTextClassName} {
    &__left {
      flex: 0 0 60%;
      padding-right: var(--splitTextSpace);
      position: relative;
      ${SlideUpInitialStyles}

      > * {
        position: relative;
      }

      &.__line-vertical {
        &:after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          border-right: 1px solid ${Color.varForeground()};
          ${RevealDownInitialStyles};
        }
      }

      &.__line-horizontal {

        // Cover horizontal line behind text in hacky way
        // that makes the line appear to be 20px away from the word
        span {
          background: ${Color.varBackground()};
          position: relative;
          
          &:after {
          //  content: " ";
            background: ${Color.varBackground()};
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 20px;
            transform: translateX(100%);
          }
        }

        //the line that runs beneath
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: calc(var(--splitTextSpace) / -2);
          top: var(--splitTextLineDistance);
          border-top: 1px solid ${Color.varForeground()};
        }
      }
    }

    &__right {
      flex: 0 0 40%;
      padding-left: var(--splitTextSpace);
      ${SlideUpInitialStyles}
    }

    &__block {
      padding-bottom: calc(${Root.Size}/ 6);

      p:first-child {
        margin-top: calc(${Root.Size}/ 4);
      }

      &__image-container {
        height: calc(${Root.Size}/ 1.5);
        position: relative;
        margin-bottom: calc(${Root.Size}/ 6);
      }

      h1, h2, h3, h4, h5, h6, .headline {
        margin-top: 0;
      }
    }
  }

  &.__emphasize-left {
    .${SplitTextClassName}__left:before {
      content: "";
      ${CssUtils.Cover};
      background: ${Color.varBackground()};
      width: calc(60% - calc(var(--splitTextSpace) / 2));
      right: auto;
    }
  }

  &.__layout-right-offset {
    .${SplitTextClassName} {
      &__left {
        flex: 0 0 40%;
      }

      &__right {
        flex: 0 0 60%;
      }

      &__block {
        &.__featured {
          &:before {
            width: calc(calc(calc(100vw - ${Root.Grid.Gutter.Left} - ${Root.Grid.Gutter.Right}) * .6) + ${Root.Grid.Gutter.Right} - ${Root.Size}); //lol a this calculation
          }
        }
      }
    }

    &.__emphasize-left {
      .${SplitTextClassName}__left:before {
        width: calc(40% - calc(var(--splitTextSpace) / 2));
      }
    }
  }

  &.__layout-no-offset {
    .${SplitTextClassName} {
      &__left, &__right {
        flex: 0 0 50%;
      }

      &__block {
        &.__featured {
          &:before {
            width: calc(calc(calc(100vw - ${Root.Grid.Gutter.Left} - ${Root.Grid.Gutter.Right}) * .5) + ${Root.Grid.Gutter.Right} - ${Root.Size}); //lol a this calculation
          }
        }
      }

      .${SplitTextClassName}__left:before {
        width: calc(50% - calc(var(--splitTextSpace) / 2));
      }
    }
  }

  &.__alignment-top {
    align-items: stretch;
  }

  &.__alignment-bottom {
    align-items: flex-end;
  }

  &.${animationVisibilityClass} {
    .${SplitTextClassName} {
      &__left {
        animation: ${SlideUp} 1s forwards;

        &.__line-vertical {
          &:after {
            animation: ${RevealDown} 1s forwards;
          }
        }
      }

      &__right {
        animation: ${SlideUp} 1s forwards .5s;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --splitTextLineDistance: calc(${Root.Size} / 2);
    flex-direction: column;
    
    &.__layout-right-offset {
      .${SplitTextClassName} {
        &__block {
          &.__featured {
            &:before {
              width: 100%;
            }
          }
        }
      }
    }

    &.__emphasize-left {
      .${SplitTextClassName}{
        &__left {
          &:before {
            width: 100%;
            bottom: 50%;
          }
        }
         
        &__right{
          margin-top: calc(${Root.Size} * 2);
        }
      }
    }
    
    .${SplitTextClassName} {
      &__left, &__right {
        max-width: ${Theme.Base.Grid.ReadingWidth};
      }

      &__left {
        width: 100%;
        padding-left: 0;

        &.__line-vertical:after {
          content: none;
        }
      }

      &__right {
        padding-left: 0;
      }
    }
  }
`;
