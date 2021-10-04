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

// Begin Styles
//////////////////////////////////////////////////////////////////////

let indentLeft = Root.Grid.Indent.X;
let colSize = "45vw";

export const ContactFormClassName = "contact-form";

export const ContactFormStyle = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-left: ${indentLeft};
  

  position: relative;
  display: grid;
  grid-template-columns: 70% 30%;
  --contactFromSpace: calc(${Theme.Base.Size.Sm} / 3);

  //Border at bottom of form
  &:first-of-type:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid ${Color.varForeground()};
    bottom: 0;
    left: 0;
    width: calc(100% + ${Root.Grid.Gutter.Right});
  }

  .${ContactFormClassName}__text-content {
    padding: ${Root.Size} calc(${Root.Size} * 3) ${Root.Size} 0;
    position: relative;
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    &__headline {
      font-size: 8vw;
      font-weight: 500;
      padding-bottom: ${Root.Size};
    }

    &__headline, &__intro-body, &__intro-caption, &__caption {
      max-width: ${colSize};
    }

    &__intro-body, &__intro-caption {
      width: 60%;
    }

    &__caption {
      margin-bottom: calc(${Root.Size} / 2);
    }

    &__intro-caption {
      font-size: 1.6rem;
    }

    &__intro-body {
      font-size: 1.4rem;
      margin-bottom: calc(${Root.Size} / 2);
    }

    &__btn {
      font-size: 1.4rem;
    }
  }

  .${ContactFormClassName}__main-links {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: flex;;
    flex-direction: column;

    &__link {
      position: relative;
      font-size: 2rem;
      padding: calc(${Theme.Base.Size.Sm} / 2);

      //Top border of each main link
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        left: 0;
        top: 0;
        height: 1px;
        background: ${Color.varForeground()};
        opacity: 0.2;
      }

      //Arrow for each main link
      &:before {
        content: "";
        position: absolute;
        height: var(--contactFromSpace);
        width: var(--contactFromSpace);
        display: block;
        border-right: 1px solid ${Color.varForeground()};
        border-top: 1px solid ${Color.varForeground()};
        transform: rotate(45deg) translateY(-50%);
        right: ${Root.Grid.Gutter.Right};
        top: 50%;
      }
    }
  }

  .${ContactFormClassName}__form-container {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    border-left: 1px solid ${Color.varForeground()};

    &__form {

      input, textarea {
        background: transparent;
        position: relative;
        width: 100%;
        border: none;
        padding: 0;
        line-height: 1.2;
        will-change: transform;
        transition: transform .25s ease;
        color: ${Color.varForeground()};

        &:focus {
          outline: none;
          transform: scale(1.025);
        }
      }

      textarea {
        height: calc(${Root.Size} * 2);
        resize: none;
      }

      //submit form button
      button {
        background: transparent;
        border: none;
        outline: none;
        color: ${Color.varForeground()};
        font-size: 2rem;
        width: 100%;
        padding: var(--contactFromSpace) var(--contactFromSpace) 0 var(--contactFromSpace);
        margin-bottom: calc(${Root.Size} * 3);
        text-align: left;
        position: relative;
        display: block;

        &:focus, &:hover {
          &:after {
            transform: translateX(50%) rotate(45deg) scale(1.025);
          }
        }

        //submit arrow
        &:after {
          content: "";
          position: absolute;
          height: var(--contactFromSpace);
          width: var(--contactFromSpace);
          display: block;
          border-right: 1px solid ${Color.varForeground()};
          border-top: 1px solid ${Color.varForeground()};
          transform: rotate(45deg);
          right: ${Root.Grid.Gutter.Right};
          top: 50%;
          will-change: transform;
          transition: transform .25s ease;
        }
      }

      .${ContactFormClassName}__form-section {
        border-bottom: 1px solid ${Color.varForeground()};
        width: calc(100% + ${Root.Grid.Gutter.Right});
        padding: var(--contactFromSpace) ${Root.Grid.Gutter.Right} 0 var(--contactFromSpace);
        display: flex;
        flex-direction: column;

        &__number {
          display: flex;
          align-items: center;
          font-size: 1.3rem;
          font-weight: 600;
          padding-bottom: 0;

          //little decorative dot
          &:before {
            content: "";
            height: 5px;
            width: 5px;
            background: ${Color.varForeground()};
            display: block;
            margin-right: calc(var(--contactFromSpace) / 2);
          }
        }

        &__title {
          font-weight: 600;
        }

        &__field-container {
          padding: calc(var(--contactFromSpace) / 2) 0;
          position: relative;

          //field container that contain checkboxes or radio buttons
          &.__checkbox-or-radio {
            display: flex;
            position: relative;
            align-items: center;

            label {
              flex-grow: 1;
              padding-left: var(--contactFromSpace);
            }

            input {
              width: auto;
              position: relative;
              border: none;

              &:checked:after {
                background: ${Color.varForeground()};
              }

              //elements to restyle checkbox or radio button
              &:after, &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
              }

              //cover up to restyle checkbox or radio button
              &:before {
                background: ${Color.varBackground()};
                width: 100%;
                height: 100%;
              }

              //circle to restyle checkbox or radio button
              &:after {
                border-radius: 50%;
                border: 1px solid ${Color.varForeground()};
                width: calc(100% - 2px);
                height: calc(100% - 2px);
                transform: scale(0.8);
              }
            }
          }

          //top field container border
          &:after {
            position: absolute;
            content: "";
            width: calc(100% + var(--contactFromSpace) + ${Root.Grid.Gutter.Right});
            left: calc(var(--contactFromSpace) * -1);
            top: 0;
            height: 1px;
            background: ${Color.varForeground()};
            opacity: 0.2;
          }
        }
      }
      
    }

    .${ContactFormClassName}__cta {
      grid-column: 1 / 3;
    }
  }
  

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding-left: 0;
    grid-template-columns: 60% 40%;

    .${ContactFormClassName}__text-content {
      padding-right: 0;

      &__caption {
        padding-left: calc(var(--knotchSize) + var(--knotchSpacing));

        &:after {
          left: 0;
        }
      }
    }

    .${ContactFormClassName}__main-links {
      &__link {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    grid-template-columns: 100%;

    .${ContactFormClassName}__text-content, .${ContactFormClassName}__main-links, .${ContactFormClassName}__form-container {
      grid-column: 1 / -1;
    }

    .${ContactFormClassName}__form-container {
      grid-row: 2 / 3;
      border-left: none;
    }

    .${ContactFormClassName}__main-links {
      grid-row: 3 / 4;
    }

    .${ContactFormClassName}__text-content {
      grid-row: 1 / 2;
      padding-bottom: 0;

      &__headline {
        font-size: 2rem;
      }

      &__headline, &__intro-body, &__intro-caption, &__caption {
        max-width: none;
      }

      &__intro-body, &__intro-caption {
        width: 80%;
      }

      &__intro-caption {
        font-size: 1.2rem;
      }

      &__intro-body {
        font-size: 1.1rem;
      }

      &__btn {
        font-size: 1.2rem;
      }
    }
  }
`;
