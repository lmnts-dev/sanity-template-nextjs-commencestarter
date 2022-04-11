/**
 *
 * SynchronizedSlider.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website SynchronizedSlider Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Color } from "../../../constants/styles/Color";
import { activeSlideImage, activeSlideImageDefaultStyles, previousSlideImageStyles } from "../../../constants/styles/Global";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SynchronizedSliderClassName = "synchronized-slider";

export const SynchronizedSliderStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: calc(${Root.Size} / 4);

  .${SynchronizedSliderClassName} {
    &__images {
      position: relative;
      width: calc(100% + ${Root.Grid.Gutter.Right});
      grid-row: 2 / 4;
      min-height: 560px;

      &__image {
        position: relative;
        ${activeSlideImageDefaultStyles};

        &.__prev {
          ${previousSlideImageStyles};
        }

        &.__active {
          animation: ${activeSlideImage} 3s forwards;
        }
      }
    }

    &__hidden-h2 {
      visibility: hidden;
      position: absolute;
      pointer-events: none;
    }

    &__headline {
      grid-column: 1 / -1;
      padding-bottom: 0;

      div {
        display: inline-block;
        position: relative;
      }

      span {
        top: 0;
        left: 0;
        display: block;

        //Resting state, if not prev or active position
        opacity: 0;
        transform: translateY(-50%) rotate(-20deg);
        transform-origin: bottom left;
        position: absolute;


        &.__prev {
          animation: prevSlideWord 3s forwards;
        }

        &.__active {
          animation: activeSlideWord 3s forwards;
        }

      }
    }

    &__body {
      grid-row: 2 / 3;
      padding-right: 15%;
      color: ${Color.varForeground()};
      padding-top: calc(${Root.Size});
    }

    &__number {
      grid-row: 3 / 4;
      padding-bottom: 0;
      text-align: right;
      color: ${Color.varForeground()};
      
      &__label, &__num {
        display: block;
      }

      &__label {
        text-transform: uppercase;
      }

      &__num {
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    grid-template-columns: 1fr;

    .${SynchronizedSliderClassName} {
      &__headline, &__images, &__body {
        grid-column: 1 / -1;
        grid-row: auto;
      }

      &__body {
        padding: 0;
      }

      &__images {
        width: 100%;
        min-height: 300px;
      }
    }
  }

  @keyframes activeSlideWord {
    0% {
      transform: rotate(-10deg) translateY(-50%);
      opacity: 0;
      position: relative;
    }
    80% {
      transform: translateY(0);
      opacity: 1;
      position: relative;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      position: relative;
    }
  }

  @keyframes prevSlideWord {
    0% {
      transform: translateY(0);
      opacity: 1;
      position: absolute;
    }
    50% {
      transform: translateY(100%);
      opacity: 0;
      position: absolute;
    }
    100% {
      transform: translateY(200%);
      opacity: 0;
      position: absolute;
    }
  }
  
`;
