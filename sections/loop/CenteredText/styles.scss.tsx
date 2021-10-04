/**
 *
 * CenteredText.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website CenteredText Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Color } from "../../../constants/styles/Color";
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CenteredTextClassName = "centered-text";

export const CenteredTextStyle = styled.section`

  .${CenteredTextClassName} {
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: ${Theme.Base.Grid.ReadingWidth};
      width: 100%;
      margin: 0 auto;
      position: relative;
      text-align: center;
    }
    
    &__background-image { 
      ${CssUtils.Cover};

      &:after {
        content: "";
        ${CssUtils.Cover};
        background: ${Color.varBackground()};
        opacity:.5;
      }  
    }  
  }
`;
