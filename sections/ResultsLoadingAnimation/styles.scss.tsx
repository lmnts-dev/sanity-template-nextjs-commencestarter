// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Palette } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name ResultsLoadingAnimationStyle
 *
 */

export const ResultsLoadingAnimationClassName = "results-loading-animation";

export const ResultsLoadingAnimationStyle = styled.section`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 700px;
  z-index: 999;
  display: grid;
  place-content: center;
  text-align: center;
  margin: 0 !important;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    position: relative;
    height: 80px;
    width: 80px;
    margin-bottom: calc(${Root.Size} / 2);

    &:before, &:after {
      content: "";
      display: block;
    }

    &:before  {
      height: 100%;
      width: 100%;
      border: 1px solid ${Palette.Black};
      animation: 4s rotateSquare infinite;
      transform: rotate(0deg);
    }

    &:after {
      position: absolute;
      height: 25%;
      width: 25%;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%) rotate(0);
      animation: 4s moveSquare infinite;
      background: ${Palette.Tan};
    }
  }

  @keyframes rotateSquare {
    0% {
      transform: rotate(0);
    }

    15% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(90deg);
    }

    35% {
      transform: rotate(90deg);
    }

    40% {
      transform: rotate(90deg);
    }

    50% {
      transform: rotate(180deg);
    }

    60% {
      transform: rotate(180deg);
    }

    65% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(270deg);
    }

    85% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes moveSquare {
    0% {
      transform: translate(-50%, -50%) rotate(0);
      background: ${Palette.Tan};
    }

    15% {
      transform: translate(-50%, -50%) rotate(0);
      background: ${Palette.Tan};
    }

    25% {
      transform: translate(350%, -50%) rotate(-90deg);
      background: ${Palette.Tan};
    }

    35% {
      transform: translate(350%, -50%) rotate(-90deg);
      background: ${Palette.Tan};
    }

    40% {
      transform: translate(350%, -50%) rotate(-90deg);
      background: ${Palette.Tan};
    }

    50% {
      transform: translate(350%, 350%) rotate(-180deg);
      background: ${Palette.Brown};
    }

    60% {
      transform: translate(350%, 350%) rotate(-180deg);
      background: ${Palette.Brown};
    }

    65% {
      transform: translate(350%, 350%) rotate(-180deg);
      background: ${Palette.Brown};
    }

    75% {
      transform: translate(-50%, 350%) rotate(-270deg);
      background: ${Palette.Rust};
    }

    85% {
      transform: translate(-50%, 350%) rotate(-270deg);
      background: ${Palette.Rust};
    }

    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
      background: ${Palette.Tan};
    }
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    
  }
`;
