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
import { animationVisibilityClass, SlideUp, SlideUpInitialStyles } from "../../../constants/styles/Global";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NumberedSliderClassName = "numbered-slider";

export const NumberedSliderStyle = styled.section`
  --numberedSliderFirstButtonColor: ${Color.varAccent()};
  --numberedSliderFirstButtonTextColor: ${Color.varForeground()};

  .${NumberedSliderClassName}{
    &__header {
      display: flex;
      ${SlideUpInitialStyles}
      
      &__headline {
        max-width: 50%;
        display: inline-block;
        padding-right: calc(${Root.Size} / 3);
        position: relative;
        padding-bottom: 0;
      }

      &__scrollbar {
        flex: 1;
        position: relative;

        &:before {
          content: "";
          border-top: 1px solid ${Color.varForeground()};
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
        }

        &:after {
        //  content: "";
          height: calc(${Root.Size} / 2);
          top: 50%;
          position: absolute;
          background: ${Color.varAccent()};
          width: ${(props: { scrollBarWidth: number, percentScrolled: number }) => props.scrollBarWidth ? `calc(${props.scrollBarWidth} * 1%)` : 0};
          left: ${(props: { scrollBarWidth: number, percentScrolled: number }) => props.percentScrolled ? props.percentScrolled : "0" }%;
          transform: translateY(-50%) scale(.95);
          will-change: left;
          transition: left .25s ease;
        }
      }

      &.${animationVisibilityClass} {
        animation: ${SlideUp} 1s forwards;
      }
    }

    &__slides-container {
      padding: 0 calc(${Root.Grid.Gutter.Right} + 8%) 0 8%;
      margin-right: calc(${Root.Grid.Gutter.Right} * -1);
    }

    &__slide {
      padding: ${Root.Size} ${Root.Size} 0 ${Root.Size};
      display: inline-grid !important;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto 1fr auto;
      height: 100%;

      &__number {
        grid-column: 1 / 2;
        grid-row: 1 / -1;
        padding: 0;
        margin-right: calc(${Root.Size} / 2);
        line-height: .6;
      }

      &__headline, &__subheadline, &__body, &__ctas {
        grid-column: 2 / 3;
      }

      &__ctas {
        display: flex;
        margin-top: calc(${Root.Size} / 2);

        > *:first-child {
          .${NumberedSliderClassName}__slide__ctas__btn {
            --button: var(--numberedSliderFirstButtonColor);
            --buttonText: var(--numberedSliderFirstButtonTextColor);
          }
        }

        > *:not(:last-child) {
          margin-right: calc(${Root.Size} / 5);
        }
      }
    }
  }

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
    ${SlideUpInitialStyles}

    &.slick-current, &.slick-current + .slick-slide {
      animation: ${SlideUp} 1s forwards;
    }

    > div {
      height: 100%;
    }
  }

  .slick-arrow {
    &.slick-prev {
      left: 0;
      transform: scaleX(-1);
    }

    &.slick-next {
      right: ${Root.Grid.Gutter.Right};
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${NumberedSliderClassName}{
      &__slides-container {
        padding: 0;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${NumberedSliderClassName}{
      &__slide {
        padding-left: 0;
      }

      &__header {

        &__headline {
          max-width: none;
        }

        &__scrollbar {
          &:after {
            content: none;
          }
        }
      }
    }
  }
`;


