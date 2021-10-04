/**
 *
 * @author Alisha Garric
 * @description The website navigation styles
 *
 * 
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Utils
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Begin Styles
//////////////////////////////////////////////////////////////////////


export const NavigationClassName = "navigation";
export const OverlayNavigationClassName = "overlay-navigation";
 

export const NavigationStyle = styled.nav`
  --navigationSvgHeight: 29px;
  top: 0;
  width: 100%;
  left: 0;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};
  position: fixed;
  font-family: "GT America", Helvetica;
  font-size: 0.9rem;
  z-index: 800;
  will-change: transform;
  backface-visibility: hidden;
  transition: transform .25s ease;
  background: ${Color.varBackground()};

  &.__nav-hidden {
    transform: translateY(-100%);
  }

  //Default tag styles
  /////////////////////////////////
  a:hover {
    text-decoration: none;
  }

  //Navigation items container / inner
  /////////////////////////////////
  .${NavigationClassName}__inner {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  //Shared styles between navigation items: main links, nav tools and branding
  /////////////////////////////////
  .${NavigationClassName}__main-links, .${NavigationClassName}__nav-tools, .${NavigationClassName}__branding {
    height: ${Root.Nav.Size};
    display: flex;
    align-items: center;
  }

  //Shared styles between navigation items: nav tools and branding
  /////////////////////////////////
  .${NavigationClassName}__nav-tools, .${NavigationClassName}__branding {
    svg {
      fill: ${Color.varForeground()};
      height: var(--navigationSvgHeight);
      width: auto;
    }
  }

  //Navigation tools
  /////////////////////////////////
  .${NavigationClassName}__nav-tools {
    display: none;

    &__ham {
      background: transparent;
      border: none;
      ${CssUtils.RevokeChildrenPointerEvents};
    }
  }

  //Branding
  /////////////////////////////////
  .${NavigationClassName}__branding {
    flex: 1;

    &__link {
      ${CssUtils.RevokeChildrenPointerEvents};
    }
  }

  //Main links
  /////////////////////////////////
  .${NavigationClassName}__main-links {
    list-style-type: none;
    padding: 0;

    &__item {
      height: 100%;
      display: flex;
      align-items: center;

      &__label {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 10px;
      }
    }
  }
  
  //Nested links
  /////////////////////////////////
  .${NavigationClassName}__nested-links {
    display: none;
  }

  
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --navigationSvgHeight: 15px;

    //Main links
    /////////////////////////////////
    .${NavigationClassName}__main-links {
      &__item {
        display: none;
      }
    }

    .${NavigationClassName}__nav-tools {
      display: flex;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {

  }
`;

export const NavigationOverlayStyle = styled.div`
  --navMainLinkFontSize: 4.25vw;
  position: fixed;
  left: 0;
  top: ${Root.Nav.Size};
  right: 0;
  height: calc(100vh - ${Root.Nav.Size});
  background-color: ${Color.varBackground()};
  color: ${Color.varForeground()};
  z-index: 999;
  pointer-events: none;
  opacity: 0;

  //main links
  .${OverlayNavigationClassName}__main-links {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: calc(${Root.Grid.Gutter.Right} * -1);
    width: calc(100% + ${Root.Grid.Gutter.Right});

    &__item {
      overflow: hidden;
      flex: 1 1 1;
      padding-right: ${Root.Grid.Gutter.Right};
      padding-bottom: ${Root.Size};

      &__link {
        font-size: var(--navMainLinkFontSize);
        color: ${Color.varForeground()};
        padding: calc(${Theme.Base.Size.Sm} / 10) 0;
        display: block;
        white-space: nowrap;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }


  //visible overlay nav
  &.__overlay-visible {
    pointer-events: all;
    opacity: 1;
    cursor: pointer;
  }


  //Responsive styles for greater than sitewidth
  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    --navMainLinkFontSize: calc( .0425 * ${Theme.Base.Grid.SiteWidth});
  }

  //Responsive styles for smaller than tablet
  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    --navMainLinkFontSize: 3rem;
  }

  //Responsive styles for smaller than mobile
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --navMainLinkFontSize: 2rem;
  }
`;