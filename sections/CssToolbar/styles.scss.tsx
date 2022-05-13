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
   --toolbarSize: ${Root.Size};
   left: calc(var(--toolbarSize) / 2);
   bottom: calc(var(--toolbarSize) / 2);
   right: calc(var(--toolbarSize) / 2);
   z-index: 1000;
   padding: calc(var(--toolbarSize));
   position: fixed !important;
   background: ${Color.varBackground()};
   display:flex;
   flex-wrap:wrap;
   align-items:center;

   &:after {
      content: none !important;
   }

   .toggle {
      z-index: 1001;
      position: absolute;
      transform: rotate(180deg);
      color: white;
      height: var(--toolbarSize);
      width: var(--toolbarSize);
      left: 0;
      bottom: 0;
      display: grid;
      place-content: center;
      font-size: calc(var(--toolbarSize) / 2);
   }

   &:not(.__open){
      padding: calc(${Root.Size} / 2);
      right: unset;

      .toggle span {
         transform: scaleY(-1) translateY(25%);
      }

      > *:not(.toggle) {
         display: none !important;
      }
   }

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
