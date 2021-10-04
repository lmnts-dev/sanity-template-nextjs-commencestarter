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

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: ${Color.varForeground()};
    height: 1px;
    opacity: 0.15;
  }

  &.__style-bold:before {
    opacity: 1;
  }
`;
