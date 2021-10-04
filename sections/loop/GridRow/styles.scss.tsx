/**
 *
 * @author Alisha Garric
 * @description Grid row section styles
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

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GridRowClassName = "grid-row";

export const GridRowStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .${GridRowClassName}__section-grid-col {
    &.${GridRowClassName}__section-grid-item {
      padding: calc(${Root.Size} / 4);

      .section-grid-img-wrapper {
        position: relative;
        background: ${Theme.Color.Placeholder};
        width: 100%;
        padding-bottom: 33vw;
        overflow: hidden;

        img {
          ${CssUtils.ObjectFit()}
          z-index: 15;
        }
      }

      &-25w {
        width: 25%;
      }

      &-33w {
        width: 33.333333333%;
      }

      &-50w {
        width: 50%;
      }

      &-66w {
        width: 66.666666666%;
      }

      &-75w {
        width: 75%;
      }

      &-100w {
        width: 100%;
      }

      &-fillw {
        flex: 1;
      }

      /* Orientation */
      &-orientation-contain {
        .section-grid-img-wrapper {
          background: none;

          img {
            object-fit: contain;
          }
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${GridRowClassName}__section-grid-col {
      &.${GridRowClassName}__section-grid-item {
        padding: calc(${Root.Size} / 10);
      }
    }
  }
`;
