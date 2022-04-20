// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { Theme } from "../../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name ServiceSectionStyle
 *
 */

export const ServiceSectionClassName = "service-section";

export const ServiceSectionStyle = styled.section`
  display: flex;

  .${ServiceSectionClassName} {
    &__image {
      position: relative;
      padding-top: 40%;
      flex: 0 0 40%;
      background: ${Color.Placeholder};
    }

    &__text {
      padding-left: ${Root.Size};
      padding-right: ${Root.Size};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 0 0 60%;

      &__features {
        padding-top: calc(${Root.Size} / 6);
      }

      &__btn {
        margin-top: calc(${Root.Size} / 6);
      }
    }
  }

  &.__extended-image {

    &:not(.__layout-image-right) {
      padding-left: 0 !important;
    }

    .${ServiceSectionClassName} {
      &__image {
        flex: 4;
        min-height: 400px;
        padding-top: 0;
      }

      &__text {
        flex: 3;
        padding-left: ${Root.Grid.Gutter.Left};
        padding-right: 0;
      }
    }
  }

  &.__layout-image-right {
    flex-direction: row-reverse;

    .${ServiceSectionClassName} {
      &__text {
        padding-left: 0;
        padding-right: ${Root.Grid.Gutter.Left};
      }
    }

    &.__extended-image {
      padding-right: 0 !important;

      .${ServiceSectionClassName} {
        &__text {
          padding-right: ${Root.Grid.Gutter.Right};
          padding-left: 0;
        }
      }
    }
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction: column;

    .${ServiceSectionClassName} {
      &__image {
        padding-top: 75%;
        margin-bottom: ${Root.Size};
      }
      
      &__text{
        padding: 0;

        &__btn {
          margin-top: calc(${Root.Size} / 4);
        }
      }
    }

    &.__extended-image {

      &:not(.__layout-image-right) {
        padding-left: ${Root.Grid.Gutter.Left} !important;
      }
      .${ServiceSectionClassName} {

        &__image {
          min-height: 75vw;
        }

        &__text {
          padding-left: 0;
        }
      }
    } 

    &.__layout-image-right {
      flex-direction: column;

      .${ServiceSectionClassName} {
        &__text {
          padding-right: 0;
        }
      }

      &.__extended-image {
        padding-right: ${Root.Grid.Gutter.Right} !important;

        .${ServiceSectionClassName} {
          &__text {
            padding-right: 0;
          }
        }
      }
    } 
  }
`;
