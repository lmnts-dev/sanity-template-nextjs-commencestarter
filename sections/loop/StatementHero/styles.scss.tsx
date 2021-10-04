/**
 *
 * @author Alisha Garric
 * @description Statement hero styles
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

// Utility Functions

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const StatementHeroClassName = "statement-hero";

export const StatementHeroStyle = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: calc(100vh - ${Root.Nav.Size});

  .${StatementHeroClassName}__heading {
    text-align: center;
    margin: 0 auto;
    color: ${Color.varForeground()};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    animation-fill-mode: forwards;
    max-width: 900px;

    &__plain-text,
    &__link {
      margin-right: calc(${Root.Size} / 5);

      &:last-child {
        margin-right: 0;
      }
    }

    .blur {
    }

    &__link {
      position: relative;
      color: ${Color.varForeground()};

      &__image {
        animation: blobAnimation 30s ease-in-out infinite both alternate;
        height: 50vh;
        width: 50vh;
        object-fit: cover;
        opacity: 1;
        pointer-events: none;
        position: absolute;
        border-radius: 50%;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        opacity: 0;
        will-change: opacity;
        transition: 0.25s opacity ease;
      }

      &__text {
        position: relative;
        z-index: 3;
        pointer-events: none;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10%;
        height: 1px;
        background: ${Color.varAccent()};
        z-index: 2;
        opacity: 1;
        will-change: opacity;
        transition: 0.25s opacity ease;
      }

      &:after {
        content: "";
        position: fixed;
        backdrop-filter: blur(10px);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none;
        opacity: 0;
        will-change: opacity;
        transition: 0.25s opacity ease;
      }

      &:hover {
        z-index: 799;
        text-decoration: none;

        &:before {
          opacity: 0;
        }

        &:after {
          opacity: 1;
        }

        .${StatementHeroClassName}__heading__link__image {
          opacity: 0.5;
        }
      }
    }
  }

  &.__is-aligned-left {
    .${StatementHeroClassName}__heading {
      text-align: left;
      justify-content: flex-start;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${StatementHeroClassName}__heading {
      max-width: 600px;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${StatementHeroClassName}__heading {
      font-size: 1.8rem;
    }
  }
`;
