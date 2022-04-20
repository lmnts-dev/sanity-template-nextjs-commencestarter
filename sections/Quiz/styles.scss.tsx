// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color, Palette } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";

// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name QuizStyle
 *
 */

export const QuizClassName = "custom-quiz";



export const QuizStyle = styled.section`

  //Quiz container placement
  /////////////////////////////////////////////////
  position: fixed !important;
  margin: 0 !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 700px;
  z-index: 999;
  display: flex;
  flex-direction: column;

  //Form element general styles, excluding where they are in the layout
  /////////////////////////////////////////////////
  input[type="checkbox"], input[type="radio"] {
    display: none;

    //alter label to show checked state
    &:checked + label {
      background-color: ${Color.varAccent()};

      &:after, &:before {
        opacity: 1;
      }
    }

    //style label, since we're hiding the input itself
    + label {
      position: relative;
      padding: calc(${Root.Size} / 4) calc(${Root.Size} / 1.5);
      margin: calc(${Root.Size} / 5) calc(${Root.Size} / 4);
      background: ${Color.varBackground()};
      display: grid;
      place-content: center;
      
      //hover state
      &:hover {
        cursor: pointer;
        
        &:after {
          opacity: 1;
        }
      }

      //border around label
      &:after {
        content: "";
        ${CssUtils.Cover};
        border: 1px solid ${Color.varForeground()};
        opacity: .5;
        pointer-events: none;
      }

      //checkmark within label
      &:before {
        content: "";
        height: 18px;
        width: 10px;
        border-right: 1px solid ${Color.varForeground()};;
        border-bottom: 1px solid ${Color.varForeground()};;
        left: 0;
        top: 50%;
        opacity: 0;
        transform: translate(250%, -50%) rotate(45deg);
        position: absolute;

        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          transform: translate(125%, -50%) rotate(45deg) scale(.8);
        }
      }

      //text inside of label
      .${QuizClassName}__checkbox-or-radio-label__answer-text {
        padding: 0;
      }

      //accomodate for when an image is in the label
      &.__with-image {
        display: flex;
        flex-direction: column;
        padding: calc(${Root.Size} / 4);
        margin: calc(${Root.Size} / 10) calc(${Root.Size} / 8);

        //get rid of checkmark
        &:before {
          content: none;
        }

        .${QuizClassName}__checkbox-or-radio-label__image {
          height: calc(${Root.Size} * 2.5);
          position: relative;
          margin-bottom: calc(${Root.Size} / 4);

          img {
            pointer-events: none;
          }
        }
      }
    }
  }

  //override input styles for quiz form application
  input[type="text"] {
    background: ${Color.varBackground()};
    opacity: 1;
  }

  //Styling to enable next buttons using :invalid and :checked selectors
  input[type="text"]:valid, input[type="checkbox"]:checked, input[type="radio"]:checked {
    ~ .${QuizClassName}__quiz-content__fields__btn-container {

      .btn.__btn-disabled {
        opacity: 1;
        background: ${Color.varAccent()};
        color: ${Color.varForeground()};
        pointer-events: auto;

        &:after {
          content: none;
        }
      }
    }
  }
  


  

  //Quiz Nav
  /////////////////////////////////////////////////
  .${QuizClassName} {
    &__quiz-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: ${Root.Nav.Size};
      background: ${Color.varBackground()};
      padding-left: ${Root.Grid.Gutter.Left};
      padding-right: ${Root.Grid.Gutter.Right};

      svg {
        fill: ${Color.varForeground()};
      }

      &:before, &__progress-bar {
        position: absolute;
        height: 6px;
        left: ${Root.Grid.Gutter.Left};
        right: ${Root.Grid.Gutter.Right};
        top: 100%;
      }

      &__progress-bar {
        background-color: ${Color.varAccent()};
        transform: scaleX(.01);
        transform-origin: center left;
        will-change: transform;
        transition: transform .25s ease;
      }

      &:before {
        content: "";
        background-color: ${Color.varForeground()};
        opacity: .05;
      }

      &__score {
        padding-bottom: 0;
      }

      a:last-of-type{
        padding: 0 calc(var(--Size) / 5);
        height: calc(var(--ButtonSize) * 0.6);
        line-height: calc(var(--ButtonSize) * 0.6);
        font-weight: 500;
        background-image: linear-gradient(var(--accent),var(--accent));
        background-size: 100% 2px;
        background-repeat: no-repeat;
        background-position: 100% 100%;
        will-change: background;
        transition: background 0.25s ease 0s;
        overflow: hidden;

        &:hover{
          outline: none;
          background-size: 100% 100%;
        }
      }
    }

    //All quiz layout styles
    /////////////////////////////////////////////////
    &__quiz-content {
      flex: 1;      

      //don't let inputs or their labels get too big, but make them wider than their text content
      input, label {
        flex: 0 1 320px;
        margin: 0 auto;
        text-align: center;

        //text field label
        &.${QuizClassName}__quiz-content__fields__text-label {
          flex: 0 0 100%;
          margin-bottom: calc(${Root.Size} / 4);
        }

        //image radio label {
        &.__with-image {
          flex: 0 1 160px;
        }
      }

      &__question-content {
        text-align: center;
        display: none;
        flex-direction: column;
        height: calc(100vh - ${Root.Nav.Size});
        min-height: -webkit-min-content; // works for opera and safari
        min-height: min-content; // works for chrome
        overflow: auto;

        &.__active {
          display: flex;
        }
      }

      //fields question container
      &__fields-question {
        max-width: ${Theme.Base.Grid.ReadingWidth};
        margin: 0 auto;
        position: sticky;
        position: --webkit-sticky;
        top: 0;
        z-index: 3;

        //background to hide answers scrolling beneath it
        &:before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          height: calc(100% + ${Root.Grid.Section});
          width: 100vw;
          background: ${Color.varBackground()};
          transform: translateX(-50%);
        }

        > * {
          position: relative;
        }
      }

      //fields container
      &__fields {
        --btnContainerSize: calc(${Root.Button.Size} * 2);
        --spaceAboveButton: calc(${Root.Button.Size} / 2);
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        margin: 0 auto calc(var(--btnContainerSize) + var(--spaceAboveButton)) auto;
        max-width: 1000px;
        width: 100%;
        padding-bottom: var(--spaceAboveButton);

        //buttons container
        &__btn-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          bottom: var(--btnContainerSize);
          left: 50%;
          transform: translateX(-50%);

          //background to hide answers scrolling beneath it
          &:before {
            content: "";
            position: absolute;
            left: 50%;
            top: calc(var(--spaceAboveButton) * -1);
            height: 50vh;
            width: 100vw;
            background: ${Color.varBackground()};
            transform: translateX(-50%);
          }
        }

        &__intro-image {
          width: 100%;
          max-height: 50vh;
          height: 80%;
          padding-top:10%;
          position: relative;

          div{
            min-height: 200px;
          }

          img {
            height: 50vh;
            width: auto;
          }
        }
      }
    }

    //Tooltip styles
    /////////////////////////////////////////////////
    &__checkbox-or-radio-label {

      &__tooltip {
        position: absolute;
        right: 0;
        top: 0;
        height: calc(${Root.Button.Size} / 2);
        width: calc(${Root.Button.Size} / 2);
        line-height: 1;
        opacity: .5;
        z-index: 2;

        &:hover, &.__open {
          opacity: 1;

          * {
            display: block;
          }
        }

        &:focus {
          outline: none;
        }

        &__mark{
        }

        &__text {
          display: none;
          border: 1px solid ${Color.varForeground()};
          background: ${Palette.Brown};
          padding: calc(${Root.Size} / 4) !important;
          right: calc(100% + calc(${Root.Size} / 8));
          width: calc(${Root.Size} * 4);
          max-height: 50vh;
          overflow: auto;

          //posittion fixed option
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          //posittion absolute option
          /*
          {
            position: absolute;
            top: calc(${Root.Size} / 8);
            transform: translate(0, 0);

            &:after {
              content: "";
              width: calc(${Root.Size} / 4);
              height: calc(${Root.Size} / 4);
              background: ${Palette.Brown};
              border-right: 1px solid ${Color.varForeground()};
              border-top: 1px solid ${Color.varForeground()};
              transform: rotate(45deg) translate(25%, 25%);
              transform-origin: bottom right;
            }
          }
          */
        }
      }
    }
  }

  //styles for small screens
  @media (max-height: ${Theme.Base.Media.Height.Sm}) {
  
  }
`;
