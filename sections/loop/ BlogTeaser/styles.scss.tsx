/**
 *
 * @author Alisha Garric
 * @description Blog teaser styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { SimpleCardClassName } from "../../../components/SimpleCard/styles.scss";
import { Root } from "../../../constants/Root";
import { Color, Palette } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import { MarqueeClassName } from "../MarqueeRow/styles.scss";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BlogTeaserClassName = "blog-teaser";

export const BlogTeaserStyle = styled.section`
  --blogTeaserMarqueeHeight: ${Root.Size};
  --blogTeaserCardWidth: 27%;
  overflow: hidden;
  position: relative;

  //gradient for cards to go under
  &:before {
    content: "";
    width: calc(${Root.Grid.Indent.X} + ${Root.Grid.Gutter.Left});
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to left,
      ${Color.varBackground("transparent")},
      ${Color.varBackground()},
      ${Color.varBackground()}
    );
    z-index: 2;
  }

  .${BlogTeaserClassName}__link {
    --caratPixelWidth: 2px;
    --caratHeight: calc(${Root.Size} / 1.5);
    --caratSize: calc(var(--caratHeight) / 5);
    position: absolute;
    top: calc(
      calc(var(--blogTeaserMarqueeHeight) * 3) + calc(${Root.Size} * 2)
    );
    left: ${Root.Grid.Gutter.Left};
    color: ${Color.varAccent()};
    z-index: 3;

    &:before {
      content: "";
      position: absolute;
      right: calc(var(--caratSize) * -2);
      top: 50%;
      height: var(--caratSize);
      width: var(--caratSize);
      border-top: var(--caratPixelWidth) solid ${Color.varAccent()};
      border-right: var(--caratPixelWidth) solid ${Color.varAccent()};
      transform: rotate(45deg) translateY(-50%);
    }
  }

  .${BlogTeaserClassName}__articles {
    display: flex;
    position: relative;
    z-index: 1;

    &__card-container {
      flex: 0 0 var(--blogTeaserCardWidth);

      &:not(last-of-type) {
        padding-right: calc(var(--Size) / 2);
      }

      &:first-of-type {
        padding-left: ${Root.Grid.Indent.X};
        flex: 0 0 calc(var(--blogTeaserCardWidth) + ${Root.Grid.Indent.X});
      }

      .${SimpleCardClassName} {
        width: 100%;
        pointer-events: none;
      }
    }
  }

  .${MarqueeClassName} {
    height: var(--blogTeaserMarqueeHeight);
    z-index: 4;
    mix-blend-mode: exclusion;
    ${CssUtils.Fullwidth()}

    * {
      overflow: visible;
      color: ${Palette.White};
    }

    ul {
      padding: 0;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --blogTeaserMarqueeHeight: calc(${Root.Size} / 1.5);
    --blogTeaserCardWidth: 35%;

    .${BlogTeaserClassName}__articles {
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --blogTeaserCardWidth: 75%;

    //remove gradient for cards to go under
    &:before {
      content: none;
    }

    .${BlogTeaserClassName}__link {
      margin-top: ${Root.Size};
      display: inline-block;
      position: relative;
      top: auto;
      bottom: auto;
      left: auto;
    }
  }
`;
