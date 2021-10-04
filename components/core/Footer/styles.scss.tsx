/**
 *
 * @author Alisha Garric
 * @description The website footer styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { NewsletterFormClassName } from "../../NewsletterForm/styles.scss";
import { Color } from "../../../constants/styles/Color";
import { SocialMediaClassName } from "../../SocialMedia/styles.scss";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterClassName = "lmnts-footer";

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: ${Color.varBackground()};
  position: relative;

  .${FooterClassName}__inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
  }

  .${NewsletterFormClassName} {
    grid-column: 2 / 3;
    align-self: end;
    z-index: 2;
    position: relative;
  }

  .${FooterClassName}__brandmark {
    grid-column: 1 / 2;
    margin-bottom: calc(${Root.Size} / 2);

    .ico {
      svg {
        width: calc(${Root.Size} / 2);
        height: auto;
        fill: ${Color.varForeground()};
      }
    }
  }

  .${SocialMediaClassName} {
    margin-top: calc(${Root.Size} / 2);
    grid-column: 1 / 2;
  }

  .${FooterClassName}__main-links {
    grid-column: 1 / 2;

    &__columns {
      display: flex;
      flex-wrap: wrap;

      &__column {
        &:not(:last-child) {
          padding-right: calc(${Root.Size} / 1.5);
        }
      }

      a {
        font-weight: 600;
        padding: calc(${Theme.Base.Size.Sm} / 6) 0;
        position: relative;
        width: 100%;
        display: block;

        &:hover {
          opacity: .6;
        }
      }
    }
  }

  .${FooterClassName}__bottom {
    grid-column: 1 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top: ${Root.Size};


    &__copywright {
      font-size: 0.7rem;
      padding: calc(${Theme.Base.Size.Sm} / 6);
      padding-left: 0;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${FooterClassName}__inner {
      display: block;
    }

    .${NewsletterFormClassName} {
      padding-top: ${Root.Size};
    }

    .${FooterClassName}__bottom {
      display: flex;
      flex-direction: column-reverse;

      &__links {
        padding: ${Root.Size} 0;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {

  }
`;
