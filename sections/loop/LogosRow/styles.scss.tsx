/**
 *
 * @author Alisha Garric
 * @description Logos row section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const LogosRowClassName = "logos-row";

export const LogosRowStyle = styled.section`
  --logosRowVerticalMargin: calc(${Root.Size} / 2);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  //make up for vertical logo margin
  margin-top: calc(var(--logosRowVerticalMargin) * -1);
  margin-bottom: calc(var(--logosRowVerticalMargin) * -1);

  .${LogosRowClassName}__logo {
    margin: var(--logosRowVerticalMargin) calc(${Root.Size} / 4);


    img {
      height: ${Root.Size};
      width: auto;
    }

    &--medium  img {
    height: calc(${Root.Size} / 1.5);
  }

  &--small img {
    height: calc(${Root.Size} / 2);
  }
  }

  
`;
