// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";

// Constants


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name ArticleListingsStyle
 *
 */

export const ArticleListingsClassName = "article-listings";
export const PaginationClassName = "blog-pagination";

//article listings, aka "blog" page
export const ArticleListingsStyle = styled.section`
  --pSize: 1.4vw;
  --headerSize: 2.8vw;
  --captionSize: 1.1vw;
  display: flex;
  flex-wrap: wrap;
  pointer-events: none;

  //each article listing
  .${ArticleListingsClassName}__article {
    flex: 0 0 calc(100% / 3);
    border-right: 1px solid ${Color.varForeground()};
    border-bottom: 1px solid ${Color.varForeground()};
    padding-top: calc(calc(100% / 3) * (16 / 9));
    position: relative;
    pointer-events: none;

    &:first-of-type,
    &:nth-of-type(2),
    &:nth-of-type(3) {
      border-top: 1px solid ${Color.varForeground()};
    }

    //absolutely position article inner and bg image
    &__inner,
    > img,
    .${ArticleListingsClassName}__video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    //article inner
    &__inner {
      padding: 20% ${Root.Grid.Gutter.Right} 0 ${Root.Grid.Gutter.Left};
      display: flex;
      flex-direction: column;
      z-index: 1;
      pointer-events: all;

      * {
        pointer-events: none;
      }
    }

    //article image that shows on hover
    > .${ArticleListingsClassName}__video, img {
      object-fit: cover;
      z-index: 2;
      display: none !important;
      pointer-events: none;
    }

    //hover effect
    &:hover {
      > .${ArticleListingsClassName}__video, img {
        display: block !important;

        //hide image if cover video exists so mix-blend-mode exclusion doesn't show it through the video
        + img {
          display: none !important;
        }
      }

      a {
        text-decoration: none;
      }
    }

    //hide featured article elements
    &__cta,
    &__featured-minutes {
      display: none;
    }

    //article info that's on top
    &__top {
      flex: 0 0 60%;
      overflow: hidden;

      &__date {
        padding-bottom: 0;
        margin-bottom: calc(${Root.Size} / 2);
        font-size: var(--captionSize);
      }

      &__header {
        font-size: var(--headerSize);
        line-height: 1.4;
      }
    }

    //article info that's on bottom
    &__bottom {
      &__minutes {
        opacity: 0.5;
        font-size: var(--captionSize);
      }

      &__description {
        font-size: var(--pSize);
      }
    }

    //featured articles that we only want to apply UP TO small screens
    @media (min-width: ${Theme.Base.Media.Width.Sm}) {
      &:nth-of-type(5n) {
        flex: 0 0 calc(calc(100% / 3) * 2);

        //black overlay
        &:before {
          content: "";
          ${CssUtils.Cover};
          z-index: 1;
          background-color: ${Color.varBackground()};
          opacity: 0.4;
          will-change: opacity;
          transition: opacity 0.25s ease;
        }

        // show background image, instead of using it as a hover effect like on normal article cards
        > img,
        .${ArticleListingsClassName}__video {
          display: block;
          z-index: 0;
        }

        //article listing item
        .${ArticleListingsClassName}__article {
          //article inner
          &__inner {
            padding: 10% 10% 0 ${Root.Grid.Gutter.Left};
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: 1fr auto auto;
          }

          //article info that's on top
          &__top {
            grid-column: 1 / 4;
            grid-row: 1 / 2;
          }

          //article info that's on bottom
          &__bottom {
            grid-column: 3 / -1;

            &__minutes {
              display: none;
            }
          }

          //show featured article elements
          &__cta,
          &__featured-minutes {
            display: flex;
          }

          //featured article cta
          &__cta {
            grid-column: 1 / -1;
            width: calc(110% + ${Root.Grid.Gutter.Left});
            margin-left: calc(${Root.Grid.Gutter.Left} * -1);
          }

          //featured article minutes
          &__featured-minutes {
            grid-column: -2 / -1;
            grid-row: 1 / 2;
            text-align: right;
            font-size: var(--captionSize);
            opacity: 0.5;
          }
        }

        //hover effects: darker overlay and x-large cta line movement
        &:hover {
          &:before {
            opacity: 0.6;
          }

          .${ArticleListingsClassName}__article {
            &__cta {
              text-decoration: none;

              .line:before {
                opacity: 1;
                transform: scaleX(1) translateY(-50%);
              }
            }
          }
        }
      }
    }
  }

  //font size on super duper sized screens
  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    --pSize: calc(0.014 * ${Theme.Base.Grid.SiteWidth});
    --headerSize: calc(0.028 * ${Theme.Base.Grid.SiteWidth});
    --captionSize: calc(0.011 * ${Theme.Base.Grid.SiteWidth});
  }

  //styles for medium screens
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --pSize: 2.1vw;
    --headerSize: 4.3vw;
    --captionSize: 1.8vw;

    //article listing
    .${ArticleListingsClassName}__article {
      flex: 0 0 50%;
      padding-top: calc(calc(100% / 2) * (16 / 9));

      &:nth-of-type(3) {
        border-top: none;
      }

      //featured articles
      &:nth-of-type(5n) {
        flex: 0 0 100%;
      }
    }
  }

  //styles for small screens
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --pSize: 3.75vw;
    --headerSize: 6vw;
    --captionSize: 3vw;

    //article listing
    .${ArticleListingsClassName}__article {
      flex: 0 0 100%;

      &:nth-of-type(2) {
        border-top: none;
      }

      //black overlay
      &:before {
        content: "";
        ${CssUtils.Cover};
        z-index: 1;
        background-color: ${Color.varBackground()};
        opacity: 0.8;
        will-change: opacity;
        transition: opacity 0.25s ease;
      }

      &:hover {
        .${ArticleListingsClassName}__video {
          display: none;

          + img {
            display: block;
          }
        }
      }

      //show bg image on mobile instead of using it as hover effect like on large screens
      > img {
        display: block;
        z-index: 0;
      }

      //article inner
      &__inner {
        padding-top: 5%;
      }

      //article info that's on top
      &__top {
        flex: auto;
      }
    }
  }
`;

export const PaginationStyle = styled.div`
  margin-top: ${Theme.Base.Size.Sm};

  + section.project-sections {
    margin-top: ${Root.Size};
  }

  .pagePagination {
    position: relative;
    display: flex;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      padding: calc(${Theme.Base.Size.Sm} / 6);

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        color: ${Color.varForeground()};
        border: none;
        font-size: 1.2rem;
        width: calc(${Theme.Base.Size.Sm} / 1);
        height: calc(${Theme.Base.Size.Sm} / 1);

        &[disabled] {
          display: none;
        }
      }
    }
  }

  .paginationPrev:before,
  .paginationNext:after {
    content: "";
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 21px;
    height: 21px;
    border-top: 1px solid ${Color.varForeground()};
    border-right: 1px solid ${Color.varForeground()};
  }

  .paginationPrev:before {
    transform: translateY(-50%) rotate(225deg);
  }

  .paginationNext:after {
    transform: translateY(-50%) rotate(45deg);
  }

  .active,
  li:hover button:not(.paginationPrev, .paginationNext) {
    background-color: ${Color.varForeground()}!important;
    border-radius: 50% !important;

    color: ${Color.varBackground()}!important;
    transition: background-color 0.3s;
  }
`;
