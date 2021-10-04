/**
 *
 * @author Alisha Garric
 * @description Theme toggle styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Color } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ThemeToggleClassName = "theme-toggle";
export const ThemeToggleActiveClassName = "active";

export const ThemeToggleStyle = styled.div`
  --themeToggleSize: calc(${Theme.Base.Size.Md} / 3);
  border-radius: var(--themeToggleSize);
  background: ${Color.varForeground()};
  display: inline-flex;
  padding: calc(var(--themeToggleSize) / 4);
  position: relative;
  pointer-events: all;
  cursor: pointer;

  @media (prefers-color-scheme: light) {
    flex-direction: row-reverse;
  }

  .${ThemeToggleClassName}__button {
    height: var(--themeToggleSize);
    width: var(--themeToggleSize);
    position: relative;
    border-radius: 100%;
    pointer-events: none;
    border: none;
    padding: 0;
    transform: scale(.7);
    background: transparent;
    
    &--dark {
      background: ${Color.varBackground()};
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: -10%;
        top: -10%;
        height: 75%;
        width: 75%;
        border-radius: 100%;
        background: ${Color.varForeground()};
      }
    }

    &--light {
      margin-right: calc(var(--themeToggleSize) / 6);

      svg {
        height: var(--themeToggleSize);
        width: var(--themeToggleSize);

        path {
          fill: ${Color.varBackground()};
        }
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: calc(100% - calc(var(--themeToggleSize) / 4) - var(--themeToggleSize));
    top: calc(var(--themeToggleSize) / 4);
    height: var(--themeToggleSize);
    width: var(--themeToggleSize);
    background: ${Color.varBackground()};
    border-radius: 100%;
    will-change: left;
    transition: left .15s ease;
  }

  &.__${ThemeToggleActiveClassName}:after {
    left: calc(var(--themeToggleSize) / 4);
  }

  .${ThemeToggleClassName}__input {
    display: none;
  }
`;
