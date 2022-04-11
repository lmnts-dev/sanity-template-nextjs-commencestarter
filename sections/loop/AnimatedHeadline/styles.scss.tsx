import { Theme } from "../../../constants/Theme";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Color } from "../../../constants/styles/Color";
import styled from "styled-components";
import { Root } from "../../../constants/Root";

export const AnimatedHeadlineClassName = "animated-headline";

export const AnimatedHeadlineStyle = styled.section`
  height: 100vh;
  max-height:750px;
  display: flex;
  align-items: center;

  .${AnimatedHeadlineClassName} {
    &__deco-wrapper {
      svg {
        z-index: 2;
        position: absolute;
        bottom: 0;
        right: 0;
        left: ${Root.Grid.Gutter.Left};

        path {
          fill: ${Color.varForeground()};
        }
      }
    }

    &__animated-word {
      color: ${Color.varAccent()};
      text-transform: lowercase;
      line-height: 0.2;
    }

    &__text {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: ${Color.varForeground()};
    }

    &__background-image {
      ${CssUtils.Cover};

      &:after {
        content: "";
        ${CssUtils.Cover};
        background: ${Color.varBackground()};
        opacity: 0.7;
      }
    }

    &__col {
      z-index: 2;
      flex: 0 1 420px;

      &:last-child {
        padding-top: calc(${Root.Size}/ 3);
        padding-left: ${Root.Size};
        flex: 0 1 calc(420px + ${Root.Size});
      }
    }
  }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      .${AnimatedHeadlineClassName} {
        &__text {
          flex-direction: column;
        }

        &__col {
          flex: 1;
          max-width: 600px;
          margin: 0 auto;

          &:last-child {
            flex: 1;
            padding-left: 0;
            padding-top: calc(${Root.Size}/ 1.5);
          }
        }
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      overflow:hidden;

       .${AnimatedHeadlineClassName} {
        &__deco-wrapper {
          svg {
           max-height: 20vh;
          }
        }
      }
    }
`;
