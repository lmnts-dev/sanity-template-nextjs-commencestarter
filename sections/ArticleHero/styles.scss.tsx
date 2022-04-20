/**
 *
 * @author Alisha Garric
 * @description Text accordion section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ArticleHeroClassName = "article-hero";

export const ArticleHeroStyle = styled.section`

  ~ section, &.${ArticleHeroClassName} {
    max-width: calc(${Theme.Base.Grid.ReadingWidth} + ${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right});
    margin: 0 auto;
    overflow: hidden;
    padding-left: ${Root.Size};
    padding-right: ${Root.Size};
  }

  .${ArticleHeroClassName} {
    &__categories{
      display: flex;

      &__category {
        &:not(:first-child):before{
          content: "•";
          padding: 0 calc(${Theme.Base.Size.Sm} / 6) ;
        }
      }
    }

    &__title{
      text-align: center;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      opacity: .5;

      *:first-child:last-child {
        text-align: center;
        flex: 1;
      }
    }

    &__date {
      padding-bottom: calc(${Theme.Base.Size.Sm} / 6);
    }
  }
  
  @media (max-width: ${Theme.Base.Media.Width.Md}) {

  }
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${ArticleHeroClassName} {
      &__title{
        margin-bottom: calc(${Root.Size}/2);
      }
    }
  }
`;
