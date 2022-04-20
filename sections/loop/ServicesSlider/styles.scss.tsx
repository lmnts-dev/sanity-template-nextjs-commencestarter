/**
 *
 * ServicesSlider/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ServicesSlider Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ServicesSliderClassname = "services-slider";

export const ServicesSliderStyle = styled.section`
  --servicesSliderImageWidth: 40%;
  --servicesSliderNavOffset: ${Root.Size};
  --servicesSliderArrowWidth: calc(${Root.Size} / 1.5);

  .${ServicesSliderClassname} {
    &__inner {
      position: relative;
      padding-top: var(--servicesSliderNavOffset);
    }

    &__slides-nav {
      position: absolute;
      top: 0;
      left: calc(var(--servicesSliderImageWidth) + var(--servicesSliderNavOffset));
      transform: translateX(-100%);
      z-index: 2;

      li {
        button {

          &:focus, &:active {
            outline: none;
          }
        }
      }
    }

    &__slides-container {
      position: relative;
    }
  
    &__slide {
      display: inline-flex !important;

      &__image {
        flex: 0 0 var(--servicesSliderImageWidth);
        position: relative;
        min-height: 60vh;
        background-color: ${Color.Placeholder};
      }

      &__text {
        flex: 1;
        padding-left: calc(var(--servicesSliderNavOffset) * 2);
        padding-bottom: calc(var(--servicesSliderArrowWidth) * 1.5);
      }

      &__checklist {
        padding-top: calc(${Root.Size} / 2);
      }

      &__btn {
        margin-top: calc(${Root.Size} / 2);
      }
    }
  }

  .slick-slide:not(.slick-active){
    pointer-events: none;
  }

  .slick-arrow {
    position: absolute;
    bottom: 0;
    top: auto;
    left: auto;

    &.slick-prev {
      right: calc(var(--servicesSliderArrowWidth) * 1.2);
    }

    &.slick-next {
      right: 0;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {

  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${ServicesSliderClassname}{
      &__inner {
        padding-top: 0;
      }
      
      &__slide {
        flex-direction: column;

        &__image {
          min-height: 40vh;
        }

        &__text {
          display: flex;
          flex-direction: column;
          padding-left: 0;
          margin-top: ${Root.Size};
        }

        &__checklist {
         display: none;
        }

        &__btn {
          align-self: center;
          order: 3;
        }
      }

      &__slides-nav {
        display: none;
      }
    }
    
    .slick-dots {
      ${CssUtils.SlickDots};
      justify-content: center;
      margin-bottom: ${Root.Size};
    }
  }
`;

 