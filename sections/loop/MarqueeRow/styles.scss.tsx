/**
 *
 * @author Alisha Garric
 * @description Marquee row styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { Theme } from "../../../constants/Theme";

// Constants


// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////
export const MarqueeClassName = "marquee-row";

export const MarqueeRowStyle = styled.section`
  position: relative;
  padding-left: 0;
  padding-right: 0;

  .${MarqueeClassName} {
    &__inner {
      overflow: hidden;
      width: 100%;
      flex-shrink: 0;
      display: flex;
      flex-wrap: nowrap;
    }
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex-shrink: 0;
    position: relative;
    animation: marquee 30s linear infinite;

    li {
      width: auto;
      flex-shrink: 0;
      white-space: nowrap;
      margin-right: calc(${Root.Size});
      color: ${Color.varForeground()};
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;

      &:before {
        content: "/";
        margin-right: ${Root.Size}; 
        margin-left: ${Root.Size};
      } 
    }
  }


  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    ul {
      li {
        margin-right: calc(${Root.Size} / 2);
      }
    }
  }
`;
