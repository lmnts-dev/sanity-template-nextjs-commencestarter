/**
 *
 * @author Alisha Garric
 * @description Simple hero styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";

// Constants
import { Theme } from "../../../constants/Theme";

// Utility Functions

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SimpleHeroClassName = "simple-hero";

export const SimpleHeroStyle = styled.section`
  display: flex;
  align-items: center;

  &.__centered {
    h1{
      text-align:center;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .${SimpleHeroClassName}{
    &__body{
      flex:1;
      padding-left: ${Root.Size};
    }

    &__header{
      flex:1;
    }
  }


  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${SimpleHeroClassName}__heading {
      max-width: 600px;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction:column;
    .${SimpleHeroClassName}{
      &__header {
        font-size: 1.8rem;
        width: 100%;
      }
      &__body{
        padding-left: 0;
      }
    }
  }
`;
