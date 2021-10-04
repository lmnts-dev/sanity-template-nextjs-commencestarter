/**
 *
 * @author Alisha Garric
 * @description The website 404 styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";

// Constants
import { Color } from "../../constants/styles/Color";


// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FourOhFourStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${Root.Nav.Size});

  h1 {
    text-align: center;
    color: ${Color.varForeground()};
  }

  p {
    font-size: 4vw;
  }

  a {
    font-size: 2vw;
    color: ${Color.varForeground()};

    &:visited,
    &:hover,
    &:active {
      color: ${Color.varForeground()};
    }
  }
`;
