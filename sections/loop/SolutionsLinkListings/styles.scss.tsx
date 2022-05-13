/**
 *
 * @author Alisha Garric
 * @description Blog teaser styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SolutionsLinkListingsClassName = "solutions-link-listings";

export const SolutionsLinkListingsStyle = styled.section`
  .${SolutionsLinkListingsClassName} {
    &__header {
      flex: 1;
      position: sticky;
      position: -webkit-sticky;
      top: calc(var(--NavSize) * 1.5);

      > * {
        max-width: 600px;
      }
    }

    &__solutions__container {
      position: relative;
      flex: 2;
      min-height: 400px;
    }

    &__container {
      position: relative;
      display: flex;
      gap: calc(${Root.Size} / 1.5);
      align-items: flex-start;
    }
  }

  &.__full-height {
    .${SolutionsLinkListingsClassName} {
      &__solutions {
        position: relative;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${SolutionsLinkListingsClassName} {
      &__header {
      //  padding-bottom: 0;
        position: relative;
        top: 0;
      }

      &__solutions__container {
        min-height: auto;
      }

      &__container {
        flex-direction: column;

        &:after {
          content: none;
        }
      }

      &__solutions {
        position: relative;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
  
  }
`;

export const SolutionsListingsSolution = styled.span`
  //TODO: x-lg screen vw repsonsive
  --solutionsListingsFontSize: 3vw;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  font-size: var(--solutionsListingsFontSize);
  padding: calc(var(--solutionsListingsFontSize) / 1.5) 0;
  position: relative;
  width: 100%;
  cursor: pointer;
  text-align: left;
  position: relative;
  line-height: 1;

  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid ${Color.varForeground()};
  }

  &:focus {
    outline: none;
  }

  svg {
    margin: 0 calc(var(--solutionsListingsFontSize) / 2);
    height: calc(var(--solutionsListingsFontSize) / 1.35);
    width: auto;
    grid-column: 1 / 2;

    * {
      fill: ${Color.varForeground()};
    }
  }

  span, svg {
    position: relative;
  }

  span {
    grid-column: 2 / 3;
    white-space: nowrap;
  }

  &:before {
    content: "";
    top: 0;
    height: calc(var(--solutionsListingsFontSize) + calc(calc(var(--solutionsListingsFontSize) / 1.5) * 2));
    width: 100%;
    background: ${Color.varAccent()};
    position: absolute;
    transform: scaleX(0) scaleY(.85);
    will-change: transform;
    transform-origin: center left;
    transition: transform .25s ease-in;
  }

  &:hover {
    &:before {
      transform: scaleX(1) scaleY(.85);
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --solutionsListingsFontSize: 4vw;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --solutionsListingsFontSize: 4.5vw;
  }
`;