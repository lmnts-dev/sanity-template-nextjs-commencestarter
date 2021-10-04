/**
 *
 * @author Alisha Garric
 * @description Overlap hero section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Color, Palette } from "../../../constants/styles/Color";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const OverlapHeroClassName = "overlap-hero";

export const OverlapHeroStyle = styled.section`
  --overlapHeroOffset: ${Root.Size};
  background: ${Color.varBackground()};
  height: calc(100vh - ${Root.Nav.Size});
  display: flex;
  flex-direction: column;
  margin-top: ${Root.Nav.Size};

  .${OverlapHeroClassName}__image {
    background: ${Theme.Color.Placeholder};
    position: relative;
    flex: 1;
    z-index: 1;
    margin-top: calc(var(--overlapHeroOffset) * -1);
    ${CssUtils.Fullwidth};
  }

  .${OverlapHeroClassName}__text {
    mix-blend-mode: exclusion;
    color: ${Palette.White};
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    z-index: 2;
    max-width: 600px;
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    height: auto;

    .${OverlapHeroClassName}__image {
      padding-top: 75%;
    }
  }
`;
