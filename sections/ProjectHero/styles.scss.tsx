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
import { Color, Palette } from "../../constants/styles/Color";
import { CssUtils } from "../../constants/styles/CssUtils";
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////



export const ProjectHeroClassName = "project-hero";

export const ProjectHeroStyle = styled.section`
  display: block;
  pointer-events: all;
  opacity: 1;
  position: relative;
  top: 0;
  will-change: opacity, transform;
  transition: all .25s ease;
  width: 100vw;
  margin-bottom: -1px;
  

  .${ProjectHeroClassName} {
    &__image {
      position: relative;
      height: 48.6vw;
      ${CssUtils.Fullwidth};
      padding: 0;
      display: block;
      visibility: visible !important;


      &:before {
        content: "";
        z-index: 1;
        ${CssUtils.Cover};
        background: ${Palette.Black};
        opacity: 0;
        will-change: opacity;
        transition: all .25s ease;
      }
    }

    &__title, &__subtitle, &__description {
      color: ${Color.varForeground2};
    }

    &__title {
      position: absolute;
      padding: 0;
      text-align: center;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      transform: translateY(-50%);
      z-index: 2;
      white-space: nowrap;
      pointer-events: none;
      will-change: color, top, transform;
      transition: all .25s ease;

      &__tagline {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        opacity: 0;
        will-change: opacity;
        transition: all .25s ease;
      }
    }

    &__subtitle {
      ${CssUtils.Fullwidth};
      overflow: hidden;
      padding: calc(${Root.Size} / 8) 0;
      margin-bottom: 0;

      &__spacer {
        display: block;
        padding: 0;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        line-height: .65;

        &:after {
          content: "•";
        }
      }

      &__marquee {
        white-space: nowrap;
        display: flex;
        flex-wrap: nowrap;
        animation: marquee 30s linear infinite;

        span {
          &:after {
            content: "•";
            display: inline-block;
            font-family: 'Georgia';
            transform: scale(.6);
          }
        }
      }
    }

    &__description {
      max-width: ${Theme.Base.Grid.ReadingWidth};
      margin: 0 auto;
      padding-top: ${Root.Grid.Section};

      &__services {
        opacity: .8;
        display: flex;
        flex-wrap: wrap;
        gap: 0 calc(${Root.Size} / 2);

        li {
          padding: 0;
        }
      }
    }
  }

  &.__expanded {
    .${ProjectHeroClassName} {
      &__title {
        top: 100%;
        transform: translateY(-10%);
      }
    }

    ~ .${ProjectHeroClassName} {
      opacity: 0;
    }
  }

  &.__condensed {
    .${ProjectHeroClassName} {
      &__title {
        color: ${Palette.White};
      }

      &__image {
        &:before {
          opacity: .5;
        }
      }
    }

    &:hover {
      cursor: pointer;

      .${ProjectHeroClassName} {
        &__title {
          &__tagline {
            opacity: 1;
          }
        }
      }
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    left: calc(calc(100vw - ${Theme.Base.Grid.SiteWidth}) / -2);
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    overflow: hidden;
    
    .${ProjectHeroClassName} {
      &__title {
        font-size: 4.375rem;

        &__tagline {
          opacity: 1;
        }
      }

      &__subtitle {
        &__spacer {
          font-size: 4.375rem;
        }
      }

      &__image__video {
        display: none;
      }
    }
  }

  @media (orientation: portrait) {
    .${ProjectHeroClassName} {
      &__image {
        height: 65vh;
      }
    }
  }
`;