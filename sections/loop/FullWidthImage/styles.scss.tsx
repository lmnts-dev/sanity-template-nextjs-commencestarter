/**
 *
 * @author Alisha Garric
 * @description Fullwidth image styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { CssUtils } from "../../../constants/styles/CssUtils";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FullWidthImageClassName = "fullwidth-image";

export const FullWidthImageStyle = styled.section`
  position: relative;
  overflow: hidden;

  .${FullWidthImageClassName}__inner {
    ${CssUtils.Fullwidth};
    padding: 0;
  }
`;
