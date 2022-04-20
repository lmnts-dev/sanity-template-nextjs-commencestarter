/**
 *
 * @author Alisha Garric
 * @description These are the global styles throughout the site
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";
import { createGlobalStyle, css, keyframes } from "styled-components";

// Styles
import { Font, Typography } from "./Font";
import { Color, CssPalette } from "./Color";
import { RootVariables } from "../Root";
import { Theme } from "../Theme";
import { Root } from "../Root";
import { Base } from "./Base";

// Begin Component
//////////////////////////////////////////////////////////////////////

const Reset = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  html {  
    line-height: 1.15;
    -webkit-text-size-adjust: 100%; /* 2 */
    margin: 0;
    padding: 0;
    animation: fadein 1s ease;
    transition: background-color ${Theme.Base.Transition.Duration} ${
  Theme.Base.Transition.CssEase
};
    transition: background ${Theme.Base.Transition.Duration} ${
  Theme.Base.Transition.CssEase
};
  }
  
  body {
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    transition: background-color ${Theme.Base.Transition.Duration} ${
  Theme.Base.Transition.CssEase
};
    transition: background ${Theme.Base.Transition.Duration} ${
  Theme.Base.Transition.CssEase
};
    background: ${Color.varBackground()};


    &.__scroll-lock {
      overflow: hidden;
    }
  }
  
  /**
   * Render the 'main' element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from 'fieldset' elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    'fieldset' elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }


 
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  * { 
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; /* for remove highlight */
  }

  /* *********************** */
  /* Buttons */
  /* *********************** */

  .btn {
    color: ${Color.varForeground()};
    font-weight: bold;
  }

  /* *********************** */
  /* Section spacing */
  /* *********************** */

  .__section-horizontal-spacing {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right}; 
  }

  .__section-vertical-spacing {
    padding-top: ${Root.Grid.Section};
    padding-bottom: ${Root.Grid.Section};
  
    &__top-half {
      padding-bottom: ${Root.Grid.Section};

      &__bottom-default, &__bottom-half, &__bottom-none {
        padding-top: calc(${Root.Grid.Section} / 2);
      }

      &__bottom-default {
        padding-bottom: ${Root.Grid.Section};
      }

      &__bottom-half {
        padding-bottom: calc(${Root.Grid.Section} / 2);
      }

      &__bottom-none {
        padding-bottom: 0;
      }
    }

    &__top-none {
      padding-bottom: ${Root.Grid.Section};

      &__bottom-default, &__bottom-half, &__bottom-none {
        padding-top: 0;
      }

      &__bottom-default {
        padding-bottom: ${Root.Grid.Section};
      }

      &__bottom-half {
        padding-bottom: calc(${Root.Grid.Section} / 2);
      }

      &__bottom-none {
        padding-bottom: 0;
      }
    }

    &__top-default {    
      padding-bottom: ${Root.Grid.Section};

      &__bottom-default, &__bottom-half, &__bottom-none {
        padding-top: ${Root.Grid.Section};
      }

      &__bottom-default {
        padding-bottom: ${Root.Grid.Section};
      }
      
      &__bottom-half {
        padding-bottom: calc(${Root.Grid.Section} / 2);
      }

      &__bottom-none {
        padding-bottom: 0;
      }
    }

    &__bottom-default {
      padding-top: ${Root.Grid.Section};
      padding-bottom: ${Root.Grid.Section};
    }

    &__bottom-half {
      padding-top: ${Root.Grid.Section};
      padding-bottom: calc(${Root.Grid.Section} / 2);
    }

    &__bottom-none {
      padding-top: ${Root.Grid.Section};
      padding-bottom: 0;
    }
  }

  /* *********************** */
  /* Adding doodads */
  /* *********************** */

  .add-doodad {
    --doodadSize: 5px;
    --doodadSpacing: calc((${Root.Size} / 2));

    &:before {
      content: '';
      display: block;
      width: var(--doodadSize);
      height: var(--doodadSize);
      background: ${Color.varForeground()};
      margin-bottom: var(--doodadSpacing);
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      --doodadSize: 3px;
      --doodadSpacing: calc((${Root.Size} / 2.5));
    }
  }

  /* *********************** */
  /* Adding notches */
  /* *********************** */

  .add-knotch, .add-knotch-small {
    --knotchSize: 80px;
    --knotchSpacing: 15px;
    position: relative;

    &-small {
      --knotchSize: 40px;
    }

    &:after {
      content: '';
      position: absolute;
      left: calc((var(--knotchSize) + var(--knotchSpacing)) * -1);
      top: 50%;
      transform: translateY(-50%);
      width: var(--knotchSize);
      height: 1px;
      background: ${Color.varForeground()};
      animation: scaleX 2s 1;
      animation-fill-mode: forwards;
    }

    &.add-knotch-indent {
      padding-left: calc(var(--knotchSize) + var(--knotchSpacing));

      &:after {
        left: 0;
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      --knotchSize: 40px;
      --knotchSpacing: 10px;

      &-small {
        --knotchSize: 30px;
      }
    }
  }

  /* *********************** */
  /* Article text styles */
  /* *********************** */

  .__article-text {
    h1, h2, h3, h4, h5, h6, .headline {
      font-family: ${Font.Body};
      margin-top: calc(var(--Size) / 1);
    }

    h1, .h1 {
      font-size: 1.6rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1.5rem;
      }
    }
    h2, .h2 {
      font-size: 1.5rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1.4rem;
      }
    }
    h3, .h3 {
      font-size: 1.4rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1.3rem;
      }
    }
    h4, .h4 {
      font-size: 1.3rem;

      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1.2rem;
      }
    }
    h5, .h5 {
      font-size: 1.2rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1.1rem;
      }
    }
    h6, .h6 {
      font-size: 1.1rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 1rem;
      }
    }

    .headline {
      font-size: 2.2rem;
      @media (max-width: ${Base.Media.Width.Md + "px"}) {
        font-size: 2.1rem;
      }
    }

    a {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: ${Color.varForeground()};
        bottom: -15%;
        left: 0;
        opacity: 0.6;
        filter: blur(.75px);
        transition: all .25s ease;
        will-change: filter, bottom;
      }

      &:hover {
        text-decoration: none;

        &:after {
          filter: none;
          bottom: 0;
        }
      }
    }

    ul, ol {
      padding-left: calc(var(--Size) / 2);
      margin: calc(var(--Size) / 3) 0 0 0;

      li {
        font-size: .9rem;
        line-height: 1.4;
        padding-bottom: calc(var(--Size) / 3.5);
      }
    }

    ol {
      list-style: decimal;

      > ol {
        list-style: lower-roman;

        > ol {
          list-style: upper-roman;

          ol {
            list-style: decimal;
          }
        }
      }
    }

    ul {
      list-style: disc;
    }
  }


  /* *********************** */
  /* Animations */
  /* *********************** */

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes blurInFadeUp {
    from {
      transform: translateY(5%) scaleY(1.2);
      transform-origin: top center;
      filter: blur(10px);
      opacity: 0;
    }

    to {
      transform: translateY(0%) scaleY(1);
      transform-origin: top center;
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes marqueePos {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes marqueeNeg {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes scaleX {
    from {
      transform: scaleX(0);
      transform-origin: left center;
    }
    to {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
`;

export const animationVisibilityClass = "__visible";

export const RevealBtnInitialStyles = `
  color: transparent;
  transform: scaleY(0);
  transform-origin: bottom left;
`;

export const RevealBtn = keyframes`
  0% {
    ${RevealBtnInitialStyles}
  }
  50% {
    color: transparent;
    transform: scaleY(1);
          
  } 100% {
    transform: scaleY(1);
    color: ${Color.varAccent()};
  }
`;


export const RevealDownInitialStyles = `
  transform: scaleY(0);
  transform-origin: top center;
`;

export const RevealDown = keyframes`
  from {
    ${RevealDownInitialStyles}
  }
  to {
    transform: scaleY(1);
  }
`;

export const SlideUpInitialStyles = `
  transform: translateY(50%);
  opacity: 0;
`;

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden !important;
}`;

export const SlideUp = keyframes`
  from {
    ${SlideUpInitialStyles}
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const activeSlideImageDefaultStyles = css`
  opacity: 0;
  z-index: 0;
`;

export const previousSlideImageStyles = css`
  z-index: 1;
  opacity: 1;
`;

export const activeSlideImage = keyframes`
  0% {
    z-index: 3;
    opacity: 0;
  }
  50% {
    z-index: 3;
    opacity: 1;
  }
  100% {
    z-index: 2;
    opacity: 1;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <RootVariables />
      <Reset />
      <Typography />
      <CssPalette />
    </>
  );
};
