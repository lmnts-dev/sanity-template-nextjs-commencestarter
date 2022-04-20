// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name NewsroomListingsStyle
 *
 */

export const NewsroomListingsClassName = "newsroom-listings";
export const PaginationClassName = "newsroom-listings-pagination";

//NewsroomListings listings
export const NewsroomListingsStyle = styled.section`

`;

export const NewsroomListingStyle = styled.div`
  --newsroomSpacing: calc(${Root.Size} / 2);

  //each article listing
  .${NewsroomListingsClassName}__news {
    padding: calc(var(--newsroomSpacing) / 2) 0;
    position: relative;

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      padding-bottom: 0;

      &:after {
        content: none;
      }
    }

    &:after {
      content: "";
      position: absolute;
      border-bottom: 1px solid ${Color.varForeground()};
      width: calc(100% - var(--newsroomSpacing));
      left: calc(var(--newsroomSpacing) / 2);
      bottom: 0;
      opacity: .3;
    }

    &__inner {
      display: flex;
      align-items: flex-start;
      padding: calc(var(--newsroomSpacing) / 2);
      position: relative;

      &:before {
        content: "";
        ${CssUtils.Cover};
        background-color: ${Color.varForeground()};
        opacity: 0;
        will-change: opacity;
        transition: opacity .25s ease;
      }

      &:hover {
        &:before {
          opacity: .05;
        }
      }
    }

    &__image {
      background: ${Color.varBackground()};;
      flex: 0 0 calc(${Root.Size} * 3);
      height: calc(${Root.Size} * 2);
      position: relative;

      > *:first-child {
        transform: scale(.7);
      }
    }

    &__headline {
      padding-left: var(--newsroomSpacing);
      padding-bottom: ${Root.Button.Size};
    }

    &__cta.__with-arrow {
      position: absolute;
      opacity: .5;
      padding: 0;
      right: calc(var(--newsroomSpacing) / 2);
      bottom: calc(var(--newsroomSpacing) / 2);
      display: flex;
      background: transparent;
      color: ${Color.varForeground()};

      &:after {
        content: none;
      }
      .btn-arrow {
        svg * {
          fill: ${Color.varForeground()};
        }
      }
    }
  }

  //styles for medium screens
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    &:not(:last-child) {
      margin-bottom: calc(${Root.Size} / 2);
    }

    .${NewsroomListingsClassName}__news {
      &__cta.__with-arrow {
        position: relative;
        width:100%;
        justify-content: flex-end;
        margin-top:${Root.Size};
      }

      &__inner {
        flex-direction: column;

        &:before {
          opacity: .05;
        }
      }

      &__image {
        width:100%;
        margin-bottom: calc(${Root.Size} / 2);
        background: ${Color.varBackground()};
      }

      &__headline {
        padding-left: 0;
        padding-bottom: calc(${Root.Size} / 4);
      }

      &__cta {
        position: relative;
        right: auto;
        bottom: auto;
        margin-bottom: calc(${Root.Size} / 4);
      }
    }
  }
`;
