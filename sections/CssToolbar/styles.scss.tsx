// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";


// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name CssToolbarStyle
 *
 */

export const CssToolbarClassName = "css-toolbar";

//article listings, aka "blog" page
export const CssToolbarStyle = styled.section`
   padding: 0;
   top: 0;
   z-index: 1000;
   position: sticky!important;
   background: ${Color.varBackground()};
   display:flex;
   flex-wrap:wrap;
   align-items:center;

   input{
      color: var(--background);
      margin: calc(${Root.Size}/4);
      width: calc(${Root.Size} * 2);

      &[type=number]{
         width: calc(${Root.Size} / 1);
      }
   }

   .fontSizes, .fontFamilies, .colors, .fontWeights{
      display:flex;
      align-items:center;
      flex-wrap:wrap;
      padding: calc(${Root.Size}/4) 0;

      h3{
         margin-right: ${Root.Size};
      }
   }
`;
