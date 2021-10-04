/**
 *
 * @author Alisha Garric
 * @description The newsletter form styles
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

export const NewsletterFormClassName = "newsletter-form";

export const NewsletterFormStyle = styled.form`
  --inputHeight: ${Theme.Base.Size.Md};

  label {
    display: block;
    font-weight: bold;
  }

  input {
    background: transparent;
    border: none;
    width: 100%;
    height: var(--inputHeight);
    line-height: var(--inputHeight);
    padding: 0;
    color: ${Color.varForeground()};

    ::placeholder {
      color: ${Color.varForeground()};
      opacity: .6;
    }

    &:focus {
      border: none;
      outline: none;

      ~ button {
        transform: translateX(calc(var(--inputHeight) / 4));
      }
    }

    &:autofill {
      background-color: transparent;
    }

    &:selection {
      ${Color.varAccent()};
    }
  }

  .${NewsletterFormClassName}__email {
    display: flex;

    button {
      background: transparent;
      border: none;
      padding: 0;
      position: relative;
      will-change: transform;
      transition: transform .25s ease;
    }
  }
`;
