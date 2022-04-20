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
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SubNavHeaderClassName = "sub-nav-header";

export const SubNavHeaderStyle = styled.section`
  display: flex;
  align-items: baseline;

  .${SubNavHeaderClassName} {
    &__headline, &__links {
      flex: 0 0 50%;
    }

    &__headline {
      padding-right: ${Root.Size};
      padding-bottom: 0;
    }

    &__links {
      display: flex;
      align-items: baseline;
      overflow: auto;
      //Hide Scrollbar
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar{
        display: none;
      }

      a {
        flex: 0 0 auto;
      }

      &__label {
        opacity: .5;
        padding-bottom: 0;
        white-space: nowrap;
      }

      > *:not(:last-child) {
        margin-right: calc(${Root.Size} / 4);
      }
    }
  }
  
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
  }

   @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction:column;
    overflow:hidden;
    .${SubNavHeaderClassName} {
      &__links{
        width: 100%;
        margin-top:calc(${Root.Size}/1.5);
      }
    }
  }
`;


