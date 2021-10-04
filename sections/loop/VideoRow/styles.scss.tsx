/**
 *
 * @author Alisha Garric
 * @description Video row section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Constants
import { Theme } from "../../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const VideoRowClassName = "video-row";

export const VideoRowStyle = styled.section`
  overflow: hidden;

  .${VideoRowClassName}__inner {
    ${CssUtils.Fullwidth};
  }

  .${VideoRowClassName}__trailer {
    padding-bottom: 56.25%;
    position: relative;
    background: ${Theme.Color.Placeholder};

    > *:not(button) {
      ${CssUtils.Cover};
    }
  }

  .${VideoRowClassName}__toggle {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    border-radius: 50%;
    background: ${Color.varForeground()};
    height: calc(${Root.Size} * 2);
    width: calc(${Root.Size} * 2);
    border: none;
    font-size: 5rem;
    will-change: opacity;
    transition: opacity 0.25 ease;
    padding: 0;

    &:after {
      content: "►";
      color: ${Color.varBackground()};
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 2rem;
      transform: translate(-40%, -50%);
    }

    &:focus,
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${VideoRowClassName}__trailer {
      &__toggle {
        font-size: 9vw;
        height: 18vw;
        width: 18vw;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${VideoRowClassName}__trailer {
      &__toggle {
        font-size: 12vw;
        height: 24vw;
        width: 24vw;
      }
    }
  }
`;
