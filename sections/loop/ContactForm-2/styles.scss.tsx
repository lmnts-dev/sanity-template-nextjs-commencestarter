/**
 *
 * @author Alisha Garric
 * @description Contact form styles
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
import { CssUtils } from "../../../constants/styles/CssUtils";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ContactFormClassName = "contact-form";

export const ContactFormStyle = styled.section`
  display: flex;

  .${ContactFormClassName} {

    &__text {
      padding-right: ${Root.Size};
    }

    &__form-container {
      max-width: ${Theme.Base.Grid.ReadingWidth};
      margin: 0 auto;
      width: 100%;

      &__form {
        display: flex;
        flex-direction: column;

        input, textarea {
          width: 100%;
        }
      }
    }
    
    &__btn {
      min-width: 250px;
      align-self: flex-end;
    }

    &__form-section {
      display: flex;
      flex-wrap: wrap;

      > * {
        flex: 1;
      }

      &__title, &__description {
        opacity: .5;
        flex: 100% 0 0;
        padding: calc(${Root.Size} / 4);

        + p {
          margin-top: calc(${Root.Size} / -4);
          padding-top: 0;
        }
      }

      > *:not(:last-child):not(p) {
        margin-right: var(--formFieldSpacing);
      }

      &__checkbox-or-radio-options {
        padding: calc(${Root.Size} / 8) 0;
        margin-bottom: var(--formFieldSpacing);
        position: relative;

        &:after {
          content: "";
          pointer-events: none;
          ${CssUtils.Cover};
          border: 1px solid ${Color.varForeground()};
          opacity: .5;
        }
      }

      &__field-container {
        position:relative;
        margin-bottom: var(--formFieldSpacing);

        &:not(.__checkbox-or-radio){
          input {
            &:not(:placeholder-shown), &:focus {
              padding-top: calc(${Root.Size}/ 6);
            
              ~ label {
                transform: translate(0%, -145%) scale(0.65);
                opacity: 0.75;
              }
            }
          }
          
          label {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transform-origin: left center;
            pointer-events: none;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.25s ease 0s;
            left: 0px;
            transform: translate(0px, -50%);
            padding-left: calc(var(--Size) / 4);
          }
        }

        &.__checkbox-or-radio {
          display: flex;
          align-items: center;
          padding: calc(${Root.Size} / 6) calc(${Root.Size} / 4);
          position: relative;
          margin-bottom: 0;

          label {
            flex-grow: 1;
          }
        }

        input[type="checkbox"], input[type="radio"] {
          + label {
            &:before {
              content: "";
              ${CssUtils.Cover};
              opacity: .2;
            }
          }

          &:checked {
            + label:before {
              background: ${Color.varAccent()};
            }
          }
        }
      }
    }  
  }
  

  @media (max-width: ${Theme.Base.Media.Width.Md}) {

  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction: column;

    .${ContactFormClassName} {
      &__text {
        margin-bottom: ${Root.Size};
      }
      &__btn{
        align-self: flex-start;
        margin-top:calc(${Root.Size}/2);
      }
    }
  }
`;
