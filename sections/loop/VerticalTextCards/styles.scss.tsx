// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Palette } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name VerticalTextCardsStyle
 *
 */

export const VerticalTextCardsClassName = "vertical-text-cards";

export const VerticalTextCardsStyle = styled.section`
  --vertCardsGap: 3.5vw;
  --vertCardsVertGap: 7vw;
  --vertCardsHeadline: 4vw;
  --vertCardsImage: 22vw;
  --vertCardsFont: 2.5vw;
  --spaceForShrunkenImage: calc(calc(calc(100% / 3) / 2) + calc(${Root.Size} / 2));
  --overlayEdgeOffset: -200%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0 var(--vertCardsGap);
  margin-bottom: calc(var(--vertCardsVertGap) * -1);

  .${VerticalTextCardsClassName} {

    &__headline {
      grid-row: 1 / 2;
      grid-column: 1 / -1;

      + .${VerticalTextCardsClassName} {
        &__body {
          grid-row: 2 / 3;
        }
      }
    }

    &__body {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      padding-bottom: calc(${Root.Size});
      
      > * {
        max-width: 360px;
        margin-right: auto;

        &:last-child {
          padding-bottom: 0;
        }
      }
    }

    &__card {
      display: grid;
      grid-template-rows: var(--vertCardsImage) auto;
      grid-template-columns: var(--vertCardsHeadline) auto;
      position: relative;
      will-change: transform;
      transition: all .25s ease;
      padding-bottom: var(--vertCardsVertGap);

      &:hover {
        @media (min-width: ${Theme.Base.Media.Width.Sm}) {
          cursor: pointer;
          transform: scale(1.03);
        }
      }

      &.__active {
        @media (min-width: ${Theme.Base.Media.Width.Sm}) {
          transform: scale(1.05);
          z-index: 4;

          .${VerticalTextCardsClassName} {
            &__card {
              &__headline, &__text {
                opacity: 0;
              }

              &__image {
                img {
                  transform: scale(.5);
                }

                > div {
                  &:last-child {
                    &:before, &:after {
                      opacity: 1;
                    }
                  }
                }

                &__overlay {
                  opacity: .85;
                  pointer-events: auto;
                }
              }
            }
          }
        }
      }

      &:nth-child(4n), &:nth-child(4n -1) {
        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          .${VerticalTextCardsClassName} {
            &__card {
              &__image {
                > div {
                  img {
                    transform-origin: top right;
                  }

                  &:last-child {
                    &:after, &:before {
                      right: calc(${Root.Size} / -2);
                      left: auto;
                    }
                  }
                }

                &__overlay {
                  right: 0;
                  left: var(--overlayEdgeOffset);

                  &__inner {
                    padding: calc(${Root.Size} / 2) var(--spaceForShrunkenImage) calc(${Root.Size} / 2) calc(${Root.Size} / 2);
                  }
                }
              }
            }
          }
        }
      }

      &__headline {
        font-weight: 600;
        position: relative;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        font-size: var(--vertCardsFont);
        opacity: 1;
        will-change: opacity;
        transition: all .5s ease;

        span {
          bottom: 0;
          left: 0;
          position: absolute;
          white-space: nowrap;
          transform: rotate(-90deg) translateY(175%);
          transform-origin: bottom left;
        }
      }

      &__image {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        position: relative;

        > div {
          z-index: 2;
          overflow: visible !important;

          img {
            will-change: transform;
            transform-origin: top left;
            transition: all .25s ease;
          }

          &:last-child {
            &:after, &:before {
              content: "";
              background: white;
              mix-blend-mode: exclusion;
              width: ${Root.Size};
              padding-top: ${Root.Size};
              position: absolute;
              top: calc(${Root.Size} / -2);
              left: calc(${Root.Size} / -2);
              opacity: 0;
              z-index: 2;
              will-change: top, left, opacity;
              transition: all .25s ease;
            }

            &:after {
              transform: rotate(45deg);
              background: linear-gradient(transparent 50%, white calc(50% + 1px), transparent calc(50% + 2px)), linear-gradient(to right, transparent 50%, white calc(50% + 1px), transparent calc(50% + 2px));
            }
          }
        }

        &__overlay {
          ${CssUtils.Cover};
          right: var(--overlayEdgeOffset);
          will-change: opacity, pointer-events;
          transition: all .25s ease;
          opacity: 0;
          pointer-events: none;
          z-index: 1;

          &__inner {
            display: flex;
            flex-direction: column;
            position: relative;
            padding: calc(${Root.Size} / 2) calc(${Root.Size} / 2) calc(${Root.Size} / 2) var(--spaceForShrunkenImage);
            background: ${Palette.OffWhite};

            *:last-child {
              padding-bottom: 0;
            }
          }
        }
      }

      &__text {
        margin-top: calc(${Root.Size} / 5);
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding-bottom: 0;
        opacity: 1;
        will-change: opacity;
        transition: all .5s ease;

        > p:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  &.__blur {
    @media (min-width: ${Theme.Base.Media.Width.Sm}) {
      &:before {
        content: "";
        ${CssUtils.Cover};
        position: fixed;
        z-index: 3;
        backdrop-filter: blur(5px);
      }
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    --vertCardsGap: calc( 0.035 * ${Base.Grid.SiteWidth + "px"});
    --vertCardsVertGap: calc( 0.07 * ${Base.Grid.SiteWidth + "px"});
    --vertCardsHeadline: calc( 0.04 * ${Base.Grid.SiteWidth + "px"});
    --vertCardsImage: calc( 0.22 * ${Base.Grid.SiteWidth + "px"});
    --vertCardsFont: calc( 0.025 * ${Base.Grid.SiteWidth + "px"});
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --vertCardsHeadline: 6vw;
    --vertCardsImage: 50vw;
    --vertCardsFont: 4vw;
    --overlayEdgeOffset: -50%;
    --spaceForShrunkenImage: calc(calc(70% / 2) + calc(${Root.Size} / 2));

    grid-template-columns: 1fr 1fr;

    .${VerticalTextCardsClassName} {
      &__card {

      &:nth-child(even) {
        .${VerticalTextCardsClassName} {
          &__card {
            &__image {
              > div {
                img {
                  transform-origin: top right;
                }

                &:last-child {

                  &:after, &:before {
                    right: calc(${Root.Size} / -2);
                    left: auto;
                  }
                }
              }

              &__overlay {
                right: 0;
                left: var(--overlayEdgeOffset);

                &__inner {
                  padding: calc(${Root.Size} / 2) var(--spaceForShrunkenImage) calc(${Root.Size} / 2) calc(${Root.Size} / 2);
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --spaceForShrunkenImage: calc(${Root.Size} / 2);
    display: flex;
    flex-direction: column;

    .${VerticalTextCardsClassName} {

      &__headline, &__body {
        order: 1;
      }

      &__card {
        display: block;
        order: 2;
        overflow: hidden;

        &__headline, &__text {
          display: none;
        }

        &__image {
          display: flex;
          flex-direction: column-reverse;

          > div:last-child {
            position: relative !important;
            padding-bottom: 125%;
          }

          &__overlay {
            position: relative;
            opacity: 1;
            left: 0 !important;
            right: 0 !important;
          }
        }
      }
    }
  }
`;
