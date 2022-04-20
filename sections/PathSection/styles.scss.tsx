// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name PathSectionStyle
 *
 */

export const PathSectionClassName = "path-intro";

export const PathSectionStyle = styled.section`
  --pathSectionIconHeight: calc(${Root.Size});
  display: flex;
  align-items: center;

  .${PathSectionClassName} {
    &__info{
      flex:1;
      background:${Color.varBackground()};
      padding: calc(${Root.Size}/2) calc(${Root.Size}/2) calc(${Root.Size}/4) calc(${Root.Size}/2);
      display: flex;
      flex-direction: column;

      &__text{
        display: flex;

        &__container {
          margin-left: calc(${Root.Size}/4);
        }

        &__icon {
          height: var(--pathSectionIconHeight);
          flex: 0 0 var(--pathSectionIconHeight);
          position: relative;
        }
      }

      .__checkmark-list {
        li:after, li:before{
          background:${Color.varForeground()};
        }
      }
    }

    &__details{
      flex:1;
      margin-left: calc(${Root.Size}/2);
    }
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction:column;
    .${PathSectionClassName} {
      &__info{
        margin-bottom: ${Root.Size};
      }
    }
  }
`;
