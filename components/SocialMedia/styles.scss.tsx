/**
 *
 * @author Alisha Garric
 * @description The newsletter form styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SocialMediaClassName = "social-media";

export const SocialMediaStyle = styled.ul`
  display: flex;

  .${SocialMediaClassName} {
    &__item {

      &:not(:last-child) {
        margin-right: calc(${Root.Size} / 4);
      }

      svg {
        height: calc(${Theme.Base.Size.Sm} / 2);
        width: auto;
        fill: ${Color.varForeground()};
      }
    }
  }
`;
