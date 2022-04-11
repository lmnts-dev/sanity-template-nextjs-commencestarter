/**
 *
 * TeamGrid/styles.scss.tsx
 * @author Alisha Garric
 * @description The website TeamGrid Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";

// Utils
import { Color } from "../../../constants/styles/Color";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TeamGridClassname = "team-grid";

export const TeamGridStyle = styled.section`
  --teamGridFontSize: 1.05vw;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: calc(var(--teamGridFontSize) * 2);
  grid-row-gap: calc(var(--teamGridFontSize) * 2);

  .${TeamGridClassname} {

    &__content {
      p {
        font-size: var(--teamGridFontSize);
      }

      p:last-of-type {
        padding-bottom: 0;
      }
    }

    &__headline{
      padding-bottom: calc(var(--Size) / 10);
    }

    &__subheadline{
      font-size:1rem;
      position:relative;
      padding-bottom: calc(var(--Size) / 4);
      display:flex;
      align-items:center;

      &:before {
        content: "";
        left: 0;
        height: var(--teamGridFontSize);
        width: var(--teamGridFontSize);
        margin-right: var(--teamGridFontSize);
        background: ${Color.varAccent()};
      }
    }



    &__grid-item {
      &.__hide-desktop {
        @media (min-width: ${Theme.Base.Media.Width.Md}) {
          display: none;
        }
      }

      &__image {
        background: ${Theme.Color.Placeholder};
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        padding-top: 100%;
        transform: translateY(-50%);
      }

      &.__image-container {
        position: relative;
        padding-top: 100%;
      }
    }
  }  

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    --teamGridFontSize: calc( .0105 * ${Theme.Base.Grid.SiteWidth});
  }


  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --teamGridFontSize: 1.9vw;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    .${TeamGridClassname} {
      &__grid-item {
        &.__hide-tablet {
          display: none;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --teamGridFontSize: 1rem;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;

    .${TeamGridClassname} {
        &__grid-item {
          &.__image-container {
            padding-top: 50%;
          }

          &__image {
            width: 50%;
            padding-top: 50%;
          }
        }
    }
  }
`;
