/**
 *
 * @author Alisha Garric
 * @description Project guide section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";

// Constants
import { Theme } from "../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ProjectGuideClassName = "project-guide";

export const ProjectGuideStyle = styled.section`
  .${ProjectGuideClassName}__container {
    display: flex;

    .${ProjectGuideClassName}__link {
      min-height: 20vh;
      padding: ${Root.Size};
      flex: 50%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${CssUtils.RevokeChildrenPointerEvents};

      &:first-of-type {
        &:after {
          content: "";
          position: absolute;
          right: 0;
          top: 10%;
          width: 1px;
          height: 80%;
          background: ${Color.varForeground()};
          opacity: 0.2;
          transform: rotate(-10deg);
          margin-right: calc(${Root.Size} / 4);
        }
      }

      &:hover {
        text-decoration: none;

        .${ProjectGuideClassName}__link {
          &__header {
            transform: scale(1.025);
          }

          &__caption:after {
            opacity: 0.2;
          }

          &__caption:before {
            transform: translateY(-50%) scaleX(1);
            transition: transform 0.5s ease;
          }
        }
      }

      &__header {
        display: block;
        font-size: 5vw;
        will-change: transform;
        transition: transform 0.25s ease;
      }

      &__caption {
        &:before {
          content: "";
          position: absolute;
          left: calc((var(--knotchSize) + var(--knotchSpacing)) * -1);
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          width: var(--knotchSize);
          height: 1px;
          background: ${Color.varForeground()};
          will-change: transform;
          transform-origin: center left;
          transition: transform 0s ease;
        }
      }

      &__client {
        opacity: 0.5;
      }
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    .${ProjectGuideClassName}__container {
      .${ProjectGuideClassName}__link {
        &__header {
          font-size: calc(0.05 * ${Theme.Base.Grid.SiteWidth});
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${ProjectGuideClassName}__container {
      flex-direction: column;

      .${ProjectGuideClassName}__link {
        padding-right: 0;

        &:first-of-type {
          text-align: right;

          .${ProjectGuideClassName}__link__caption {
            &:before,
            &:after {
              content: none;
            }
          }

          &:after {
            height: 1px;
            width: 100%;
            margin-right: 0;
            bottom: 0;
            top: auto;
            transform: rotate(5deg);
            margin-top: calc(${Root.Size} / -4);
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${ProjectGuideClassName}__container {
      .${ProjectGuideClassName}__link {
        &__header {
          font-size: 2rem;
        }
      }
    }
  }
`;
