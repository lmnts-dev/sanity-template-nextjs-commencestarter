/**
 *
 * @author Alisha Garric
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";

// Constants
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BarGraphsClassName = "bar-graphs";

export const BarGraphsStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Root.Size};
  
  .${BarGraphsClassName} {
    &__graph {
      text-align: center;

      &__bars {
        height: calc(${Root.Size} * 3);
        display: flex;
        align-items: flex-end;
        gap: calc(${Root.Size} / 4);
        padding: 0 20% calc(${Root.Size} / 4) 20%;

        &__bar {
          flex: 1;
          background: ${Color.varAccent()};
        }
      }

      &__headline {
        padding-bottom: calc(${Root.Size} / 8);
      }

      &__body {
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    grid-template-columns: 1fr;
  }
`;
