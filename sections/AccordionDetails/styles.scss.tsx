/**
 *
 * @author Alisha Garric
 * @description Text accordion section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AccordionDetailsClassName = "accordion-details";

export const AccordionDetailsStyle = styled.section`
  --accordionDetailsHeight: ${Root.Size};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${Root.Size};

  .${AccordionDetailsClassName}__toggle {
    background: transparent;
    border: none;
    color: ${Color.varForeground()};
    padding: 0;
    height: var(--accordionDetailsHeight);
    line-height: var(--accordionDetailsHeight);
    margin: 0;
    width: 100%;
    text-align: left;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      height: calc(var(--accordionDetailsHeight) / 4);
      width: calc(var(--accordionDetailsHeight) / 4);
      border-left: 1px solid ${Color.varForeground()};
      border-top: 1px solid ${Color.varForeground()};
      transform: translateY(-25%) rotate(45deg);
      margin-right: calc(var(--accordionDetailsHeight) / 8);
      will-change: transform;
      transition: transform 0.5s ease;
    }
  }

  .${AccordionDetailsClassName}__details {
    max-height: var(--accordionDetailsHeight);
    overflow: hidden;
    will-change: max-height;
    transition: max-height 0.5s ease;

    &.__open {
      max-height: 200vh;

      .${AccordionDetailsClassName}__toggle:after {
        transform: translateY(-50%) rotate(-135deg);
      }
    }

    &__row {
      display: grid;
      grid-template-columns: 1fr 1fr;

      &:not(:first-child) {
        border-top: 1px solid ${Color.varForeground()};
        padding-top: calc(${Theme.Base.Size.Sm} / 10);
        margin-top: calc(${Theme.Base.Size.Sm} / 10);
      }

      &__label {
        grid-row: 1 / -1;
        grid-column: 1 / 2;
        font-weight: 700;
      }

      &__value {
        grid-column: 2 / 3;
      }

      &__label,
      &__value {
        padding: calc(${Theme.Base.Size.Sm} / 10) 0;

        p {
          padding-bottom: 0;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    grid-template-columns: 1fr;
  }
`;
