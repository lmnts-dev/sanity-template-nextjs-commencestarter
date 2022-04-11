/**
 *
 * TextSlider/styles.scss.tsx
 * @author Alisha Garric
 * @description The website TextSlider Styles.
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

export const TextSliderClassname = "text-slider";

export const TextSliderStyle = styled.section`
  display:flex;

  .${TextSliderClassname}__slide-container {
    width:50%;

    &:before {
      left: 0;
      background: linear-gradient(to right, ${Color.varBackground()}, ${Color.varBackground("transparent")});
    }

    &:after {
      right: 0;
      background: linear-gradient(to left, ${Color.varBackground()}, ${Color.varBackground("transparent")});
    }
  }

  .${TextSliderClassname}__body {
    padding-right: calc(${Root.Grid.Gutter.Right} * .6);
  }

  .${TextSliderClassname}__titles{
    width:50%;
    padding-left: calc(${Root.Grid.Gutter.Left} * .6);

    &__title{
      position: relative;
      width: fit-content;
      padding-bottom: 0;
      margin-bottom:calc(${Root.Size});

      &:hover{
        cursor: pointer; 
      }

      &:before{
        content: "";
        background: var(--accent);
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        right: auto;
        width: 2px;
        will-change: width,opacity;
        -webkit-transition: width 1.5s ease,opacity 1.5s ease;
        transition: width 1.5s ease,opacity 1.5s ease;
        opacity: 0;
      }

      &.--active{
        :before{
          opacity: 1;
          width: 100%;
        }
      }

      h3{
        position:relative;
        padding: calc(var(--Size) / 8) calc(var(--Size) / 5);
      }
    }
  }

  //each slide
  .${TextSliderClassname}__slide {
    text-align: start;
    display: flex;
    justify-content: space-between;
    width:100%;
    
      &__image{
        flex:1;
      }

      &__text{
        flex:2;
      }

      &__text, &__details {
        margin-left: ${Root.Size};
        margin-right: ${Root.Size};
      }

      &__text {
        padding-bottom: ${Root.Size};
        flex: 1;
        display: grid;
        place-content: center;

        &::before{
        font-weight: bold;
        font-size: 4rem;
        color: var(--accent);
        content: '“ ';
      }
    }
  }

  &__details {
    justify-content: start;
    align-items: center;
    display: flex;

    &__author-title {
      color: ${Color.varAccent()};
    }

    &__author-title, &__author {
      padding: 0 calc(${Theme.Base.Size.Sm}/ 5);
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${TextSliderClassname}__slide {
      &__text, &__details {
        max-width: 500px;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction: column;
    .${TextSliderClassname}{

      &__body {
        padding-right: 0;
      }

      &__titles {
        width:100%;
        padding-left: 0;
        display: flex;

        &__title {
          margin-bottom: calc(${Root.Size} / 4);
          transform: translateX(calc(var(--Size) / -5));

          h3 {
            font-size: 1.3rem;
          }
        }
      }

      &__slide-container{
        width:100%;
      }
    }
  }
`;
