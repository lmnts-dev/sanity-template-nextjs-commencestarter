/**
 *
 * @author Alisha Garric
 * @description The website blog article styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { ArticleAuthorClassName } from "../../components/Author/styles.scss";
import { Root } from "../../constants/Root";
import { CssUtils } from "../../constants/styles/CssUtils";

// Constants
import { Theme } from "../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ArticleClassName = "blog-article";

export const ArticleStyle = styled.article`
  display: flex;
  width: 100%;

  .${ArticleClassName}__cover {
    --coverHeight: 100vh;
    height: var(--coverHeight);
    flex: 0 0 calc(var(--coverHeight) * (9 / 16));
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: ${Theme.Color.Placeholder};

    img,
    &__video {
      ${CssUtils.ObjectFit()};
    }
  }

  .${ArticleAuthorClassName} {
    margin-bottom: ${Theme.Base.Size.Lg};
  }

  .${ArticleClassName}__content {
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
    padding-top: 20vh;
    max-width: calc(${Theme.Base.Grid.ReadingWidth} + ${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right});
    margin: 0 auto;
    margin-bottom: 25vh;

    &__date {
      padding-bottom: 0;
      margin-bottom: ${Theme.Base.Size.Lg};
    }

    &__tags {
      display: flex;
      opacity: 0.5;
      margin-top: ${Theme.Base.Size.Lg};

      li {
        padding-right: calc(${Theme.Base.Size.Sm} / 4);
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${ArticleClassName}__cover {
      flex: 0 1 50vh;
    }

    .${ArticleClassName}__content {
      flex: 0 1 50vw;
      min-width: 300px;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    display: block;
    width: 100%;
    margin-left: 0;
    --articleOffset: 50vh;

    .${ArticleClassName}__cover {
      position: absolute;
      top: calc(var(--articleOffset) * -1);
      left: 0;
      right: 0;
      padding-top: calc(100% * (16 / 9));
      mix-blend-mode: exclusion;
      z-index: 2;
      height: auto;
    }

    .${ArticleClassName}__content {
      padding-left: 0;
      padding-top: ${Theme.Base.Size.Lg};
      margin-bottom: 0;
      margin-top: var(--articleOffset);
      position: relative;
      z-index: 1;

      &__tags {
        li {
          font-size: 0.8rem;
        }
      }
    }
  }

  //For all screens bigger than mobile, override cover parrallax effect applied using style tags in the logic
  @media (min-width: ${Theme.Base.Media.Width.Sm}) {
    .${ArticleClassName}__cover {
      transform: none !important;
    }
  }
`;

export default ArticleStyle;
