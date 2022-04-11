/**
 *
 * SplitStatement.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website SplitStatement Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SplitStatementClassName = "split-statement";

export const SplitStatementStyle = styled.section`
  --splitStatementImageRatio: 18vw;
  display: grid;
  grid-template-columns: calc(${Root.Grid.Indent2.Left} - ${Root.Grid.Gutter.Left}) auto calc(${Root.Grid.Indent2.Right} - ${Root.Grid.Gutter.Right});
  grid-template-rows: auto calc(${Root.Size} / 1.5) var(--splitStatementImageRatio) calc(${Root.Size} / 4) auto;

  .${SplitStatementClassName} {
    &__image {
      grid-column: 2 / -2;
      grid-row: 2 / -2;
      position: relative;
      background: ${Color.Placeholder};
      ${CssUtils.ImageShow};
    }
    
    &__part1 {
      grid-row: 1 / 3;
      grid-column: 1 / -2;
      padding-right: 10%;
    }

    &__part2 {
      grid-row: 4 / 6;
      grid-column: 2 / -1;
      text-align: right;
      padding-left: 10%;
    }

    &__part1, &__part2 {
      position: relative;
      z-index: 2;
      padding-bottom: 0;
    }
  }

  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    --splitStatementImageRatio: calc( 0.18 * ${Base.Grid.SiteWidth + "px"});
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    --splitStatementImageRatio: 24vw;
    grid-template-columns: 1fr;

    .${SplitStatementClassName} {
      &__part1, &__part2, &__image {
        grid-column: 1 / -1;
      }

       &__part1, &__part2 {
        padding: 0;
        font-size: 4rem;
       }
    }
  }
`;
