/**
 *
 * QuoteSlider/styles.scss.tsx
 * @author Alisha Garric
 * @description The website QuoteSlider Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Utils
import { Color } from "../../../constants/styles/Color";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const QuoteSliderClassname = "quote-slider";

export const QuoteSliderStyle = styled.section`
  position: relative;
  overflow: hidden;

  .${QuoteSliderClassname}__slide-container {
    position: relative;

    &:before, &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: ${Root.Grid.Gutter.Left};
      top: 0;
      z-index: 1;
    }

    &:before {
      left: 0;
      background: linear-gradient(to right, ${Color.varBackground()}, ${Color.varBackground("transparent")});
    }

    &:after {
      right: 0;
      background: linear-gradient(to left, ${Color.varBackground()}, ${Color.varBackground("transparent")});
    }

    .flickity-button {
      z-index: 2;
    }

    .flickity-viewport {
      z-index: 0;
    }
  }

  //each slide
  .${QuoteSliderClassname}__slide {
    text-align: center;
    display: flex;
    flex-direction: column;
    width:100%;

    &__quote, &__details {
      max-width: 700px;
      margin: 0 auto;
    }

    &__quote {
      padding-bottom: ${Root.Size};
      flex: 1;
      display: grid;
      place-content: center;
    }

    &__details {
      justify-content: center;
      align-items: center;
      display: flex;

      &__author-title {
        color: ${Color.varAccent()};
      }

      &__author-title, &__author {
        padding: 0 calc(${Theme.Base.Size.Sm}/ 5);
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {

    .${QuoteSliderClassname}__slide {
      &__quote, &__details {
        max-width: 500px;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
  }
`;
