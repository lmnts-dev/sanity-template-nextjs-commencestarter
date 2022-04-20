/**
 *
 * @author Alisha Garric
 * @description Fullwidth image styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ServiceListingsClassName = "service-listings";

export const ServiceListingsStyle = styled.section`

  .${ServiceListingsClassName}{
    &__services {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${Root.Size};

      &__category {
        &__title {
          position: relative;
          display: block;
          padding-bottom: 0;

          span {
            position: relative;
            background: ${Color.varBackground()};

            &:after {
              content: "";
              width: calc(${Root.Size} / 2);
              display: inline-block;
            }
          }

          &:before {
            content: "";
            position: absolute;
            top: 50%;
            height: 2px;
            width: 100%;
            background-color: ${Color.varForeground()};
          }
        }

        &__items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: calc(${Root.Size} / 8) calc(${Root.Size} / 1.5);
          padding-left: calc(${Root.Size} / 3);

          li {
            padding-bottom: 0;
            list-style: square;
          }
        }
      }
    }

    &__body {
      max-width: 600px;
    }

    &__headline {
      overflow: hidden;
      width: calc(100% + ${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right});
      margin-left: calc(${Root.Grid.Gutter.Left} * -1);
      padding-top: calc(${Root.Size} / 3);

      &__inner {
        display: block;
        animation: marquee 40s linear infinite;
        display: flex;

        span {
          white-space: nowrap;
          
          &:after {
            content: "•";
            display: inline-block;
            font-family: 'Georgia';
            transform: scale(.6);
          }
        }
      }
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    .${ServiceListingsClassName}{
      &__headline {
        position: relative;
        ${CssUtils.LargeScreenGradients};
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${ServiceListingsClassName}{
      &__services {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${ServiceListingsClassName}{
      &__services {
        grid-template-columns: 1fr;
      }
    }
  }
`;
