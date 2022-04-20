// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color, Palette } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Constants
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name FeaturesListingsStyle
 *
 */

export const FeaturesListingsClassname = "features-listings";
export const FeaturesListingsModalClassname = "features-listings-modal";

export const FeaturesListingsStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(${Root.Size} / 6);

  .${FeaturesListingsClassname} {
    &__load-more, &__header {
      grid-column: 1 / -1;
      text-align: center;
    }

    &__header {
      padding-bottom: calc(${Root.Size} / 2);
      max-width: 575px;
      margin: 0 auto;
    }

    &__feature {
      padding: calc(${Root.Size} / 2);
      position: relative;
      cursor: pointer;
      text-align: left;

      &.__unclickable {
        cursor: default;
      }

      &.__hide {
        display: none;
      }

      //line for hover
      &:after {
        content: "";
        height: 6px;
        left: calc(${Root.Size} / 2);
        top: 0;
        right: 0;
        position: absolute;
        background-color: ${Color.varAccent()};
        transform: scaleX(.07);
        will-change: transform;
        transition: all .5s ease;
        transform-origin: top left;
      }

      //background for hover
      &:before {
        content: "";
        ${CssUtils.Cover()};
        background-color: ${Color.varBackgroundAlt};
        opacity: 0;
        will-change: opacity;
        transition: opacity .5s ease;
      }

      > * {
        position: relative;
      }

      &__body {
        opacity: .7;
      }

      &__btn {
        font-weight: 500;
        opacity: 0;
        will-change: opacity;
        transition: opacity .25s ease;
        padding-bottom: 0;
      }

      &:hover:not(.__unclickable), &:focus:not(.__unclickable) {
        outline: none;
        
        .${FeaturesListingsClassname} {
          &__feature {

            &__btn {
              opacity: 1;
            }
          }
        }

        &:after {
          transform: scaleX(1);
        }

        &:before {
          opacity: 1;
        }
      }
    }
  
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${FeaturesListingsClassname} {
      &__feature {
        margin-bottom: calc(${Root.Size} / 3);

        &__btn {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    grid-template-columns: 1fr;
  }
`;



//Modal styles
export const FeaturesListingsModalStyle = styled.div`
  &:before {
    content: "";
    ${CssUtils.Cover};
    background-color: ${Color.varBackgroundAlt};
    opacity: .5;
    position: fixed;
    z-index: 998;
  }

  .${FeaturesListingsModalClassname} {
    &__content {
      background: ${Color.varBackground()};
      color: ${Color.varForeground()};
      width: 70%;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      box-shadow: 5px 5px calc(${Root.Size} / 2) ${hexToRGB(Palette.Black, .2)};
      overflow: hidden;

      &__top {
        display: flex;
        align-items: flex-start;

        &__aspects {
          flex: 0 0 30%;
          margin-left: ${Root.Size};
        }

        &__title {
          display: inline-block;

          &:before {
            content: "";
            height: 6px;
            background-color: ${Color.varAccent()};
            width: 100%;
            display: block;
            margin-bottom: calc(${Root.Size} / 2);
          }
        }

        &__exit {
          position: absolute;
          top: calc(${Root.Grid.Section} / 4);
          right: calc(${Root.Grid.Section} / 4);
          transition: transform .25s ease;

          &:hover, &:focus {
            transform: scale(1.1);
          }

          &:focus {
            outline: none;
          }
        }

        &__container {
          overflow: auto;
          max-height: calc(75vh - ${Root.Grid.Section} - ${Root.Grid.Section});
        }

        + * {
          margin-top: calc(${Root.Grid.Section} * -1);
        }

        ~ * {
          position: relative;
          background: ${Color.varBackground()};
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${FeaturesListingsModalClassname} {
      &__content {
        width: 80%;

        &__top {
          flex-direction: column;

          &__aspects {
            margin-left: 0;
          }

          + * {
            margin-top: 0;
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${FeaturesListingsModalClassname} {
      &__content {
        width: 90%;
      }
    }
  }
`;
