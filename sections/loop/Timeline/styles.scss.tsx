// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Color } from "../../../constants/styles/Color";


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name TimelineStyle
 *
 */

export const TimelineClassName = "timeline";

export const TimelineStyle = styled.section`
  --timelinePointSize: calc(${Root.Size} / 3);
  --timelineBorder: 3px;
  padding-left: ${Root.Grid.Indent2.Left};
  padding-right: ${Root.Grid.Indent2.Right};

  .${TimelineClassName} {
    &__slides {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 ${Root.Size};
    }

    &__years {
      grid-column: 1 / -1;
      position: relative;
      margin-bottom: calc(${Root.Grid.Section} * 2);
      width: 100%;
      height: calc(var(--timelinePointSize) * 1);

      //line for diamonds
      &:before, &__year:after {
        content: "";
        display: block;
        border-top: var(--timelineBorder) solid ${Color.varForeground()};
        width: 100%;
        position: relative;
        top: calc(calc(var(--timelinePointSize) / 2) - calc(var(--timelineBorder) / 2)); //calc( calc(var(--timelinePointSize) / 2) + calc(var(--timelineBorder) / -2)));
        opacity: .5;
        pointer-events: none;
      }

      //hack to cover extra line
      &:after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        right: calc(100% + calc(var(--timelinePointSize) / 1.5));
        width: 100vw;
        background: ${Color.varBackground()};
        pointer-events: none;
      }

      &__year {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-50%);
        pointer-events: all;
        cursor: pointer !important;

        > * {
          pointer-events: none;
        }

        &:not(:first-child){
        //  pointer-events: none;
        }

        &.__active {
          &:before {
            background: ${Color.varForeground()};
          }

          &:after {
            opacity: 1;
          }

          + .${TimelineClassName}__years__year {
          //  pointer-events: auto;
          }
        }

        &__label {
          font-weight: 700;
          display: block;
          margin-top: calc(${Root.Size} / 3);
          font-family: 'Staatliches';
          letter-spacing: .05rem;
        }
      
        //diamond
        &:before {
          content: "";
          height: var(--timelinePointSize);
          width: var(--timelinePointSize);
          display: block;
          border: 1px solid ${Color.varForeground()};
          opacity: 1;
          background: ${Color.varBackground()};
          transform: rotate(45deg);
          will-change: opacity, background;
          transition: all .5s ease;
          margin: 0 auto;
          pointer-events: none;
        }

        //filled in line
        &:after {
          width: 100vw;
          display: block;
          position: absolute;
          right: 50%;
          opacity: 0;
          will-change: opacity;
          transition: all .5s ease;
          pointer-events: none;
        }

        &:hover:not(.__active) {
          &:before {
            background: ${Color.varForeground()};
            opacity: .9;
          }
        }

        &:active, &:focus {
          outline: none;
        }
      }
    }

    &__text-slides, &__model-slides {
      display: grid;
      overflow: hidden;
      grid-row: 2 / 3;
      padding-top: calc(${Root.Size} / 2);

      &__slide, &__image {
        grid-row: 1 / 2;
        grid-column: 1/ 2;

        &__logo {
          margin: calc(${Root.Size} / 3) 0;
        }

        &:not(.__active) {
          pointer-events: none;
          opacity: 0;
        }
      }
    }

    &__text-slides {
      &__slide {
        &__year {
          font-family: 'Staatliches';
          display: block;
        }
      }
    }

    &__model-slides {
      align-self: start;

      &__image {
        align-self: end;
        pointer-events: none;
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    --timelinePointSize: calc(${Root.Size} / 5);
    --timelineBorder: 1px;


    .${TimelineClassName} {
      &__slides {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
      }

      &__years {
        margin-bottom: calc(${Root.Grid.Section});

        &__year {
          font-size: .6rem;
        }
      }

      &__text-slides, &__model-slides {
        grid-column: 1 / -1;
      }

      &__model-slides {
        grid-row: 3 / 4;
        padding-top: 0;

        &__slide {
          min-height: 25vh;
        }

        &__image {
          align-self: start;
        }
      }

      &__text-slides {
        &__slide:not(.__active) {
          display: none;
        }
      }
    }
  }
`;

/*
type styleProps = {
  width?: number;
  iconShape?: string;
}

export const TimelineModelSlideStyle = styled.div` 
  position: relative;

  .${TimelineClassName} {
    &__label {
      height: 100%;
      width: 100%;

      span {
        font-family:  ${Font.Header};
        font-weight: 400;
        text-transform: uppercase;
        opacity: 0;
        will-change: opacity;
        transition: all .5s ease;
      }
    }
  }

  &.__type-sqft {
    .${TimelineClassName} {
      &__label {
        &:before {
          content: "";
          position: absolute;
          background: ${Color.varBackground()};
          bottom: 0;
          left: 0;
          height: 0px;
          width: 0px;
          transition: all .5s ease;
        }
      }
    }

    &.__active, &.__was-active {
      .${TimelineClassName} {
        &__label {
          position: relative;
          
          &:before {
            width: ${(props: styleProps) => props.width + "%" };
            height: ${(props: styleProps) => props.width + "%" };
          }
        }
      }
    }

    &.__active {
      .${TimelineClassName} {
        &__label {
          span {
            opacity: 1;
          }
        }
      }
    }

    &.__was-active {
      .${TimelineClassName} {
        &__label {
          span {
            opacity: 0;
          }
        }
      }
    }
  }

  &.__type-merging {
    .${TimelineClassName} {
      &__label {
        &:after, &:before {
          content: "";
          position: absolute;
          background: ${Color.varBackground()};
          width: 40%;
          padding-top: 40%;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          transition: all 2s ease;
          z-index: 0;
        }

        &:after {
          right: 0;
          mix-blend-mode: exclusion;
          opacity: .6;
        }

        &:before {
          left: 0;
        }

        span {
          position: relative;
          z-index: 2;
        }
      }
    }

    &.__active {
      .${TimelineClassName} {
        &__label {

          span {
            opacity: 1;
          }

          &:after {
            transform: translate(-75%, -50%);
          }

          &:before {
            transform: translate(75%, -50%);
          }
        }
      }
    }
  }

  &.__type-quantity {
    .${TimelineClassName} {
      &__quantity {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        gap: 1.5%;

        span {
          transform: scale(0);
          margin-top: 1.5%;
          display: block;
          flex: 0 0 7%;
          padding-top: 7%;
          background: ${Color.varBackground()};
          border-radius: ${(props: styleProps) => props.iconShape == "square" ? 0 : props.iconShape == "rounded-square" ? "3px" : "100%" };
          transition: all .5s ease;
        }
      }
    }

    &.__active {
      .${TimelineClassName} {
        &__label {
          position: relative;
          z-index: 2;

          span {
            opacity: 1;
          }
        }

        &__quantity {
          span {
            transform: scale(1);
          }
        }
      }
    }
  }
`;

*/
