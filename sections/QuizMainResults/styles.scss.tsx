// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { ContactFormClassName } from "../loop/ContactForm/styles.scss";
import { PathSectionClassName } from "../PathSection/styles.scss";

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name QuizMainResultsStyle
 *
 */

export const QuizMainResultsClassName = "quiz-main-results";

export const QuizMainResultsStyle = styled.section`
  display: flex;
  align-items: flex-start;

  .${QuizMainResultsClassName} {
    &__result-path__container {
       flex: 1;
    }

    &__result-path {
      padding-right: 0;
      padding-left: ${Root.Size};

      &__btn {
        align-self: flex-end;
        margin-top: calc(${Root.Size} / 2);
        min-width: 200px;
      }

      &.__align-left {
        padding-right: ${Root.Size};
        padding-left: 0;
      }
    }

    &__cta-form {
      flex: 1.5;

      .${ContactFormClassName} {
        padding-left: 0;
        padding-right: 0;

        &__form-container {
          margin-left: 0;
        }
      }
    }

    &__results-summary {
      flex: 1;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    flex-direction: column;

    .${QuizMainResultsClassName} {

      &__result-path {
        padding-left: 0;
        margin-top: ${Root.Size};

        &.__align-left {
          padding-right: 0;
          margin-top: 0;
          margin-bottom: ${Root.Size};
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {

    .${QuizMainResultsClassName} {

      &__result-path {
        &.__align-left {
          margin-bottom: 0;
          
          .${PathSectionClassName} {
            &__info {
              &__services {
                display: none;
              }
            }
          }
        }
      }
      
      &__result-path__container {
        .${PathSectionClassName} {
          position: relative;

          &__info {
            > .h3 {
              font-size: 1rem;
              padding-right: ${Root.Size};
            }

            &__text {
              display: block;

              &__container {
                margin-left: 0;
              }

              &__icon {
                position: absolute;
                top: calc(${Root.Size} / 4);
                right: calc(${Root.Size} / 4);;
                width: ${Root.Size};
              }
            }

            &__services {
              flex-direction: row;
            }
          }
        }
      }
    }
    
  }
`;
