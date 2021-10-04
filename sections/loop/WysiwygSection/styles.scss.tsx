/**
 *
 * @author Alisha Garric
 * @description Wysiwyg section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const WysiwygSectionClassName = "wysiwyg-section";

export const WysiwygSectionStyle = styled.section`
  .${WysiwygSectionClassName} {
   &__container {
     max-width: ${Theme.Base.Grid.ReadingWidth};
     margin: 0 auto;
   }
  }
`;
