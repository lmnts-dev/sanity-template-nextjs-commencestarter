/**
 *
 * @author Alisha Garric
 * @description Sticky links (sub navigation that sticks to the top) styles
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

export const StickyLinksClassName = "sticky-links";

export const StickyLinksStyle = styled.div`
  --stickyLinksHeight: ${Root.Nav.Size};
  margin: 0 auto;
  position: sticky;
  z-index: 500;
  overflow-x: auto;
  overflow-y: none;
  justify-content: flex-start;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  display: flex;
  justify-content: space-between;
  ${CssUtils.NavAwareSubNav};

  &::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    height: 0px;
    display: none;
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  &:before,
  .${StickyLinksClassName}__cta:before {
    content: "";
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  &:before {
    background: ${Color.varForeground()};
    opacity: 0.2;
  }

  .${StickyLinksClassName}__label,
    .${StickyLinksClassName}__link-list,
    .${StickyLinksClassName}__cta {
    height: var(--stickyLinksHeight);
    display: flex;
    align-items: center;
    padding: 0;
  }

  .${StickyLinksClassName}__label {
    padding-right: calc(${Root.Size} * 0.5);
    white-space: nowrap;
  }

  .${StickyLinksClassName}__cta {
    --caratPixelWidth: 2px;
    --caratSize: calc(var(--stickyLinksHeight) / 5);

    color: ${Color.varAccent()};
    padding-right: calc(var(--caratSize) * 2);
    white-space: nowrap;

    &:hover {
      text-decoration: none;

      &:before {
        transform: scaleX(1);
      }
    }

    &:before {
      background-color: ${Color.varAccent()};
      transform: scaleX(0);
      transform-origin: center left;
      transition: transform 0.25s ease-in;
      will-change: transform;
    }

    &:after {
      content: "";
      position: absolute;
      right: 2px;
      top: 50%;
      height: var(--caratSize);
      width: var(--caratSize);
      border-top: var(--caratPixelWidth) solid ${Color.varAccent()};
      border-right: var(--caratPixelWidth) solid ${Color.varAccent()};
      margin-right: calc(var(--stickyLinksHeight) / 10);
      transform: rotate(45deg) translateY(-50%);
    }
  }

  .${StickyLinksClassName}__link-list {
    &__container {
      display: flex;
      width: 100%;

      &:after {
        content: "";
        min-width: calc(${Root.Size} / 3);
        display: block;
        height: 1px;
      }

      &__item {
        position: relative;
        flex-shrink: 0;
        margin-bottom: 0;

        a {
          opacity: 0.4;
          display: flex;
          padding: 0 calc(${Root.Size} / 3);
          align-items: center;
          height: var(--stickyLinksHeight);

          &:hover {
            opacity: 1;
            text-decoration: none;
          }
        }

        &:first-child {
          a {
            padding-left: 0;
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${StickyLinksClassName}__link-list {
      display: none;
    }

    .${StickyLinksClassName}__label {
      font-weight: 600;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${StickyLinksClassName}__cta {
      --caratPixelWidth: 1px;
      --caratSize: calc(var(--stickyLinksHeight) / 7);
      font-size: 1rem;
    }
  }
`;
