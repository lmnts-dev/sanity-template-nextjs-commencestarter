/**
 *
 * @author Alisha Garric
 * @description Author styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";
import { hexToRGB } from "../../utils/hexToRGB";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AccordionClassName = "accordion";

export const AccordionStyle = styled.li`
  border-bottom: 1px solid ${hexToRGB(Color.varForeground(), 0.45)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  padding-right: calc(${Root.Size} * 1.5);

  .${AccordionClassName}__listing {
    &__content {
      max-height: 0;
      overflow: hidden;
      flex: 0 0 100%;
      will-change: max-height;
      transition: max-height 0.25s ease;
      display: flex;
      width: 100%;

      &__col {
        flex: 0 0 calc(50% - calc(${Root.Size} / 2));

        &:first-of-type {
          margin-right: ${Root.Size};
        }
      }

      > *:last-child {
        margin-bottom: ${Root.Size};
      }
    }

    &__title,
    &__description {
      padding: calc(${Root.Size} / 2) 0;
    }

    &__title,
    &__description {
      flex-grow: 1;
    }

    &__title {
      font-size: 6vw;
      opacity: 1;
      flex-basis: 70%;

      //Elements to create plus toggle
      &:after,
      &:before {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        height: 1px;
        width: ${Root.Size};
        background: ${Color.varForeground()};
        will-change: transform;
        transition: transform 0.25s ease;
      }

      //vertical line to create plus
      &:before {
        transform: rotate(90deg);
      }
    }

    &__description {
      flex-basis: 30%;
    }

    &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      pointer-events: all;

      ~ * {
        pointer-events: none;
      }

      &:checked {
        + .${AccordionClassName}__listing__title {
          &:after {
            transform: rotate(45deg);
          }

          &:before {
            transform: rotate(135deg);
          }
        }

        ~ .${AccordionClassName}__listing__content {
          max-height: 200vh;
        }
      }
    }

    &:hover {
      .${AccordionClassName}__listing__title {
        opacity: .5;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    flex-direction: column;
    align-items: flex-start;
    padding-right: calc(${Root.Size} * 0.75);

    .${AccordionClassName}__listing {
      &__description {
        padding-top: 0;
      }

      &__title {
        font-size: 1.5rem;
      }

      &__title:before,
      &__title:after {
        width: calc(${Root.Size} / 2);
      }

      &__content {
        flex-direction: column;

        &__col {
          flex: 0 0 100%;
          padding-top: ${Root.Size};

          &:first-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
