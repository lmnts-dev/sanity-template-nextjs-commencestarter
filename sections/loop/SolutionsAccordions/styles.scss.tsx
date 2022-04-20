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
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { animationVisibilityClass, RevealRight } from "../../../constants/styles/Global";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SolutionsAccordionsClassName = "solutions-accordions";

export const SolutionsAccordionsStyle = styled.section`
  .${SolutionsAccordionsClassName}{
    &__solution {
      &__content {
        grid-column: 1 / -1;
        max-height: 0px;
        overflow: hidden;
        display: grid;
        gap: 0 ${Root.Size};
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto 1fr;
        align-items: top;

        &__image {
          position: relative;
          grid-column: 1 / 2;
          grid-row: 1 / -1;
          padding-top: 75%;
        }

        &__features, &__description, &__cta {
          grid-column: 2 / 3;
        }

        &__image, &__description {
          margin-top: ${Root.Size};
        }

        &__cta {
          margin-top: calc(${Root.Size} / 2);
        }
      }

      &.__open {
        .${SolutionsAccordionsClassName}{
          &__solution {
            &__content {
              max-height: 300000px;
            }
          }
        }
      }
    }
  }

  &.${animationVisibilityClass} {
    .${SolutionsAccordionsClassName}{
      &__solution {
        &:nth-of-type(1):after {
          animation: ${RevealRight} 1s forwards;
        }

        &:nth-of-type(2):after {
          animation: ${RevealRight} 1s forwards .25s;
        }

        &:nth-of-type(3):after {
          animation: ${RevealRight} 1s forwards .5s;
        }

        &:nth-of-type(4):after {
          animation: ${RevealRight} 1s forwards .75s;
        }

        &:nth-of-type(5):after {
          animation: ${RevealRight} 1s forwards 1s;
        }

        &:nth-of-type(6):after {
          animation: ${RevealRight} 1s forwards 1.25s;
        }

        &:nth-of-type(7):after {
          animation: ${RevealRight} 1s forwards 1.5s;
        }

        &:nth-of-type(8):after {
          animation: ${RevealRight} 1s forwards 1.75s;
        }

        &:nth-of-type(9):after {
          animation: ${RevealRight} 1s forwards 2s;
        }

        &:nth-of-type(10):after {
          animation: ${RevealRight} 1s forwards 2.25s;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${SolutionsAccordionsClassName}{
      &__solution {
        &__content {
          grid-template-columns: 1fr;

          &__image {
            grid-row: 1 / 2; 
          }

          &__image, &__description {
            margin-top: calc(${Root.Size} / 2);
          }

          &__features, &__description, &__cta {
            grid-column: 1 / 2;
          }

          >*:last-child {
            margin-bottom: ${Root.Size};
          }
        }
      }
    }
  }
`;

export const SolutionFeatures = styled.ul`
  --featureCircleSize: calc(${Root.Size} / 3.5);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: calc(${Root.Size} / 5);

  li {
    display: flex;
    align-items: center;
    gap: calc(${Root.Size} / 5) 0;

    &:before {
      content: "";
      height: var(--featureCircleSize);
      width: var(--featureCircleSize);
      min-width: var(--featureCircleSize);
      margin-right: calc(var(--featureCircleSize) / 2);
      display: block;
      border-radius: 50%;
      background: ${Color.varAccent()};
    }

    p {
      padding-bottom: 0;
    }

    &:not(:last-of-type) {
      margin-right: calc(${Root.Size} / 2);
    }
  }
`;