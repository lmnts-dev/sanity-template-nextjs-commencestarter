// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { SimpleCardClassName } from "../../components/SimpleCard/styles.scss";
import { Root } from "../../constants/Root";
import { Color, Palette } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { hexToRGB } from "../../utils/hexToRGB";
import { Theme } from "../../constants/Theme";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name GuidesListingsStyle
 *
 */

export const GuidesListingsClassName = "guides-listings";
export const SignUpModalClassName = "sign-up-modal";

export const GuidesListingsStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(${Root.Size} / 3);
  position: relative;

  .${SimpleCardClassName} {
    height: 100%;
    
    &__details {
      flex: 1;
    }
  }

  .${GuidesListingsClassName} {
    &__modal-button {
      text-align: left;

      &:hover {
        .${SimpleCardClassName} {
          &__image-container {
            &:after {
              transform: scale(1.5);
            }
          }
        }
      }
    }
  }
  
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    grid-template-columns: 1fr;
    .${GuidesListingsClassName} {
      &__modal-button {
        display:flex;
      }
    }
  }
`;

export const SignUpModalStyle = styled.div`
  &:before {
    content: "";
    ${CssUtils.Cover};
    background-color: ${Color.varBackgroundAlt};
    opacity: .5;
    position: fixed;
    z-index: 998;
  }

  .${SignUpModalClassName} {
    &__content {
      background: ${Color.varBackground()};
      color: ${Color.varForeground()};
      width: 70%;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-height: 75vh;
      overflow: auto;
      z-index: 999;
      box-shadow: 5px 5px calc(${Root.Size} / 2) ${hexToRGB(Palette.Black, .2)};
      overflow: hidden;
      display: flex;

      &__image {
        position: relative;
        flex: 0 0 30%;
      }

      &__text {
        display: flex;
        align-items: flex-start;
        flex: 0 0 70%;
        padding-left: 10%;
        padding-right: 10%;

        &__link {
          background: ${Color.varBackgroundAlt};

          a {
            display: block;
            padding: calc(${Root.Size} / 4);

            &:before {
              content: "";
              display: block;
              height: 6px;
              margin-bottom: calc(${Root.Size} / 4);
              width: 20%;
              background: ${Color.varAccent()};
              transition: all .25s ease;
            }

            &:hover {
              &:before {
                width: 100%;
              }
            }
          }
        }

        &__exit {
          position: absolute;
          top: calc(${Root.Grid.Section} / 4);
          right: calc(${Root.Grid.Section} / 4);
          transition: transform .25s ease;

          &:hover, &:focus {
            outline: none;
            transform: scale(1.1);
          }
        }

        &__form {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${SignUpModalClassName} {
      &__content {
        width: 80%;
        flex-direction: column;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${SignUpModalClassName} {
      &__content {
        width: 90%;
      }
    }
  }
`;
