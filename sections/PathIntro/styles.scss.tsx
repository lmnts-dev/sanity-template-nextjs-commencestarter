// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color, Palette } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name PathIntroStyle
 *
 */

export const PathIntroClassName = "path-intro";

export const PathIntroStyle = styled.section`
  --pathsIntroIconHeight: calc(${Root.Size} / 2);
  display: flex;
  flex-direction: column-reverse;


  .${PathIntroClassName} {

    //The intro info about the path. Shown right below the hero
    &__path-intro {
      padding-top: ${Root.Grid.Section};
      padding-bottom: ${Root.Grid.Section};
      display: flex;
      align-items: flex-end;
      z-index: 2;
      position: relative;
      ${CssUtils.SectionBackground}
      color: ${Color.varBackground()};
      
      &:after {
        background: ${Color.varForeground()};
      }

      > * {
        flex: 1;

        &:last-child {
          padding-left: ${Root.Grid.Gutter.Left};
        }
      }

    }

    //The hero that's the same on each path page
    &__hero {
      --borderHeight: calc(${Root.Size} / 6);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${Root.Size};
      padding-top: ${Root.Grid.Section};
      position: relative;

      .${PathIntroClassName} {

        &__headline {
          grid-row: 1 / 2;
          grid-column: 1 / 2;
        }

        &__details {
          grid-row: 1 / 2;
          grid-column: 2 / -1;
        }

        &__tabs {
          display: flex;
          justify-content: flex-start;
          margin-bottom: var(--borderHeight);

          //path theme color border
          &:after {
            content: "";
            width: 100vw;
            border-bottom: calc(var(--borderHeight) + 1px) solid ${Color.varAccent()};
            position: absolute;
            left: calc(${Root.Grid.Gutter.Left} * -1); //TODO: greater than site width
            top: calc(100% - var(--borderHeight) - 1px);
          }

          &__item {
            flex: 1 0 calc(100% / 3);
            position: relative;

            &:before {
              content: "";
              height: var(--borderHeight);
              left: 0;
              right: 0;
              position: absolute;
              bottom: 0;
              background: ${Color.varAccent()};
              will-change: height;
              transition: height 1s ease;
              z-index: 1;
            }

            &.__active {
              .${PathIntroClassName}__tabs__item__link__label {
                color: ${Palette.Black};
              }
              
              &:before {
               height: 100%;
              }
            }

            &__link {
              display: flex;
              padding: calc(${Root.Size} / 2);
              align-items: center;
              justify-content: center;
              position: relative;
              z-index: 2;

              &__label {
                margin-left: calc(${Root.Size} / 4);
                padding: 0;
                color: ${Color.varForeground()};
                will-change: color;
                transition: color 1s ease;
              }

              img {
                height: var(--pathsIntroIconHeight) !important;
                width: auto !important;
                max-width: none !important;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${PathIntroClassName} {
      &__hero {
        .${PathIntroClassName} {
          &__details {
            grid-column: 1 / -1;
            grid-row: 2 / 2;
          }

          &__headline {
            grid-column: 1 / -1;
          }

          &__tabs-nav {
            grid-column: 1 / -1;
          }

          &__tabs {
            &__item {
              &__link {
                padding: calc(${Root.Size} / 3);

                &__label {
                  font-size: 1.3rem;
                }
              }
            }
          }
        }
      }
    }
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --pathsIntroIconHeight: calc(${Root.Size} / 2.5);

    .${PathIntroClassName} {
      &__hero {
        .${PathIntroClassName} {
          &__tabs {
            &__item {
              &__link {
                padding: calc(${Root.Size} / 4);

                &__label {
                  font-size: 1.1rem;
                }
              }
            }
          }
        }
      }


      &__path-intro{
        flex-direction: column;
         > * {
          &:last-child {
          padding-left: 0;
          }
        }
      }

      &__details{
        margin-bottom:${Root.Size};
      }
    }
  }
`;
