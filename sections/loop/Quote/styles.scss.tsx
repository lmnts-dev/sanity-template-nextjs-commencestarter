/**
 *
 * @author Alisha Garric
 * @description Quote styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const QuoteClassName = "quote";

export const QuoteStyle = styled.section`
  .${QuoteClassName}{
    &__image {
      margin: 0 auto ${Root.Size} auto;
      max-width: calc(${Theme.Base.Grid.ReadingWidth});
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align:center;

      &__author {
        display: flex;
        flex-direction: column;

        &__name {
          margin-bottom: calc(${Root.Size} * 0.25);
        }

        &__company {
          opacity: .6;
        }
      }
      
      &__quote {
        text-align: center;
        max-width: ${Theme.Base.Grid.ReadingWidth};
        margin: 0 auto;
      }
    }
  }

  &.__layout-split {
    .${QuoteClassName}__container {
      display: flex;
      flex-direction: row;

      .${QuoteClassName} {
        &__text {
          flex: 2;
          align-items: flex-start;
          text-align: left;

          &__quote {
            text-align: left;
            margin-left: 0;
          }

          &__author {
            flex-direction: row;
            align-items: baseline;

            > *:last-child {
              padding-left: calc(${Root.Size} / 5);
            }
          }
        }

        &__image {
          flex: 1;
          padding-right: calc(${Root.Size});
          margin-bottom: 0;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${QuoteClassName}{
      &__text {
        &__quote {
          font-size: 1.2rem;
        }

        &__author {
          
          &__name, &__company {
            font-size: 1rem;
          }
        }
      }
    }

    &.__layout-split {
      .${QuoteClassName}__container {
        flex-direction: column;

        .${QuoteClassName} {
          &__text {
            &__author {
              flex-direction: column;

              > *:last-child {
                padding-left: 0;
              }
            }
          }

          &__image {
            padding-right: 0;
            margin: 0 auto calc(${Root.Size} / 2) 0;
          }
        }
      }
    }
  }
`;
