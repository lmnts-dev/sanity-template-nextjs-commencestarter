/**
 *
 * @author Alisha Garric
 * @description Section break styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants

// Helpers
import { Color } from "../../../constants/styles/Color";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SectionBreakStyle = styled.section`
  position: relative;
  width: 100%;
  height: 1px;

  &:before {
    content: "";
    position: relative;
    display: block;
    background: ${Color.varForeground()};
    height: 1px;
    opacity: 0.15;
    width: 100%;
  }

  &.__style-bold:before {
    opacity: 1;
  }
`;
