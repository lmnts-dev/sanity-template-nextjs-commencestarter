/**
 *
 * @author Alisha Garric
 * @description The website section container that provides the site max width styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { Settings } from "../../../constants/site/Settings";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const InnerGridStyle = styled.div`
  max-width: ${Theme.Base.Grid.SiteWidth};
  width: 100%;
  margin: ${(props: {startBelowNav: boolean}) =>
    props.startBelowNav !== true ? "0 auto" : `${Root.Nav.Size} auto 0 auto` };
      
  //Add themed background color to all sections
  > section {
    position: relative;
    color: var(--foreground);

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--background);
      z-index: -1;
    }

    //styles to make each section's background color only 
    //expand to the maxSiteWidth, or pastmaxSiteWidth (fullwidth)
    ${
      Settings.fullwidthSectionBackgrounds
        ? `&:after {
        width: 100vw;
        left: calc(calc(100vw - 100%) / -2);
      }`
        : `&:after {
      left: 0;
      width: 100%;
    }
  `
    }
  }
`;
